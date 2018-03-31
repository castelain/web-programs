var app = new Vue({
    el: '#app',
    data: {
        math: 100,
        pysical: 60,
        chinese: 88
    },
    computed: {
        sum: function(){
            return this.math + this.pysical + this.chinese;
        },
        average: function(){
            return Math.round(this.sum / 3);
        }
    }
});