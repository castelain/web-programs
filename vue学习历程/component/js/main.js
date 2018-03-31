Vue.component('alert',{
    template: '<button @click = "onClick">弹弹弹</button>',
    methods: {
        onClick: function(){
            alert('哟哟切克闹!');
        }
    }
});

var myComponent = {
    template: '<h2>这是一个局部组件</h2>'
};

new Vue({
    el: '#app'
});

new Vue({
    el: '#app1',
    components:{
        myspan: myComponent
    }
});