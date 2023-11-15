<template>
  <div class="wrapper">
    <!-- Your page content here -->

    <v-footer class="footer-container">
      <v-row justify="center" align="center">
        <v-col cols="12" md="4">
          <!-- ... Menu section ... -->
          <div class="footer-section">
            <h3>Menu</h3>
            <ul>
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/about">About</router-link></li>
              <li><router-link to="/contact">Contact</router-link></li>
              <li><router-link to="/log">Login</router-link></li>
              <li><router-link to="/reg">Register</router-link></li>
            </ul>
          </div>
        </v-col>

        <v-col cols="12" md="4">
          <!-- ... Services section ... -->
          <div class="footer-section">
            <h3>Services</h3>
            <ul>
              <li>Service 1</li>
              <li>Service 2</li>
              <li>Service 3</li>
            </ul>
          </div>
        </v-col>

        <v-col cols="12" md="4">
          <!-- ... Social Media section ... -->
          <div class="footer-section">
            <h3>Social Media</h3>
            <div class="social-icons">
              <!-- Add your social media icons here -->
              <v-icon
                class="social-icon"
                size="24"
                @mouseover="hoverIcon"
                @mouseleave="resetIcon"
                >mdi-facebook</v-icon
              >
              <v-icon
                class="social-icon"
                size="24"
                @mouseover="hoverIcon"
                @mouseleave="resetIcon"
                >mdi-twitter</v-icon
              >
              <v-icon
                class="social-icon"
                size="24"
                @mouseover="hoverIcon"
                @mouseleave="resetIcon"
                >mdi-instagram</v-icon
              >
            </div>
          </div>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  methods: {
    hoverIcon(event) {
      event.target.style.color = "green";
    },
    resetIcon(event) {
      event.target.style.color = "white";
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}

.footer-container {
  background-color: #3490dc;
  color: white;
  padding: 2rem;
  width: 100%;
  margin-top: auto; /* This will push the footer to the bottom */
}

.footer-section {
  text-align: center;
}

.footer-section h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  margin-bottom: 0.5rem;
}

.social-icons {
  display: flex;
  justify-content: center;
  align-items: center;
}

.social-icon {
  margin: 0 0.5rem;
  cursor: pointer;
  transition: color 0.8s;
}

.footer-section ul li a {
  text-decoration: none;
  position: relative;
  display: inline-block;
  color: #333;
  transition: color 0.3s;
}

.footer-section ul li a:hover {
  color: black;
}

.footer-section ul li a::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: white;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out 0s;
}

.footer-section ul li a:hover::before {
  visibility: visible;
  transform: scaleX(1);
}
</style>
