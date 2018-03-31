var app = new Vue({
    el: "#app",
    data: {
        chinese: 90,
        math: 90,
        english: 85,
    },
    computed: {
        sum: function(){
            return this.chinese + this.math + this.english;
        },
        average: function(){
            return Math.round(this.sum / 3);
        }
    }
});
