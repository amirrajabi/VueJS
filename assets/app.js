/**
 * Created by Amir on 18/2/17.
 */

var card = new Vue({

    el: '#card',
    data: {
        title: 'header',
        totalLengthT: 3,
        input: '',
        buttonText: 'Add Item',
        disabled: false,
        sizeToggle: false,
        isRounded: true,
        fontColor: '#aa33ff',
        range: 50,
        showList: false,
        carsTotal: 0,
        amount: null,
        checked: false,
        choseCar: '',
        single: '',
        message: '',
        cars: ['Mercedes', 'BMW', 'Audi'],
        selectBu: [],
        bus: [
            {name: 'traasdasdasd', value: 1},
            {name: 'asdasasdad', value: 2},
            {name: 'sasdasdr43tda', value: 3}
        ],
        content: '<strong>Vue.js</strong> is a "progressive framework for building user interfaces."',
        items: [
            {
                text: 'amir',
                weight: '90'
            },
            {
                text: 'somy',
                weight: '52'
            },
            {
                text: 'azar',
                weight: '67'
            }
        ]
    },
    component: {
        'car-counter': {
            template: '#car-counter',
            props: ['name', 'initQuantity'],
            data: function () {
                return {
                    quantity: this.initQuantity
                }
            },
            methods: {
                inc: function () {
                  this.quantity += 1;
                }
            }
        }
    },
    filters: {
        capitalize: function (value) {
            if (!value) return '';
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1);
        },
        undercase: function (value) {
            if (!value) return '';
            value = value.toString();
            return value.toLowerCase();
        },
        url: function (value) {
            if (!value) return '';
            value = value.toString();
            return 'www.amirrajabi.com/' + value;
        }
    },
    methods: {
        addItem: function () {
            var input = document.getElementById('itemForm');

            if (input.value != '') {
                this.items.push({
                    text: input.value
                });
                input.value = '';
            }
            this.totalLengthT += 1;
        },
        deleteItem: function (index) {
            this.items.splice(index, 1);
            this.totalLengthT -= 1;
        },
        addCar: function () {
            this.carsTotal += this.amount;
        }
    },
    computed: {
        totalItem: function () {
            this.totalLengthT += 1;
            var sum = 0;
            var items = this.items;

            for (var i in items) {
                sum += items[i].quantity;
            }

            return sum;
        },
        totalLength: function () {
            return this.items.length;
        },
        styles: function () {
            return {
                color: this.fontColor,
                'margin-left': this.range + '%'
            }
        }
    },
    watch: {
        input: _.debounce(function () {
            this.buttonText = this.input !== '' ? 'Add ' + this.input : 'Add Item';
        }, 250)
    }
});
