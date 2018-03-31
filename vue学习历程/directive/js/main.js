Vue.directive('pin',function(el,binding){
    var pinned = binding.value;
    var pos = binding.modifiers;
    var arg = binding.arg;
    if(pinned){
        el.style.position = 'fixed';

        for(var key in pos){
            if(pos[key]){
                el.style[key] = '10px';
            }
        }
        if(arg === 'true'){
            el.style.background = 'red';
        }
    }else{
        el.style.position = 'static';
    }
});

new Vue({
    el: '#app',
    data: {
        card1: {
            pinned: false,
        },
        card2: {
            pinned: false,
        }
    }
});