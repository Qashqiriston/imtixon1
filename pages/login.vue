<template>
  <div>
    <h1>Login</h1>
      <div>
      <h1>Users List</h1>
      <ul>
        <li v-for="user in users" :key="user.id">
          <nuxt-link :to="'/users/' + user.id">{{ user.name }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>

import { ref, onMounted, onErrorCaptured } from 'vue';
import axios from 'axios';

const users = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    users.value = response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
});

onErrorCaptured((error) => {
  console.error('Error occurred in component:', error);
});

export { users };

definePageMeta({
  layout: "custom",
});
</script>


