<template>
  <div>
    <nav class="navbar">
      <div class="navbar-logo">
        <img class="logo-img" :src="require('@/assets/DPB1.png')" alt="Logo" />
        <span class="stylish-title">Darul Salat</span>
      </div>
      <div class="navbar-toggle" @click="toggleNav">&#9776;</div>
      <div class="navbar-links" :class="{ 'show-nav': showNav }">
        <router-link to="/" class="nav-link" @click="closeNav"
          >Home</router-link
        >
        <router-link to="/about" class="nav-link" @click="closeNav"
          >About</router-link
        >
        <router-link to="/contact" class="nav-link" @click="closeNav"
          >Contact</router-link
        >
        <router-link to="/log" class="nav-link" @click="closeNav"
          >Login</router-link
        >
        <router-link to="/reg" class="nav-link" @click="closeNav"
          >Register</router-link
        >
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNav: false,
    };
  },
  methods: {
    toggleNav() {
      this.showNav = !this.showNav;
    },
    closeNav() {
      this.showNav = false;
    },
  },
};
</script>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #3490dc;
  color: #fff;
  transition: background-color 0.3s ease;
}
.logo-img {
  max-width: 60px; /* Adjust the max-width as needed */
  width: 100%;
  height: auto;
}

.navbar-logo {
  display: flex;
  align-items: center;
}
.stylish-title {
  font-family: "Pacifico", cursive;
  font-size: 40px;
  font-weight: 700;
  background: linear-gradient(to right, green, lightgreen, lightgrey);
  -webkit-background-clip: text;
  color: transparent;
  display: inline-block;
  padding: 0px 5px 5px 0px; /* Adjust the padding to control the gradient width */
  margin-left: 10px;
}

.navbar-toggle {
  display: none;
  font-size: 1.5rem;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  margin-left: auto;
  transition: color 0.3s ease;
}

.navbar-links {
  display: flex;
}

.nav-link {
  margin: 0 1rem;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .navbar-toggle {
    display: block;
  }

  .navbar-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #3490dc;
    z-index: 1;
  }

  .navbar-links.show-nav {
    display: flex;
  }

  .nav-link {
    margin: 0.5rem;
    text-align: center;
  }
}
</style>
