Vue.directive("pin",function(el,binding){
     var pinned = binding.value;
     var locations = binding.modifiers;
     var warning = binding.arg;
     if(pinned){
        el.style.position = "fixed";
        for(var key in locations){
            el.style[key] = "10px";
        }
        if(warning === "true"){
            el.style.backgroundColor = "deeppink";
        }
     }else{
         el.style.position = "static";
     }
     
     pinned = !pinned;
});

new Vue({
    el: "#app",
    data: {
        card1: {
            pinned: false,
        },
        card2: {
            pinned: false,
        }
    },
});