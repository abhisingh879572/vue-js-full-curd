import { createApp } from "vue";
import App from "./App.vue";
import "vue-toastification/dist/index.css";
import './assets/style.css';
import router from "./router";
createApp(App).use(router).mount("#app");
