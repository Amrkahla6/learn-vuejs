const app = Vue.createApp({
    data() {
      return {
        task              : "",
        listTasks         : [],
        vistabilityToggel : true,
        buttonText        : "Hide List" 
      }
    },methods: {
        addTask()
        {
            this.listTasks.push(this.task)
        },

        taskVisability()
        {
            this.vistabilityToggel = !this.vistabilityToggel;
            if(this.vistabilityToggel === true)
                {
                    return this.buttonText = 'Hide List';
                }else{
                    return this.buttonText = 'Show List';
                }
        }

    },
  });
  
  app.mount('#assignment');