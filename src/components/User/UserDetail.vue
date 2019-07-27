<template>
  <div class="col">
    <h3>Some User Details</h3>
    <p>User Id: {{ id }}</p>
    <router-link tag="button" class="btn btn-light mr-2" :to="toUser"
      >Back to users</router-link
    >
    <router-link tag="button" class="btn btn-secondary" :to="toEditUser"
      >Edit User</router-link
    >
  </div>
</template>

<script>
export default {
  props: { id: [String, Number] },

  computed: {
    toUser() {
      return {
        name: "userStart"
      };
    },

    toEditUser() {
      return {
        name: "userEdit",
        params: { id: this.id },
        query: { locale: "br", timezone: "sp" },
        hash: "#someText"
      };
    }
  },

  beforeRouteEnter(to, from, next) {
    if (true) {
      next();
    } else {
      next(false);
    }
  }
};
</script>
