<template>
    <div class=" h-[30px] shadow-sm flex">
        <ul class="box-border h-full w-full">
            <li
                class="tags-li"
                v-for="(item, index) in tags.list "
                :key="index"
                :class="{ active: isActive(item.path)}"
            >
                <router-link :to="item.path" class="no-underline">{{ item.title }}</router-link>
                <el-icon @click="closeTags(index)">
                    <Close />
                </el-icon>
            </li>
        </ul>
        <el-dropdown class="absolute right-0 top-0 w-[110px] h-full">
            <el-button class="h-[20px]">
                标签选项
                <el-icon>
                    <arrow-down />
                </el-icon>
            </el-button>
            <template #dropdown>
                <el-dropdown-menu>
                <el-dropdown-item @click="closeOther">关闭其他</el-dropdown-item>
                <el-dropdown-item @click="closeAllTags">关闭所有</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script setup lang='ts'>
import { useTagsStore } from '@/stores/tags';
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const tags = useTagsStore();

const isActive = (path: string) => {
	return path === route.fullPath;
};

// 设置标签 
const setTags = (route: any) => {
    const isExist  = tags.list.some(item => {
        return item.path === route.fullPath
    })
    if (!isExist) {
        if (tags.list.length > 8) {
            tags.delTagsItem(0);
        }
        tags.setTagsItem({
            name: route.name,
            title: route.meta.title,
            path: route.fullPath
        })
    }
}

setTags(route);
onBeforeRouteUpdate(to => {
	setTags(to);
});

// 关闭单个标签
const closeTags = (index: number) => {
    const delItem = tags.list[index]
    tags.delTagsItem(index);
    const item = tags.list[index] ? tags.list[index] : tags.list[index - 1];
    if (item) {
        delItem.path === route.fullPath && router.push(item.path)
    } else {
        router.push('/home')
    }
}

// 关闭所有标签
const closeAllTags = () => {
    tags.$reset();
    router.push('/home')
}
// 关闭其他标签
const closeOther = () => {
    const currItem = tags.list.filter(item => {
        return item.path === route.fullPath;
    })
    tags.closeOtherTags(currItem);
}
</script>
<style scoped>
    .tags-li {
        display: flex;
        align-items: center;
        float: left;
        margin: 3px 5px 2px 3px;
        border-radius: 3px;
        font-size: 12px;
        overflow: hidden;
        cursor: pointer;
        height: 23px;
        border: 1px solid #e9eaec;
        background: #fff;
        padding: 0 5px 0 12px;
        color: #666;
        -webkit-transition: all 0.3s ease-in;
        -moz-transition: all 0.3s ease-in;
        transition: all 0.3s ease-in;
    }

    .active {
        background-color: #409EFF;
        color: white;
    }

    a {
        text-decoration: none;
    }

    .router-link-active {
        color: white;
    }

    button {
        height: 30px;
    }
</style>