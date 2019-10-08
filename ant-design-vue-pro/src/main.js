import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueI18n from "vue-i18n";
import enUS from "./locale/enUS";
import zhCN from "./locale/zhCN";
import queryString from "query-string";
import VueHighlightJS from "vue-highlightjs";
// import Antd from "ant-design-vue";
import {
  Button,
  Layout,
  Icon,
  Drawer,
  Radio,
  Menu,
  Form,
  Input,
  Select,
  LocaleProvider,
  Dropdown,
  DatePicker
} from "ant-design-vue";
import Authorized from "./components/Authorized";
import Auth from "./directives/auth";
// import "ant-design-vue/dist/antd.less";
Vue.config.productionTip = false;
// Vue.use(Antd);
Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Menu);
Vue.use(Auth);
Vue.use(Form);
Vue.use(Input);
Vue.use(Select);
Vue.use(LocaleProvider);
Vue.use(Dropdown);
Vue.use(DatePicker);
Vue.component("Authorized", Authorized);
Vue.use(VueI18n);
Vue.use(VueHighlightJS);

import "highlight.js/styles/github.css";

const i18n = new VueI18n({
  locale: queryString.parse(location.search).locale || "zhCN",
  messages: {
    zhCN: { message: zhCN },
    enUS: { message: enUS }
  }
});
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1440258_exv5adwhf4d.js" // 在 iconfont.cn 上生成
});
Vue.component("IconFont", IconFont);
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
