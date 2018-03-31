var routes = [
    {
        path: '/',
        component: {
            template: '<div><h1>首页</h1></div>',
        }
    },
    {
        path: '/about',
        component: {
            template: '<div><h1>关于我们</h1></div>'
        }
    },
    {
        path: '/user/:name',
        name: 'user',
        component: {
            template: '#tpl_name',
        },
        children: [{
            path: 'more',
            component: {
                template: '#tpl_children',
            }
        }]

    }
];

var router = new VueRouter({
    routes: routes,
});

new Vue({
    el: "#app",
    router: router,
    methods: {
        surf: function(){
            setTimeout(function(){
                this.router.push('/about');
                setTimeout(function(){
                    this.router.push({name: 'user',params:{name: 'jasmine'}});
                },2000);
            },2000);
        }
    }
});