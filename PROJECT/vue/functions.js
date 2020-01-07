var app = new Vue({
    el: '#vue',
    data: {
        hashtegs: [],
        url: {
            hashtegs: 'https://dka-develop.ru/api?type=hashtag',
            cities: 'https://dka-develop.ru/api?type=city'
        }
    },
    created: function() {

    },
    methods: {
        getHashtegs() {
            axios.get(this.url.hashtegs).then((responce) => {
                console.log(responce.data);
                this.hashtegs = responce.data;
            })
        }
    },
});
// new Vue({
//     el: '#test',
//     data: {
//         users: [
//             {title: 'Пользователь', id: '1', name: 'Максим', fam: 'Ларкин', otch: 'Сергеевич', post: 'программист'},
//             {title: 'Данные', id: '2', name: 'Андрей', fam: 'Сафронов', otch: 'Юрьевич', post: 'архитектор'}
//         ]
//     }
// })