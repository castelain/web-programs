Vue.component('balance',{
    template:  '#balance_template',
    data: function(){
        return {
            show_balance: false,
        };
    }
});
Vue.component('show',{
    template: '<button @click = onClick>点击显示余额</button>',
    methods: {
        onClick: function(){
            this.$emit('show_balance',{a: 1,b: 2});
        }
    }
});

new Vue({
    el: '#app'
});