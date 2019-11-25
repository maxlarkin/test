new Vue({
    el: '.container',
    data: {
        users: [
            {name: 'пользователь'}
        ],
        dates: [
            {name: 'данные'}
        ]
    }
})
$(document).ready(function () {

    $(document).on('click', '.tabs a', function (e) {
        e.preventDefault();
        let link = $(this);

        let href = link.attr('href');
        // alert(href);
        // console.log("link: ", link);
        $('.tab-content > *, .tabs ul li').removeClass('active');
        $(href).addClass('active');
        link.parent().addClass('active')
    })
})
