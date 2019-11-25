Vue.component('tab-пользователь', {
    data: function () {
        return {
            posts: [
                {user: 'id - 425783999'},
                {user: 'имя - Андрей'},
                {user: 'фамилия - Лермонтов'},
                {user: 'отчество - Сергеевич'},
                {user: 'должность - сварщик'}
            ],
            selectedPost: null
        }
    },
    template: `
  	<div class="posts-tab">
      <div class="posts-sidebar">
        <p
        class="user"
        v-for="post in posts"
        v-bind:class="{ selected: post === selectedPost }"
        v-on:click="selectedПользователь = пользователь"
        >
            {{ post.user }}
        </p>
      </div>
    </div>
  `
})

Vue.component('tab-данные', {
    template: '<div><h2>e-mail - maxlarkin2007@gmail.com<br>телефон - 8 982 122 33 50<br>адрес - александровская 19<br>пол - мужской<br>возраст - 23</h2></div>'
})

new Vue({
    el: '#dynamic-component-demo',
    data: {
        currentTab: 'Posts',
        tabs: ['пользователь', 'данные']
    },
    computed: {
        currentTabComponent: function () {
            return 'tab-' + this.currentTab.toLowerCase()
        }
    }
})