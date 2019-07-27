<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>The Home Page</h1>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
          asperiores, aut autem, blanditiis consequuntur dolore excepturi
          laborum maiores minima nihil non nulla obcaecati quas quibusdam quod
          sed suscipit vero voluptatem.
        </p>
        <button class="btn btn-success" @click="navigateToUser">
          Go to User Page
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",

  methods: {
    navigateToUser() {
      this.$router.push("/user");
    }
  }
};
</script>
