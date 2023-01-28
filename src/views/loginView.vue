<template>
    <div class="bg-cover w-screen h-screen bg-[url('../assets/bg.jpg')] flex justify-center items-center">
        <div class="rounded-lg bg-white flex flex-col h-[30vh] w-1/4 p-4">
        <div class="flex m-4">
            <span class="flex justify-center">
                后台管理系统
            </span>
            <span class="flex flex-1 justify-end">
                <router-link to="/">
                    <i class="glyphicon glyphicon-remove"></i>
                </router-link>
            </span>
        </div>
        <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
    >
            <el-form-item label="username" prop="username">
            <el-input 
                v-model="ruleForm.username" 
                class="border-2 w-full"
            />
            </el-form-item>
            <el-form-item label="password" prop="password">
            <el-input
                v-model="ruleForm.password"
                type="password"
                class="border-2 w-full"
            >
            </el-input>
            </el-form-item>
            <el-form-item>
            <div class="flex justify-items-center ">
                <el-button 
                type="primary" 
                @click="submitForm(ruleFormRef)"
                >
                Submit
                </el-button>
                <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
            </div>
            </el-form-item>
    </el-form>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref,reactive } from 'vue';
import { ElMessage, type FormInstance } from 'element-plus'
import { login } from '../request/api'
import { useRouter } from 'vue-router';

const router = useRouter();
const ruleFormRef = ref<FormInstance>()

const ruleForm = reactive({
    username: '',
    password: '',
})

const rules = reactive({
    username: [
        {
            required: true,
            message: '请输入您的帐号',
            trigger: 'blur'
        },
        {
            min: 0,
            max: 15,
            trigger: 'blur',  // 失去焦点时进行验证
        }
    ],
    password: [
        {
            required: true,
            message: '请输入您的密码',
            trigger: 'blur'
        },
        {
            min: 3,
            max: 15,
            trigger: 'blur',
        }
    ]
})

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            login(ruleForm).then((res) => {
                // 将token进行保存
                localStorage.setItem('token',res.userInfo.token);
                if (ruleForm.username === res.userInfo.username) {
                    if (ruleForm.password === res.userInfo.password) {
                        router.push('/home')
                        ElMessage({
                            message: `登陆成功！欢迎${res.userInfo.username}回来~`,
                            type: 'success',
                        })
                    }else {
                        ElMessage({
                            message: '登陆失败！密码错误~',
                            type: 'error',
                        })
                    }
                }else {
                    ElMessage({
                        message: '登陆失败！用户名不存在~',
                        type: 'error',
                    })
                }
            })
        } else {
            
        return false
        }
    })
}
const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}
</script>