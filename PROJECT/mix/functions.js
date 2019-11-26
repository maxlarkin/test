var app = new Vue ({
    el: '#app',
    data: {
        message: 'привет Vue'
    }
})
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'дата: ' + new Date().toLocaleString()
    }
})
var app3 = new Vue({
    el: '#app-3',
    data:{
        seen: true
    }
})
var app4 = new Vue({
    el: '#app-4',
    data: {
        users: [
            { text: 'Изучить JavaScript' },
            { text: 'Изучить Vue' },
            { text: 'Создать что-нибудь классное' }
        ]
    }
})
var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Vue'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})









// new Vue({
//     el: '.container',
//     data: {
//         users: [
//             {name: 'пользователь'}
//         ],
//         dates: [
//             {name: 'данные'}
//         ]
//     }
// })
// $(document).ready(function () {
//
//     $(document).on('click', '.tabs a', function (e) {
//         e.preventDefault();
//         let link = $(this);
//
//         let href = link.attr('href');
//         // alert(href);
//         // console.log("link: ", link);
//         $('.tab-content > *, .tabs ul li').removeClass('active');
//         $(href).addClass('active');
//         link.parent().addClass('active')
//     })
// })
