import { createApp } from 'vue';

import App from './App.vue';
import FriendContact from './components/FriendContact.vue';
import NewFrined from './components/NewFriend.vue'

const app = createApp(App);

app.component('friend-contact', FriendContact);
app.component('new-friend', NewFrined);

app.mount('#app');
