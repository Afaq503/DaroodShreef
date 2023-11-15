<template>
  <div>
    <Navbar />

    <div class="contact-container">
      <h2 class="section-title">Contact Us</h2>

      <div class="contact-content">
        <p>
          We would love to hear from you! Whether you have questions, feedback,
          or just want to connect, feel free to reach out to us.
        </p>

        <!-- Contact Form -->
        <form @submit.prevent="sendMessage">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="formData.name" required />
          </div>

          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="formData.email" required />
          </div>

          <div class="form-group">
            <label for="message">Message:</label>
            <textarea
              id="message"
              v-model="formData.message"
              required></textarea>
          </div>

          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>

        <div class="contact-details">
          <div class="contact-item">
            <strong>Email:</strong> info@yourwebsite.com
          </div>
          <div class="contact-item">
            <strong>Phone:</strong> +92 300 154620054
          </div>
          <div class="contact-item">
            <strong>Address:</strong> Bhatti chowk, Sheikhupura, Pakistan
          </div>
        </div>

        <!-- Real Map Embed -->
        <div class="map-container">
          <!-- Replace this with your actual map embed code or link -->
          <!-- For example, you can use Google Maps Embed API -->
          <iframe
            id="map-iframe"
            width="100%"
            height="400"
            frameborder="0"
            style="border: 0"
            allowfullscreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1dYOUR_LATITUDE!2dYOUR_LONGITUDE!3dYOUR_ZOOM!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xYOUR_LATITUDE!2xYOUR_LONGITUDE!5e0!3m2!1sen!2sus!4vYOUR_MAP_VERSION"></iframe>
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
  name: "ContactPage",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  mounted() {
    // Set the initial map location to N 31° 39' 30.276", E 74° 6' 15.1632"
    const mapIframe = document.getElementById("map-iframe");
    mapIframe.src =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0.0!2d74.104212!3d31.658410!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNzQsMDYnMTUuMSI1NzQuNiJF!5e0!3m2!1sen!2sus!4vYOUR_MAP_VERSION";
  },
  methods: {
    sendMessage() {
      // Implement your logic to send the message
      console.log("Message sent:", this.formData);
      // You can also use a backend service to handle form submissions
      // and send an email or store the message in a database.
    },
  },
};
</script>

<style scoped>
.contact-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.section-title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
}

.contact-content {
  font-size: 1.2rem;
  line-height: 1.6;
}

.form-group {
  margin-bottom: 1rem;
}

textarea {
  height: 100px;
}

.btn {
  background-color: #3490dc;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #2779bd;
}

.contact-details {
  margin-top: 1.5rem;
}

.contact-item {
  margin-bottom: 0.5rem;
}

.map-container {
  margin-top: 2rem;
}
</style>
