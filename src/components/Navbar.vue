<template>
  <nav class="fixed top-16 left-0 w-full bg-transparent z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <router-link
            to="/"
            class="text-2xl font-bold text-blue-600 dark:text-blue-400"
          >
            <img src="/logo.png" alt="Logo" class="w-10 h-10" />
          </router-link>
        </div>

        <!-- Right side navigation -->
        <div class="flex items-center space-x-4">
          <!-- Language Selector -->
          <button
            class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
          >
            EN
          </button>

          <!-- Dark/Light Mode Toggle -->
          <button
            @click="toggleTheme"
            class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <svg
              v-if="isDark"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-gray-700 dark:text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <svg
              v-else
              class="h-6 w-6 text-gray-700 dark:text-gray-300"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1-8.313-12.454z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <!-- Menu Button -->
          <button
            @click="toggleMenu"
            class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <div class="relative w-6 h-6">
              <img
                src="../assets/icons/cross.svg"
                alt="Close"
                class="absolute inset-0 h-6 w-6 transition-all duration-300"
                :class="{
                  'opacity-100 rotate-0': isMenuOpen,
                  'opacity-0 -rotate-90': !isMenuOpen,
                  invert: isDark,
                }"
              />
              <img
                v-if="isDark"
                src="../assets/icons/menu-white.svg"
                alt="Menu"
                class="absolute inset-0 h-6 w-6 transition-all duration-300"
                :class="{
                  'opacity-0 rotate-90': isMenuOpen,
                  'opacity-100 rotate-0': !isMenuOpen,
                }"
              />
              <img
                v-else
                src="../assets/icons/menu.svg"
                alt="Menu"
                class="absolute inset-0 h-6 w-6 transition-all duration-300"
                :class="{
                  'opacity-0 rotate-90': isMenuOpen,
                  'opacity-100 rotate-0': !isMenuOpen,
                }"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  </nav>

  <Menu v-model:isMenuOpen="isMenuOpen" />
</template>

<script>
import useTheme from "../composables/useTheme";
import Menu from "./Menu.vue";

export default {
  name: "Navbar",
  components: {
    Menu,
  },
  setup() {
    const { isDark, toggleTheme } = useTheme();
    return {
      isDark,
      toggleTheme,
    };
  },
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>
