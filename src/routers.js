/**
 * Created by xingbl on 2016/7/28.
 */
module.exports = {
    mode: "hash",
    routes: [
        {
            path: '/',
            component: resolve => require(['./view/blog.vue'], resolve)
        },
        {
            path: '/home',
            component: resolve => require(['./view/home.vue'], resolve)
        },
        {
            path: '/blog',
            component: resolve => require(['./view/blog.vue'], resolve)
        },
        {
            path: '/it',
            component: resolve => require(['./view/it.vue'], resolve)
        },
        {
            path: '/login',
            component: resolve => require(['./view/login.vue'], resolve)
        }
        ,
        {
            path: '/my',
            component: resolve => require(['./view/my.vue'], resolve)
        }
    ]
}

