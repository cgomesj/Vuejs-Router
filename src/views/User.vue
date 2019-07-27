<template>
  <div>
    <h1>The User Page</h1>
    <p>Loaded Id: {{ id }}</p>
    <button class="btn btn-primary" @click="navigateToHome">Go To Home</button>
  </div>
</template>

<script>
export default {
  name: "User",

  props: {
    id: String
  },

  methods: {
    navigateToHome() {
      this.$router.push("/");
    }
  }
};
</script>
