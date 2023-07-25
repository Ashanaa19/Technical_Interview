<template>
  <div class="page-two">
    <!-- Heading -->
    <h1 class="mulah-heading">MULAH</h1>
    <div class="registration-heading">
      <p class="registration-text">Registration</p>
    </div>
    <p class="details-text">Please fill up your details</p>

    <!-- Name Input -->
    <div class="form-group">
      <label for="name" class="label">Name</label>
      <input
        type="text"
        id="name"
        v-model="name"
        @input="onNameInput"
      />
      <p v-if="!name" class="warning">*Please insert a name.</p>
    </div>

    <!-- Birthday Input -->
    <div class="form-group">
      <label for="birthday" class="label">Birthday</label>
      <input
        type="text"
        id="birthday"
        v-model="birthday"
        @input="onBirthdayInput"
      />
      <p v-if="!birthday" class="warning">*Please insert your birthday.</p>
    </div>

    <!-- Email Input -->
    <div class="form-group">
      <label for="email" class="label">Email</label>
      <input
        type="text"
        id="email"
        v-model="email"
        @input="onEmailInput"
      />
      <p v-if="!email && !noEmail" class="warning">*Please insert a valid email address.</p>
    </div>

    <!-- No Email Checkbox -->
    <div class="checkbox-container">
      <input
        type="checkbox"
        id="no-email-checkbox"
        v-model="noEmail"
      />
      <label for="no-email-checkbox">No email address</label>
    </div>

    <!-- Continue Button -->
    <button class="continue-button" @click="onContinueClick">Continue</button>

    <!-- Powered by MulahRewards.com -->
    <p class="powered-by-text">Powered by MulahRewards.com</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      birthday: '',
      email: '',
      noEmail: false,
    };
  },
  methods: {
    onNameInput() {
      // Remove the warning message when the user starts typing
      if (this.name) {
        this.$refs.nameWarning.style.display = 'none';
      }
    },
    onBirthdayInput() {
      // Remove the warning message when the user starts typing
      if (this.birthday) {
        this.$refs.birthdayWarning.style.display = 'none';
      }
    },
    onEmailInput() {
      // Remove the warning message when the user starts typing
      if (this.email || this.noEmail) {
        this.$refs.emailWarning.style.display = 'none';
      }
    },
    onContinueClick() {
      // Validate the inputs and navigate to PageThree if all inputs are filled
      if (!this.name) {
        this.$refs.nameWarning.style.display = 'block';
      }
      if (!this.birthday) {
        this.$refs.birthdayWarning.style.display = 'block';
      }
      if (!this.email && !this.noEmail) {
        this.$refs.emailWarning.style.display = 'block';
      }

      if (this.name && this.birthday && (this.email || this.noEmail)) {
        // Navigate to PageThree
        this.$router.push({
          path: '/page3',
          query: {
            name: this.name,
            birthday: this.birthday,
            email: this.email,
            noEmail: this.noEmail,
          },
        });
      }
    },
  },
};
</script>

<style>
/* CSS styles (similar to PageOne with minor changes) */
</style>
