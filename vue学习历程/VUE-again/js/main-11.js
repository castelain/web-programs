Vue.component('show_balance',{
    template: "#show__balance_component_tpl",
    data: function(){
        return {
            showed: false,
        };
    },
});

Vue.component('show',{
    template: "<button @click='show'>显示余额</button>",
    methods: {
        show: function(){
            this.$emit('show_balance',{a : 1,b : 3});
        },
    },
});

new Vue({
    el: "#app",
});