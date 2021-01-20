<template>
  <div>
    <input placeholder="enter email" type="email" v-model="email" />
    <input placeholder="password" type="password" v-model="password" />
    <button @click="register">register</button>
  </div>
</template>

<script>
import AuthService from '../services/AuthService';

export default {
  data() {
    return {
      email: 'tell her',
      password: '',
    };
  },

  methods: {
    async register() {
      const response = await AuthService.register({
        email: this.email,
        password: this.password,
      });
      console.log(response.data);
    },
  },
};
</script>

<style scoped></style>
