Vue.component('alert',{
    template: "#alert_component_tpl",
    props: ["msg"],
    methods: {
        onClick: function(){
            alert(this.msg);
        }
    },
});

new Vue({
    el: "#app",
});