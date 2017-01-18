/**
 * Created by xingbl on 2016/7/28.
 */
module.exports = {
    mode: "hash",
    routes: [
        {
            name: 'home',
            path: '/',
            component: resolve => require(['./view/Home.vue'], resolve)
        },
        {
            name: 'home',
            path: '/home',
            component: resolve => require(['./view/Home.vue'], resolve)
        },
        {
            name: 'explore',
            path: '/explore',
            component: resolve => require(['./view/Explore.vue'], resolve)
        },
        {
            name: 'digital',
            path: '/digital',
            component: resolve => require(['./view/Digital.vue'], resolve)
        },
        {
            name: 'login',
            path: '/login',
            component: resolve => require(['./view/Login.vue'], resolve)
        }
        ,
        {
            name: 'center',
            path: '/center',
            component: resolve => require(['./view/MyCenter.vue'], resolve)
        }
    ]
}

