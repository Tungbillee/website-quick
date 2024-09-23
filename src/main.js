import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");
setTimeout(() => {
  AOS.init({
    duration: 1500,
    offset: 300,
    once: true,
  });
}, 500);
