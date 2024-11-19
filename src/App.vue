<template>
  <div id="app" class="bg-white dark:bg-gray-900 text-black dark:text-gray-100">
    <!-- Navbar globale -->
    <Navbar />

    <!-- Contenu principal -->
    <main class="min-h-screen">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
/* Styles globaux si nécessaires */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>
