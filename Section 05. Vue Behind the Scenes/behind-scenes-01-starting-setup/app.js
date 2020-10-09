const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');


let message = 'Hello!';

let longMessage  = message + 'Worlds!';

console.log(longMessage);

message = 'Hello!!!!!!!!!'

console.log(longMessage);
