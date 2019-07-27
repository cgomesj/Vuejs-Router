<template>
  <div id="app">
    <component :is="'app-nav-bar'" />

    <!-- <router-view name="header-top" /> -->
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <!-- <router-view name="header-bottom" /> -->
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
  margin-top: 80px;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.3s;
}

.fade-leave {
}

.fade-leave-active {
  transition: opacity 0.3s;
  opacity: 0;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
