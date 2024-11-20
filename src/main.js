import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import { createPinia } from "pinia"
import globalFunction from "./global"
import Icon from "./components/IconMask.vue"
import VueObserveVisibility from "vue3-observe-visibility"
import "animate.css"
import Toast from "./components/toast.vue"
import toastPlugin from "./toastPlugin"
const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.component("Icon", Icon)
app.use(VueObserveVisibility)
Object.assign(app.config.globalProperties, globalFunction)
import { useUserStore, priceStore } from "./store"
globalFunction
    .api({
        path: "/web/auth/get-price",
        method: "GET"
    })
    .then(e => {
        let price = priceStore()
        price.setPrice(e)
    })
globalFunction
    .api({
        path: "/web/auth/authentication",
        method: "GET"
    })
    .then(e => {
        let userStore = useUserStore()
        userStore.setAuth(e)
        app.use(router)
        app.use(toastPlugin)

        app.component("Toast", Toast)
        app.mount("#app")
        setTimeout(() => {
            AOS.init({
                duration: 1500,
                offset: 300,
                once: true
            })
        }, 500)
    })
