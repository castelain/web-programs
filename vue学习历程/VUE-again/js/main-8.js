Vue.component("alert",{
    template: "<button @click='onClick'>点我</button>",
    methods: {
        onClick: function(){
            alert("点我干啥子");
        },
    },
});

new Vue({
    el: "#seg1",
});

new Vue({
    el: "#seg2",
    components: {
        alert_local: {
            template: "<button @click='onClick'>点我</button>",
            methods: {
                onClick: function(){
                    alert("你老是点我干啥子");
                },
            },
        }
    },
});