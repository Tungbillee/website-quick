import { defineStore } from "pinia"
console.log(defineStore)

export const useUserStore = defineStore({
    id: "user",
    state: () => ({
        user: {},
        isLogin: false
    }),

    actions: {
        setAuth(e) {
            this.user = e.user_data
            this.isLogin = e.isLogin
        }
    }
})
export const priceStore = defineStore({
    id: "price",
    state: () => ({
        price: {}
    }),

    actions: {
        setPrice(e) {
            this.price = e.data
        }
    }
})
export const useBuyPackageStore = defineStore({
    id: "buyPackage",
    state: () => ({
        select_package: null
    }),

    actions: {
        setSelectPackage(e) {
            this.select_package = e
        }
    }
})
export const useEmailStore = defineStore({
    id: "email",
    state: () => ({
        email: null,
        tempPassword: null,
        error: null,
        stt_login: false
    })
})

export const linkDowloadVideo = defineStore({
    id: "url",
    state: () => ({
        url: null,
        videos: null
    })
})

export const positon = defineStore({
    id: "popup",
    state: () => ({
        showPosition: false,
        showPopup: false
    }),
    actions: {
        setShowPosition(status) {
            this.showPosition = status
        },
        setShowPopup(status) {
            this.showPopup = status
        }
    }
})
export const dataVideo = defineStore({
    id: "dataVideo",
    state: () => ({
        selectedVideo: null
    }),
    actions: {
        setDataVideo(item) {
            this.selectedVideo = item
        }
    }
})
