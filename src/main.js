import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'lib-flexible/flexible.js';

// 导入公共样式
import './assets/style/index.scss';

const app = createApp(App);

app.use(router);
app.use(ElementPlus);
app.mount('#app');
