import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import VueSmoothScroll from 'vue3-smooth-scroll'
import { createMetaManager } from 'vue-meta'

const app = createApp(App);
app.use(router);
app.use(Antd);
app.use(VueSmoothScroll);
app.use(createMetaManager());
app.mount('#app');
