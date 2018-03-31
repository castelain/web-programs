var app = new Vue({
    el: "#app",
    methods: {
        onClick: function(){
            console.log("clicked");
        },
        onMouseenter: function(){
            console.log("mouse entered");
        },
        onMouseleave: function(){
            console.log("mouse left");
        },
        onSubmit: function(e){
            e.preventDefault();
            console.log("submitted");
        },
        onEnter: function(){
            console.log("enter");
        },
    }
});