var routes = [
    {
        path: '/',
        component: {
            template: '<div><h1>首页</h1></div>',
        }
    },
    {
        name: 'user',
        path: '/user',
        components: {
            siderbar: {
                template: '#tpl_sider_user',
            },
            content: {
                template: '#tpl_content_user',
            }
        }
    },
    {
        name: 'post',
        path: '/post',
        components: {
            siderbar: {
                template: '#tpl_sider_post',
            },
            content: {
                template: '#tpl_content_post',
            }
        }
    }
];

var router = new VueRouter({
    routes: routes,
});

new Vue({
    el: '#app',
    router: router,
});