import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
window.$ = window.jQuery = require('jquery');
// import axios
import axios from 'axios'
import VueAxios from 'vue-axios'
// import i18n
import i18n from './locales/i18n';
import ToastService from 'primevue/toastservice'
import Toast from 'primevue/toast';

const app = createApp(App);

app.use(i18n);


app.use(PrimeVue);
app.use(ToastService);
app.component('Toast',Toast);
app.use(VueAxios, axios) // 👈
app.mount('#app')
