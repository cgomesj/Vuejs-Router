<template>
  <div class="col">
    <h3>Some User Details</h3>
    <p>User Id: {{ id }}</p>
  </div>
</template>

<script>
export default {
  props: { id: [String, Number] }
};
</script>
