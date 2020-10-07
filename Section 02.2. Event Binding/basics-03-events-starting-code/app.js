const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: ''
    };
  },

  methods: {
    confirmedInput(){
      this.confirmedName = this.name
    },
    submitForm(event){
      alert('Submited!');
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num){
      this.counter = this.counter - num;
    },
    setName(event, title){
      this.name = title + ' ' + event.target.value;
    }
  }
});

app.mount('#events');
