const app = Vue.createApp({
    data() {
        return {
            name           : "Amr kaha",
            age            : 28,
            sourceImage    : "https://picsum.photos/200/300"
        }
    },methods: {
        calculateAge()
        {
            return this.age + 5;
        },

        favoriteNumber()
        {
            return Math.random();
        }
    },
});

app.mount("#assignment")