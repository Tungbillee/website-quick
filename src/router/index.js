import { createRouter, createWebHistory } from "vue-router";
import routes from "~pages";
import { createRouterLayout } from "vue-router-layout";
import { useUserStore } from "../userStore";

const RouterLayout = createRouterLayout((layout) => {
  return import(`../layouts/${layout}.vue`);
});

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home", // Chuyển hướng từ "/" đến "/home"
    },
    {
      path: "/",
      component: RouterLayout,
      children: routes,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/home",
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: "smooth",
      };
    }
    return { x: 0, y: 0 };
  },
});
router.beforeEach((to, from, next) => {
  const userStore = useUserStore();

  const { user } = userStore;

  const meta = to.meta;

  const { needLogin, both } = meta;

  if (both) return next();

  if (needLogin && !user.isLogin) return next("/home");

  if (user.isLogin && !meta.needLogin) {
    return next("/");
  }

  return next();
});

export default router;
