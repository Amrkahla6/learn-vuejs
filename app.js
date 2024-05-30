const app = Vue.createApp({
    data() {
        return {
            userInput : "",
            visiable  : true,
            color     : ""
        }
    },methods: {
        toggelPara()
        {
            this.visiable = !this.visiable;
        }
    },computed:{
        paraClass()
        {
            return {
                user1       : this.userInput === 'user1',
                user2       : this.userInput === 'user2',
                visiable    : this.visiable,
                hidden      : !this.visiable
            }
        }
    }
})

app.mount("#assignment")