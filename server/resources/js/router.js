import Vue from "vue";
import VueRouter from "vue-router";
import PhotoList from "./pages/PhotoList.vue";
import Login from "./pages/Login.vue";

// これによって<RouterView />コンポーネントなどを使うことができる
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: PhotoList
    },
    {
        path: "/login",
        component: Login
    }
];

// VueRouterインスタンスを作成する
const router = new VueRouter({
    mode: "history",
    routes
});

// VueRouterインスタンスをエクスポートする
// app.jsでインポートするため
export default router;
