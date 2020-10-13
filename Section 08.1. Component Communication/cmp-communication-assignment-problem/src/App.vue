<template>
  <header><h1>User Data</h1></header>
  <ul>
    <active-user
      v-for="user in users"
      :key="user.id"
      :id="user.id"
      :username="user.name"
      :age="user.age"
    ></active-user>
    <user-data @add-user="addUser"></user-data>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          id: "poli",
          name: "Pavlina Yakimova",
          age: "29",
        },
        {
          id: "niki",
          name: "Nikolay Doychev",
          age: "26",
        },
      ],
    };
  },

  methods: {
    addUser(username, age) {
      const newUser = {
        id: new Date().toISOString(),
        name: username,
        age: age,
      };
      this.users.push(newUser);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: "Jost", sans-serif;
}
body {
  margin: 0;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app section {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  text-align: center;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
  margin: 1rem auto;
}
#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app h2 {
  font-size: 2rem;

  color: #58004d;
  margin: 1rem auto;

  text-align: center;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
}
#app h3 {
  text-align: center;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
  margin: 1rem auto;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>
