import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routers from './routers'

import 'weui'

import './assets/less/index.less';

Vue.use(VueRouter)
const router = new VueRouter(routers)
new Vue({
    el: '#app',
    router: router,
    template: '<App/>',
    components: { App },
})