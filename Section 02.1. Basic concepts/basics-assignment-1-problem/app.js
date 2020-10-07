const vm = Vue.createApp({
    data(){
        return {
            name: 'Nikolay Doychev',
            age: 26,
            imageLink: 'https://hb.imgix.net/74e8d7c2ec7dde490abf64d54f9828fa073ae4e3.jpg?auto=compress,format&fit=crop&h=353&w=616&s=6b9af392df9564413a51c35a14a3c6d1.jpg'
        };
    },

    methods: {
        ageAfterFiveYears() {
            let currentAge = this.age;
            return currentAge + 5;
        },

        randomNumber(){
            const randomNumber = Math.random();
            return randomNumber;
        } 
    }
});


vm.mount('#assignment')