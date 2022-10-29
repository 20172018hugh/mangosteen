import { history } from './utils/history';
import { routes } from './config/routes';
import { createApp } from "vue";
import { App } from "./App";
import { createRouter } from 'vue-router'


const router = createRouter({
    history,
    routes,
})

const app = createApp(App)
app.use(router)
app.mount("#app");
