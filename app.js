const app = Vue.createApp({
    data() {
        return {
            courseGoalA :  "Finish the course and learn vue",
            courseGoalB : "Master Vue and build amazing app",
            vueLink     : "https://vuejs.org/guide/quick-start.html"
        }
    },methods: {
        outputGoal()
        {
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return this.courseGoalA;
            }else{
                return this.courseGoalB;
            }
        }
    },
});

app.mount("#user-goal")

