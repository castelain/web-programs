var Event = new Vue();

Vue.component('jasmine',{
    template: '#jasmine_template',
    data: function(){
        return{
            i_said: '',
        };
    },
    methods: {
        on_change: function(){
            Event.$emit('jasmine_said_something',this.i_said);
        }
    }
});

Vue.component('cuppar',{
    template: '#cuppar_template',
    data: function(){
        return{
            jasmine_said: '',
        };
    },
    mounted: function(){
        var me = this;
        Event.$on('jasmine_said_something',function(data){
            me.jasmine_said = data;
        });
    }
});

new Vue({
    el: '#app'
});