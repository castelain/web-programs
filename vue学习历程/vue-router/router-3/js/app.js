var routes = [
    {
        path: '/',
        component: {
            template: '<div>首页</div>'
        }
    },
    {
        path: '/login',
        component: {
            template: '#tpl_login',
        }
    },
    {
        path: '/manage',
        meta: {
            login_required: true,
        },
        component: {
            template: '#tpl_manage',
        },
        children: [
            {
                path: 'article',
                component: {
                    template: '<div>这是一篇文章的内容</div>',
                }
            }
        ],
    }
];

var router = new VueRouter({
    routes: routes,
});

router.beforeEach(function(to,from,next){
    var signin = false;
    if(!signin && to.meta.login_required){
        next('/login');
    }else{
        next();
    }
});

new Vue({
    el: '#app',
    router: router,
});