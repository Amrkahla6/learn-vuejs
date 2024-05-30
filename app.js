const app = Vue.createApp({
    data() {
      return { goals: [] ,goal:""};
    },methods: {
        addGoal()
        {
            console.log(this.goals)
            this.goals.push(this.goal)
        },
        removeItem(idx)
        {
            this.goals.splice(idx,1)
        }
    },
  });
  
  app.mount('#user-goals');