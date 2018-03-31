Vue.component('like',{
    template: '#like_template',
    data: function(){
        return {
            like_count: 10,
            liked: false
        };
    },
    methods: {
        onClick: function(){
            if(!this.liked){
                this.like_count ++;
            }else{
                this.like_count --;
            }
            this.liked = !this.liked;
        }
    }
});

new Vue({
    el: '#app'
});