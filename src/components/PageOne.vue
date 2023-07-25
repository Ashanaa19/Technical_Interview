<template>
  <div class="page-one">
    <!-- Heading -->
    <h1 class="mulah-heading">MULAH</h1>
    <div class="greeting-container">
      <p class="greeting-text">Hello,</p>
      <p class="greeting-text">Welcome!</p>
    </div>
    <p class="loyalty-points-text">Check Your Loyalty Points & Rewards</p>

    <!-- Input for Mobile Number -->
    <div class="mobile-number-container">
      <label for="mobile-number">Mobile Number (with country code):</label>
      <input
        type="tel"
        id="mobile-number"
        v-model="mobileNumber"
        @input="onMobileNumberInput"
      />
    </div>

    <!-- Check Loyalty Points Dialog -->
    <div v-if="showDialog" class="dialog-box">
      <p class="dialog-text">Check Loyalty Points</p>
    </div>

    <!-- Powered by MulahRewards.com -->
    <p class="powered-by-text">Powered by MulahRewards.com</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileNumber: '',
      showDialog: false,
    };
  },
  methods: {
    onMobileNumberInput() {
      // Allow only numerical input and limit to "+60173527250"
      this.mobileNumber = this.mobileNumber.replace(/[^0-9+]/g, '');
      if (this.mobileNumber === '+60173527250') {
        this.showDialog = true;
        // Navigate to PageTwo when the correct number is entered
        this.$router.push('/page2');
      } else {
        this.showDialog = false;
      }
    },
  },
};
</script>

<style>
/* CSS styles (same as before) */
</style>
