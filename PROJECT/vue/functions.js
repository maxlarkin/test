new Vue({
    el: '#vue',
    data() {
        return {
            info: null,
            loading: true,
            errored: false
        };
    },
    filters: {
        currencydecimal(value) {
            return value.toFixed(2);
        }
    },
    mounted() {
        axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(respo)
    },
    methods: {

    }
});
