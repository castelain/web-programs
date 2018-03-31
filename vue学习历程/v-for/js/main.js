var app = new Vue({
    el: '#app',
    data: {
        foodList: [{
            name: '葱',
            price: 3,
            discount: 0.8
        },
        {
            name: '蒜',
            price: 5,
            discount: 0.7
        },
        {
            name: '姜',
            price: 15
        }]
    }
});