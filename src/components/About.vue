<template>
  <div>
    <Navbar />

    <div class="about-container">
      <h2 class="section-title">About Us</h2>

      <div class="about-content">
        <p>
          Welcome to our Islamic community dedicated to the teachings of Islam
          and the recitation of Darood Sharif.
        </p>

        <p>
          Our mission is to spread the message of peace, love, and unity as
          taught by the Holy Quran and the Prophet Muhammad (peace be upon him).
          We believe in the power of Darood Sharif, a form of supplication and
          invocation, to seek blessings and mercy for ourselves and the entire
          Ummah.
        </p>

        <p>
          Whether you are here to learn more about Islam, find solace in Darood
          Sharif, or connect with like-minded individuals, you are part of our
          community. Feel free to explore our resources and join us in our
          journey towards spiritual growth and enlightenment.
        </p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "AboutPage",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
.about-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.section-title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
}

.about-content {
  font-size: 1.2rem;
  line-height: 1.6;
}
</style>
