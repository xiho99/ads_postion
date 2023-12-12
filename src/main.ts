import { createApp } from 'vue';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/tailwind.css'
import App from './App.vue';
import router from './router';
import store from './store/index';
import Bridge from './Bridge';
import { i18n } from './lang';
import fontAwesome from './font-awesome';
import { createHead } from '@unhead/vue';

Bridge.init();
let app = createApp(App);
const head = createHead()
app.use(router)
   .use(i18n)
   .use(ElementPlus)
   .use(head)
   .use(store).component('font-awesome-icon', fontAwesome)
   .mount('#app');
