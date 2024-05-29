const app = Vue.createApp({
    data() {
        return {
            counter:0,
            name   : "Amr kahla"
        }
    },methods: {
        submitForm(){
            alert("aaaaaa")
        },
        setName(event){
            this.name = event.target.value;
        },
        add(number)
        {
            this.counter = this.counter + number
        },
        reduce(number)
        {
            if(this.counter > 0)
                {
                    this.counter = this.counter - number
                }
        }
    },
})

app.mount("#events")