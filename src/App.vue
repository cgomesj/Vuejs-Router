<template>
  <div id="app">
    <component :is="'app-nav-bar'" />

    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/Basic/NavBar.vue";

export default {
  name: "App",

  components: {
    "app-nav-bar": NavBar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
