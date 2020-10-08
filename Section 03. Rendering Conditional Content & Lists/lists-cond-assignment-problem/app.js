const vm = Vue.createApp({
    data(){
        return {
            userInput: '',
            tasks: [],
            toggleList: true,
        }
    },

    methods: {
        addTask(){
            this.tasks.push(this.userInput);
        },
        toggle(){
            this.toggleList = !this.toggleList;
        }
    }
});

vm.mount('#assignment');