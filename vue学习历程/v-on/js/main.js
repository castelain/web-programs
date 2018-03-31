var app = new Vue({
    el: '#app',
    methods: {
        onClick: function(){
            console.log('clicked');
        },
        onEnter: function(){
            console.log('entered');
        },
        onOut: function(){
            console.log('outed');
        },
        onSubmit: function(){
//            e.preventDefault();
            console.log('submitted');
        },
        enter: function(){
            console.log('enter');
        }
    }
});