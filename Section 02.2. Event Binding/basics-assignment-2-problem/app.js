const vm = Vue.createApp({
    data(){
        return {
            message: '',
            comfirmedValue: '',
        }
    },
    methods: {
        showAlert(event){
            alert('Alert is show!');
        },
        inputedValue(event){
            this.message = event.target.value;
        },
        comfirmedInput(event){
            this.comfirmedValue = event.target.value;
        }
    }
});


vm.mount('#assignment');