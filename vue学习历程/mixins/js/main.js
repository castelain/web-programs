var mixin = {
    data: function(){
        return {
            visibility: false,
        };
    },
    methods: {
            tooggle: function(){
                this.visibility = ! this.visibility;
            },
            hide: function(){
                        this.visibility = false;
                    },
            show: function(){
                        this.visibility = true;
                    }
        }
};

Vue.component('popup',{
    template: '#popup_tpl',
    mixins: [mixin],

});

Vue.component('tooltip',{
    template: '#tooltip_tpl',
    mixins: [mixin],
});

new Vue({
    el: '#app'
});