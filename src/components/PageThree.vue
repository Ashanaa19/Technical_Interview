<template>
  <div class="page-three">
    <!-- Heading -->
    <h1 class="mulah-heading">MULAH</h1>

    <!-- User Details -->
    <div class="user-details-container">
      <p class="user-details">Mobile Number: {{ mobileNumber }}</p>
      <p class="user-details">Name: {{ name }}</p>
      <p class="user-details">Birthday: {{ birthday }}</p>
      <p v-if="email || noEmail" class="user-details">Email: {{ email || 'No email provided' }}</p>
    </div>

    <!-- Powered by MulahRewards.com -->
    <p class="powered-by-text">Powered by MulahRewards.com</p>
  </div>
</template>

<script>
export default {
  props: {
    mobileNumber: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    birthday: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      default: '',
    },
    noEmail: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
/* CSS styles (same as before) */
</style>
