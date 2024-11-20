import { createRouter, createWebHistory } from "vue-router"
import routes from "~pages"
import { createRouterLayout } from "vue-router-layout"
import { useUserStore } from "../store"

const RouterLayout = createRouterLayout(layout => {
    return import(`../layouts/${layout}.vue`)
})

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            redirect: "/home" // Chuyển hướng từ "/" đến "/home"
        },
        {
            path: "/",
            component: RouterLayout,
            children: routes
        },
        {
            path: "/:pathMatch(.*)*",
            redirect: "/home"
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: "smooth"
            }
        }
        return { x: 0, y: 0 }
    }
})
router.beforeEach((to, from, next) => {
    // Lấy store quản lý user
    const userStore = useUserStore()

    // Lấy thông tin user và trạng thái đăng nhập
    const { user, isLogin } = userStore

    // Lấy metadata của route đích
    const meta = to.meta

    // Lấy các flag từ metadata
    const { needLogin, both } = meta
    const isAgencyRoute = to.path.startsWith("/admin-panel")

    // Kiểm tra quyền truy cập admin panel
    if (isAgencyRoute) {
        if (!isLogin || !user.is_agency) {
            return next("/home")
        }
    }
    // Trường hợp 1: Nếu route có both = true
    // => Cho phép truy cập tự do (cả đã đăng nhập và chưa đăng nhập)
    if (both) return next()

    // Trường hợp 2: Nếu route yêu cầu đăng nhập (needLogin = true) nhưng user chưa đăng nhập
    // => Chuyển hướng về trang home
    if (needLogin && !isLogin) return next("/home")

    // Trường hợp 3: Nếu user đã đăng nhập nhưng cố truy cập vào trang không yêu cầu đăng nhập
    // (Ví dụ: đã đăng nhập nhưng cố vào trang login)
    // => Chuyển hướng về trang home
    if (isLogin && !meta.needLogin) {
        return next("/home")
    }

    // Trường hợp 4: Các trường hợp còn lại
    // => Cho phép truy cập bình thường
    return next()
})

export default router
