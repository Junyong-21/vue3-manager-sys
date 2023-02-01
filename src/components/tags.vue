<template>
    <div class=" h-[30px] shadow-sm">
        <ul class="box-border w-full h-full">
            <li
                class="tags-li"
                v-for="(item, index) in tags.list "
                :key="index"
                :class="{ active: isActive(item.path)}"
            >
                <router-link :to="item.path" class="no-underline">{{ item.title }}</router-link>
                <i class="glyphicon glyphicon-remove ml-2" @click="closeTags(index)"></i>
            </li>
        </ul>
    </div>
</template>

<script setup lang='ts'>
import { useTagsStore } from '@/stores/tags';
import { ref,reactive } from 'vue'
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
</style>