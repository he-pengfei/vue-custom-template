import Vue from 'vue';
import App from './App.vue'
import router from "./router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueI18n from 'vue-i18n';
import enLocale from 'element-ui/lib/locale/lang/en';
import "./assets/font/iconfont.css";
import store from "./store/index";

//import zhLocale from 'element-ui/lib/locale/lang/zh-CN';
import { messages } from './data/test';


Vue.use(VueI18n);

Vue.use(ElementUI, { enLocale });

Vue.config.productionTip = false

var i18n = new VueI18n({
  locale: 'en', // 语言标识
  messages
})


router.beforeEach((to, from, next) => {
  if (to.path =="/table"){
    next(false)
  }else{
    next()
  }
  
  //console.log("to====>", to)  //去往哪个页面？
  //console.log("from====>", from) //当前离开的页面路由
  //console.log("next====>", next)
})


new Vue({
  router,
  i18n,
  store,
  render: h => h(App),
  
}).$mount('#app')
