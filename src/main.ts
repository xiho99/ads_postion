import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Bridge from './Bridge';
import { i18n } from './lang';
import './assets/tailwind.css'
import ElementPlus from 'element-plus';

Bridge.init();

let app = createApp(App);
app.use(router)
   .use(i18n)
   .use(ElementPlus)
   .use(store)
   .mount('#app');
