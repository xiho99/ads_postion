import { createApp } from 'vue';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/tailwind.css'
import App from './App.vue';
import router from './router';
import store from './store/index';
import Bridge from './Bridge';
import { i18n } from './lang/index';
import fontAwesome from './font-awesome';

Bridge.init();
let app = createApp(App);
app.use(router)
   .use(i18n)
   .use(ElementPlus)
   .use(store).component('font-awesome-icon', fontAwesome)
   .mount('#app');
