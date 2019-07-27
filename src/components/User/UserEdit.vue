<template>
  <div>
    <h3>Edit the User</h3>
    <p>Locale: {{ $route.query.locale }}</p>
    <p>Timezone: {{ $route.query.timezone }}</p>

    <router-link tag="button" class="btn btn-light" :to="{ name: 'userDetail' }"
      >Back to User Details</router-link
    >
    <div style="height: 700px"></div>
    <p id="someText">Some text</p>
  </div>
</template>
