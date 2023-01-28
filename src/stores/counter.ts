import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const userInfoStore = defineStore('userInfo', {
    state: () => {
        return {
            username: localStorage.getItem('username')
        }
    }
})
