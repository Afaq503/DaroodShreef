<template>
  <div>
    <Navbar />

    <!-- Important News Section -->
    <div class="news-container">
      <h3 class="news-title">Important News</h3>
      <marquee class="news-marquee">Hey, I am fine. Are you okay?</marquee>
    </div>

    <!-- Carousel for Images -->
    <div class="carousel-container">
      <v-carousel
        class="mb-10"
        cycle
        height="400"
        hide-delimiter-background
        show-arrows="hover">
        <v-carousel-item
          :src="require('@/assets/m1.jpg')"
          alt="m1"
          cover></v-carousel-item>
        <v-carousel-item
          :src="require('@/assets/m2.jpg')"
          alt="m2"
          cover></v-carousel-item>
        <v-carousel-item
          :src="require('@/assets/m3.jpg')"
          alt="m3"
          cover></v-carousel-item>
      </v-carousel>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content-container {
  flex: 1;
  margin: 0 auto;
  max-width: 80%; /* Adjust the max-width as needed */
  padding: 0 1rem;
}

.carousel-container {
  max-width: 100%;
}

.news-container {
  text-align: center;
  padding: 1rem;
}

.news-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.news-marquee {
  font-size: 1rem;
  overflow: hidden;
}

/* Media queries for responsive design */
@media (max-width: 768px) {
  .content-container {
    max-width: 100%;
  }

  .news-title {
    font-size: 1.2rem;
  }

  .news-marquee {
    font-size: 0.8rem;
  }
}
</style>
<!-- <style scoped>
.carousel-container {
  margin: 0 auto;
  max-width: 80%; /* Adjust the max-width as needed */
  padding: 0 1rem;
}

.v-carousel {
  max-width: 100%;
}

.news-container {
  text-align: center;
  padding: 1rem;
}

.news-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.news-marquee {
  font-size: 1rem;
  overflow: hidden;
}

/* Media queries for responsive design */
@media (max-width: 768px) {
  .carousel-container {
    max-width: 100%;
  }

  .news-title {
    font-size: 1.2rem;
  }

  .news-marquee {
    font-size: 0.8rem;
  }
}
</style> -->
