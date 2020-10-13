<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Username</label>
      <input type="text" v-model="username" />
    </div>

    <div>
      <label>Age</label>
      <input type="text" v-model="age" />
    </div>

    <div>
      <button>Add User</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-user"],
  data() {
    return {
      username: "",
      age: "",
    };
  },

  methods: {
    submitData() {
      this.$emit("add-user", this.username, this.age);
    },
  },
};
</script>
