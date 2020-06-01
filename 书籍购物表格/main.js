const app = new Vue({
    el: '#app',
    data: {
        books: [{
            id: 1,
            name: '《描述javascript》',
            data: '2009-09-06',
            price: 56.00,
            count: 1
        }, {
            id: 2,
            name: '《描述javascript》',
            data: '2009-09-06',
            price: 56.00,
            count: 1
        }, {
            id: 3,
            name: '《描述javascript》',
            data: '2009-09-06',
            price: 56.00,
            count: 1
        }, {
            id: 4,
            name: '《描述javascript》',
            data: '2009-09-06',
            price: 56.00,
            count: 1
        }, {
            id: 5,
            name: '《描述javascript》',
            data: '2009-09-06',
            price: 56.00,
            count: 1
        }, ]
    },
    methods: {
        inclick(index) {
            this.books[index].count++
        },
        declick(index) {
            this.books[index].count--
        },
        remove(index) {
            this.books.splice(index, 1)
        }

    },
    //过滤器
    filters: {
        showprice(price) {
            return "￥" + price.toFixed(2)
        }
    },
    computed: {
        zonjia() {
            let resule = 0;
            for (let i = 0; i < this.books.length; i++) {
                resule += this.books[i].price * this.books[i].count
            }
            return resule
        }
    }
})