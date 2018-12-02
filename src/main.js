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

new Vue({
  router,
  i18n,
  store,
  render: h => h(App),
  
}).$mount('#app')
