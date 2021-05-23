<template>
<side-bar />
</template>

<script>
import sideBar from '../components/Sidebar.vue';

export default {
  name: 'home',
  components: {
    sideBar,
  },
};
</script>

<style >
body{
    height: 100vh !important;
}
</style>
