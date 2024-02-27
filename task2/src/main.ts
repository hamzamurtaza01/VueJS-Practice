import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import antd from 'ant-design-vue'

createApp(App).use(router)
.use(antd)
.mount("#app");
