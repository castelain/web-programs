var base = {
    data: function(){
        return {
            visibility: false,
        };
    },
    methods: {
        show: function(){
            this.visibility = true;
        },
        hide: function(){
            this.visibility = false;
        },
        tooggle: function(){
            this.visibility = !this.visibility;
        }
    },
};

Vue.component("tooltip",{
    template: "#tooltip_component_tpl",
    mixins: [base],
});

Vue.component("popup",{
    template: "#popup_component_tpl",
    mixins: [base],
});

new Vue({
    el: "#app",
});