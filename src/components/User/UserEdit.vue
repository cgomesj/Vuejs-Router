<template>
  <div>
    <h3>Edit the User</h3>
    <p>Locale: {{ $route.query.locale }}</p>
    <p>Timezone: {{ $route.query.timezone }}</p>

    <router-link
      tag="button"
      class="btn btn-light mr-2"
      :to="{ name: 'userDetail' }"
      >Back to User Details</router-link
    >

    <button
      class="btn btn-primary"
      @click="
        (confirmed = true), (alertConfirm = false), (alertConfirmed = true)
      "
    >
      Confirm
    </button>

    <component :is="'app-confirm-alert'">
      <div v-if="alertConfirm" class="alert alert-danger my-3 w-50 mx-auto">
        In order to continue, you need to confirm.
      </div>

      <div v-if="alertConfirmed" class="alert alert-success my-3 w-50 mx-auto">
        You have confirmed successfully.
      </div>
    </component>

    <div style="height: 700px"></div>
    <p id="someText">Some text</p>
  </div>
</template>

<script>
import ConfirmAlert from "@/components/Basic/ConfirmAlert.vue";

export default {
  components: {
    "app-confirm-alert": ConfirmAlert
  },

  data() {
    return {
      confirmed: false,
      alertConfirm: false,
      alertConfirmed: false
    };
  },

  beforeRouteLeave(to, from, next) {
    if (!this.confirmed) {
      //if (confirm("The danger alert will pop. Is that ok for you?")) {
      this.alertConfirm = true;
      //} else {
      //alert("In order to leave you will need to confirm, anyway");
      //}
    } else {
      next();
    }
  }
};
</script>
