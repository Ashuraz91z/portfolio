<template>
  <div
    class="fixed inset-0 z-40 flex items-center bg-white dark:bg-gray-900 transition-all duration-700"
    :class="{
      'opacity-100 translate-y-0': isMenuOpen,
      'opacity-0 -translate-y-full': !isMenuOpen,
    }"
  >
    <!-- Background abstrait avec animation -->
    <div class="absolute inset-0 transition-all duration-700">
      <div
        class="bg-gradient-to-r from-[#f0f4ff] to-[#e8eeff] dark:from-[#252a38] dark:to-[#1c1e26] w-full h-full"
      ></div>
      <div
        class="absolute top-10 left-20 w-96 h-96 bg-gradient-to-r from-blue-300/30 to-indigo-300/30 dark:from-blue-800/30 dark:to-indigo-500/30 rounded-full transform transition-transform duration-1000"
        :class="{ 'scale-110': isMenuOpen }"
      ></div>
      <div
        class="absolute bottom-10 right-20 w-96 h-96 bg-gradient-to-r from-blue-300/30 to-indigo-300/30 dark:from-blue-800/30 dark:to-indigo-500/30 rounded-full transform transition-transform duration-1000 delay-100"
        :class="{ 'scale-110': isMenuOpen }"
      ></div>
    </div>

    <!-- Contenu principal avec animation -->
    <div class="relative z-10 ml-32">
      <nav class="space-y-8">
        <router-link
          v-for="(item, index) in menuItems"
          :key="index"
          :to="item.path"
          class="block text-5xl font-extrabold tracking-widest text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:tracking-normal transition-all duration-300 transform"
          :style="{
            transitionDelay: `${index * 100}ms`,
            opacity: isMenuOpen ? '1' : '0',
            transform: isMenuOpen ? 'translateX(0)' : 'translateX(-50px)',
          }"
          @click="closeMenu"
        >
          {{ item.name }}
        </router-link>
      </nav>
      <!-- Liens externes avec animation -->
      <div
        class="mt-12 flex items-center space-x-8 text-lg text-gray-600 dark:text-gray-400"
      >
        <a
          href="https://www.linkedin.com/in/lucas-fernandes-4836b52a5/"
          class="text-blue-600 dark:text-blue-400 text-lg flex items-center group relative"
          :style="{
            transitionDelay: '400ms',
            opacity: isMenuOpen ? '1' : '0',
            transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
          }"
          target="_blank"
        >
          <svg
            class="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2"
            viewBox="0 0 330 330"
          >
            <path
              fill="currentColor"
              d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
              s7.678-1.465,10.606-4.394l75-75c-5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
              c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
            />
          </svg>
          <span>Linkedin</span>
          <span
            class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 origin-left transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
          ></span>
        </a>
        <a
          href="https://github.com/Ashuraz91z"
          class="text-blue-600 dark:text-blue-400 text-lg flex items-center group relative"
          :style="{
            transitionDelay: '500ms',
            opacity: isMenuOpen ? '1' : '0',
            transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
          }"
          target="_blank"
        >
          <svg
            class="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2"
            viewBox="0 0 330 330"
          >
            <path
              fill="currentColor"
              d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
              s7.678-1.465,10.606-4.394l75-75c-5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
              c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
            />
          </svg>
          <span>Github</span>
          <span
            class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 origin-left transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
          ></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {
    isMenuOpen: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      menuItems: [
        { name: "Accueil", path: "/" },
        { name: "Projets", path: "/projects" },
        { name: "À propos", path: "/about" },
        { name: "Contact", path: "/contact" },
      ],
    };
  },
  methods: {
    closeMenu() {
      this.$emit("update:isMenuOpen", false);
    },
  },
  watch: {
    isMenuOpen(newVal) {
      if (newVal) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    },
  },
  beforeUnmount() {
    document.body.style.overflow = "auto";
  },
};
</script>

<style scoped>
/* Styles additionnels */
nav {
  font-family: "LeagueSpartan", sans-serif;
}
</style>
