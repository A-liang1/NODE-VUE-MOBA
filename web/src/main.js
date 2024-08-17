import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

//引入字体图标
import "./assets/iconfont/font_51zr39cqs8x/iconfont.css";
import "./assets/iconfont/font_51zr39cqs8x/iconfont.js";
import "./assets/scss/style.scss";
import router from "./router";
//vue swiper
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.min.css";
Vue.use(VueAwesomeSwiper);

//全局组件
import Card from "./components/Card.vue";
Vue.component("m-card", Card);
import ListCard from "./components/ListCard.vue";
Vue.component("m-list-card", ListCard);

import axios from "axios";
Vue.prototype.$http = axios.create({
  baseURL: "http://localhost:3000/web/api",
});
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
