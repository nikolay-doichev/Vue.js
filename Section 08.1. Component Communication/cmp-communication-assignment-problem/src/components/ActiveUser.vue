<template>
  <section>
    <h2><strong>Username: </strong> {{ username }}</h2>
    <h3><strong>Age: </strong> {{ age }}</h3>
  </section>
</template>

<script>
export default {
  emits: ["emit"],

  props: {
    username: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
