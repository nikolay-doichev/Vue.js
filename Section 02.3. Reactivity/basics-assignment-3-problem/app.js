const vm = Vue.createApp({
  data() {
    return {
      numberValue: 0,
    };
  },
  methods: {
    addFive() {
      this.numberValue += 5;
    },
    addOne() {
      this.numberValue++;
    },
  },
  computed: {
    showStatus() {
      if (this.numberValue < 37) {
        return "Not there yet";
      } else {
        return "Too much!";
      }
    },
  },
  watch: {
    numberValue(value) {
      const that = this;
      setTimeout(function () {
        that.numberValue = 0;
      }, 5000)
      
    },
  },
});

vm.mount("#assignment");
