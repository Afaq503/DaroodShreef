<template>
  <div>
    <Navbar />
    <div class="login-page">
      <div class="card">
        <div class="card-body">
          <div class="logo-container">
            <img :src="require('@/assets/DPB1.png')" alt="Logo" class="logo" />
          </div>
          <h5 class="card-title mb-4 text-center">Login</h5>
          <form @submit.prevent="loginAction">
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

            <!-- Display general server-side error message -->
            <div v-if="validationErrors.server" class="error-message">
              <small class="text-danger">{{ validationErrors.server }}</small>
            </div>

            <!-- Login Button -->
            <div class="d-grid gap-2 text-center">
              <button
                :disabled="isSubmitting"
                type="submit"
                class="btn btn-primary btn-block">
                {{ isSubmitting ? "Logging in..." : "Login Now" }}
              </button>
              <p class="text-center">
                Don't have an account?
                <router-link to="/reg">Register here</router-link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "LoginPage",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
      validationErrors: {},
      isSubmitting: false,
    };
  },
  methods: {
    loginAction() {
      // Clear previous validation errors
      this.validationErrors = {};

      // Local validation
      if (!this.formData.email || !this.formData.password) {
        this.validationErrors.server = "Email and password are required";
        return;
      }

      // Simulate login logic here (e.g., check credentials against a stored list)
      const storedUser = localStorage.getItem(`user_${this.formData.email}`);

      if (!storedUser) {
        this.validationErrors.server = "Incorrect Details";
        return;
      }

      const userData = JSON.parse(storedUser);

      if (userData.password !== this.formData.password) {
        this.validationErrors.server = "Incorrect Details";
        return;
      }

      // Optional: You can redirect the user to a dashboard or perform other actions after successful login
      console.log("Login successful");
    },
  },
};
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.card {
  width: 350px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
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
</style>
