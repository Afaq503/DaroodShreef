<template>
  <div>
    <Navbar />
    <div class="register-page">
      <div class="card">
        <div class="card-body">
          <div class="logo-container">
            <img :src="require('@/assets/DPB.png')" alt="Logo" class="logo" />
          </div>
          <h5 class="card-title mb-4 text-center">Register</h5>
          <form @submit.prevent="registerAction">
            <!-- Name Input -->
            <div class="mb-3 input-group">
              <label for="name" class="form-label">Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                name="name"
                v-model="formData.name" />
              <div v-if="validationErrors.name" class="error-message">
                <small class="text-danger">{{
                  validationErrors.name[0]
                }}</small>
              </div>
            </div>

            <!-- Email Input -->
            <div class="mb-3 input-group">
              <label for="email" class="form-label">Email address</label>
              <input
                type="email"
                class="form-control"
                id="email"
                name="email"
                v-model="formData.email" />
              <div v-if="validationErrors.email" class="error-message">
                <small class="text-danger">{{
                  validationErrors.email[0]
                }}</small>
              </div>
            </div>

            <!-- Password Input -->
            <div class="mb-3 input-group">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                name="password"
                v-model="formData.password" />
              <div v-if="validationErrors.password" class="error-message">
                <small class="text-danger">{{
                  validationErrors.password[0]
                }}</small>
              </div>
            </div>

            <!-- Confirm Password Input -->
            <div class="mb-3 input-group">
              <label for="confirm_password" class="form-label"
                >Confirm Password</label
              >
              <input
                type="password"
                class="form-control"
                id="confirm_password"
                name="confirm_password"
                v-model="formData.confirmPassword" />
            </div>

            <!-- Display general server-side error message -->
            <div v-if="validationErrors.server" class="error-message">
              <small class="text-danger">{{ validationErrors.server }}</small>
            </div>

            <!-- Register Button -->
            <div class="d-grid gap-2 text-center">
              <button
                :disabled="isSubmitting"
                type="submit"
                class="btn btn-primary btn-block">
                {{ isSubmitting ? "Registering..." : "Register Now" }}
              </button>
              <p class="text-center">
                Already have an account?
                <router-link to="/">Login here</router-link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/NavBar.vue";

export default {
  name: "RegisterPage",
  components: {
    Navbar,
  },
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationErrors: {},
      isSubmitting: false,
    };
  },
  methods: {
    registerAction() {
      // Password match validation
      if (this.formData.password !== this.formData.confirmPassword) {
        this.validationErrors.password = ["Passwords do not match"];
        return;
      }

      // Clear previous validation errors
      this.validationErrors = {};

      // Local validation
      if (
        !this.formData.name ||
        !this.formData.email ||
        !this.formData.password
      ) {
        this.validationErrors.server = "All fields are required";
        return;
      }

      // Assuming a unique key for each user based on email (you may use a different approach)
      const userKey = `user_${this.formData.email}`;

      // Check if the user already exists in localStorage
      if (localStorage.getItem(userKey)) {
        this.validationErrors.server = "User with this email already exists";
        return;
      }

      // Simulate registration by storing user data in localStorage
      const userData = JSON.stringify({
        name: this.formData.name,
        email: this.formData.email,
        password: this.formData.password,
      });

      localStorage.setItem(userKey, userData);

      // Optional: You can redirect the user to a login page or perform other actions after successful registration
      console.log("Registration successful");

      // Clear form data
      this.formData = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      };
    },
  },
};
</script>

<style scoped>
.register-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh; /* Adjusted height for better visibility */
}

.card {
  width: 80%; /* Adjusted width for better responsiveness */
  max-width: 400px; /* Set max-width for smaller screens */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
  margin-top: 20px; /* Added margin for spacing */
}

.card:hover {
  transform: scale(1.02);
}

.logo-container {
  text-align: center;
}

.logo {
  max-width: 100px;
  height: auto;
  margin-bottom: 20px;
}

.input-group {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px; /* Added margin for spacing */
}

.form-label {
  background: linear-gradient(to right, green, lightgreen, lightgrey);
  -webkit-background-clip: text;
  color: transparent;
  font-weight: 200;
  margin-bottom: 5px;
}

.text-center {
  text-align: center;
  font-family: "Pacifico", cursive;
  font-size: 20px;
  font-weight: 100;
  background: linear-gradient(to right, green, lightgreen, lightgrey);
  -webkit-background-clip: text;
  color: transparent;
  padding: 0px 5px 5px 0px;
}

.error-message {
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  color: red;
}

/* Add more styling as per your design */
</style>
