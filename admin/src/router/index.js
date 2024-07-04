import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
import CategoryEdit from "../views/CategoryEdit.vue";
import CategoryList from "../views/CategoryList.vue";
import timeRecord from "../views/timeRecord.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
    children: [
      { path: "categories/create", component: CategoryEdit },
      { path: "categories/list", component: CategoryList },
      { path: "involution/timeRecord", component: timeRecord },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
