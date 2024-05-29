const app = Vue.createApp({
    data() {
        return {
            userInput    : "",
            confirmInput : ""
        }
    },methods: {
        showAlert(){
            alert("any text of your choice")
        },
        saveOutput(event){
            this.userInput = event.target.value;
        },
        confirmOutput(event){
            this.confirmInput = event.target.value;
        },
    },
})

app.mount("#assignment")