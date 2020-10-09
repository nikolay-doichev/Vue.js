const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Jolie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
    <li>
          <h2>{{friend.name}}</h2>
          <button @click="toggleDetails">{{detailsAreVissible ? 'Hide' : 'Show'}} Details</button>
          <ul v-if="detailsAreVissible">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
          </ul>
    </li> 
    `,
  data() {
    return {
      detailsAreVissible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "01234 5678 991",
        email: "manuel@localhost.com",
      },
    };
  },

  methods: {
    toggleDetails() {
      this.detailsAreVissible = !this.detailsAreVissible;
    },
  },
});

app.mount("#app");
