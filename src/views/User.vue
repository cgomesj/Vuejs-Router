<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>The User Page</h1>
        <button class="btn btn-success" @click="navigateToHome">
          Go To Home Page
        </button>

        <hr />
        <router-view class="my-3"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",

  methods: {
    navigateToHome() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>
