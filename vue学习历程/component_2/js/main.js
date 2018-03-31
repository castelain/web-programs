Vue.component('alert',{
    template: '<button @click = "onClick">点我啊</button>',
    props: ['msg'],
    methods: {
        onClick: function(){
            alert(this.msg);
        }
    }
});

new Vue({
    el: '#app'
});