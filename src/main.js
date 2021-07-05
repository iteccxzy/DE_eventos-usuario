import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate';
import cargaComponent from './components/cargaComponent';
import contactoComponent from './components/contactoComponent';
import errorComponent from './components/errorComponent';
import tsComponent from './components/tsComponent';

Vue.use(require('vue-moment'));
Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(VueRouter);
const routes = [
    { path: '/', component: tsComponent },
    { path: '/inicio', component: tsComponent },
    { path: '/nueva', component: cargaComponent },
    { path: '/contacto', component: contactoComponent },
    { path: '*', component: errorComponent }
];
const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')