<template>
  <v-app>
    <!-- Sizes your content based upon application components -->
    <v-main>
      <router-view></router-view>
      <HelloWorld></HelloWorld>
      <v-container>
        <v-btn v-on:click="counter += 1">click</v-btn>
        <p>{{ counter }}</p>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({}),
};
</script>
