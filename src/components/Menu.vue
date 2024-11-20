<template>
  <div
    class="fixed inset-0 z-40 flex items-center"
    :class="{
      'opacity-100 translate-y-0': isMenuOpen,
      'opacity-0 -translate-y-full': !isMenuOpen,
    }"
  >
    <!-- Background abstrait -->
    <div
      ref="background"
      class="absolute inset-0 w-full h-full bg-gradient-to-r from-[#f0f4ff] to-[#e8eeff] dark:from-[#252a38] dark:to-[#1c1e26]"
    ></div>

    <!-- Formes abstraites -->
    <div
      ref="shapeTop"
      class="absolute top-10 left-20 w-96 h-96 bg-gradient-to-r from-blue-300/30 to-indigo-300/30 dark:from-blue-800/30 dark:to-indigo-500/30 rounded-full"
    ></div>
    <div
      ref="shapeBottom"
      class="absolute bottom-10 right-20 w-96 h-96 bg-gradient-to-r from-blue-300/30 to-indigo-300/30 dark:from-blue-800/30 dark:to-indigo-500/30 rounded-full"
    ></div>

    <!-- Contenu principal -->
    <div class="relative z-10 ml-32">
      <nav class="space-y-8">
        <router-link
          v-for="(item, index) in menuItems"
          :key="index"
          :to="item.path"
          class="block text-4xl font-extrabold text-gray-800 dark:text-white transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400"
          :style="{
            transitionDelay: `${index * 100}ms`,
            opacity: isMenuOpen ? '1' : '0',
            transform: isMenuOpen ? 'translateX(0)' : 'translateX(-50px)',
            letterSpacing: '0.2em',
          }"
          @click="closeMenu"
          @mouseenter="(e) => (e.target.style.letterSpacing = '0')"
          @mouseleave="(e) => (e.target.style.letterSpacing = '0.2em')"
        >
          {{ item.name }}
        </router-link>
      </nav>
      <!-- Liens externes -->
      <div class="mt-12 flex items-center space-x-8">
        <a
          href="https://www.linkedin.com/in/lucas-fernandes-4836b52a5/"
          class="text-blue-600 dark:text-blue-400 text-2xl flex items-center group relative"
          target="_blank"
          @mouseenter="animateLinkEnter"
          @mouseleave="animateLinkLeave"
        >
          <svg
            class="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2"
            viewBox="0 0 330 330"
          >
            <path
              fill="currentColor"
              d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
              s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
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
          class="text-blue-600 dark:text-blue-400 text-2xl flex items-center group relative"
          target="_blank"
          @mouseenter="animateLinkEnter"
          @mouseleave="animateLinkLeave"
        >
          <svg
            class="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2"
            viewBox="0 0 330 330"
          >
            <path
              fill="currentColor"
              d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
              s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
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
import gsap from "gsap";

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
      isDarkMode: false,
    };
  },
  mounted() {
    this.detectTheme();
    const observer = new MutationObserver(() => {
      this.detectTheme();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
  },
  watch: {
    isMenuOpen(newVal) {
      if (newVal) {
        this.openMenuAnimation();
      } else {
        this.closeMenuAnimation();
      }
    },
  },
  methods: {
    detectTheme() {
      const newDarkMode = document.documentElement.classList.contains("dark");
      if (this.isDarkMode !== newDarkMode) {
        this.isDarkMode = newDarkMode;
        this.animateThemeChange();
      }
    },
    animateThemeChange() {
      gsap.to(this.$refs.background, {
        duration: 2,
        background: this.isDarkMode
          ? "linear-gradient(to right, #252a38, #1c1e26)"
          : "linear-gradient(to right, #f0f4ff, #e8eeff)",
      });

      gsap.to([this.$refs.shapeTop, this.$refs.shapeBottom], {
        duration: 2,
        opacity: this.isDarkMode ? 0.3 : 0.3,
        scale: this.isDarkMode ? 1.2 : 1.2,
        ease: "power2.out",
      });
    },
    openMenuAnimation() {
      // Animation des formes abstraites
      gsap.fromTo(
        this.$refs.shapeTop,
        {
          opacity: 0,
          scale: 0.8,
          y: -100,
        },
        {
          duration: 1,
          opacity: 0.3,
          scale: 1.2,
          y: 0,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        this.$refs.shapeBottom,
        {
          opacity: 0,
          scale: 0.8,
          y: 100,
        },
        {
          duration: 1,
          opacity: 0.3,
          scale: 1.2,
          y: 0,
          ease: "power2.out",
        }
      );

      // Animation du background avec fade in
      gsap.fromTo(
        this.$refs.background,
        {
          opacity: 0,
        },
        {
          duration: 1,
          opacity: 1,
          ease: "power2.out",
        }
      );

      // Animation des liens du menu
      const menuLinks = document.querySelectorAll("nav router-link");
      menuLinks.forEach((link, index) => {
        gsap.fromTo(
          link,
          {
            opacity: 0,
            x: -50,
          },
          {
            duration: 0.5,
            opacity: 1,
            x: 0,
            delay: index * 0.1,
            ease: "power2.out",
          }
        );
      });
    },
    closeMenuAnimation() {
      gsap.to(this.$refs.background, {
        opacity: 0,
        duration: 1.5,
        ease: "power2.in",
      });
      gsap.to(this.$refs.shapeTop, {
        opacity: 0,
        scale: 0.8,
        y: -100,
        duration: 1.5,
        ease: "power2.in",
      });
      gsap.to(this.$refs.shapeBottom, {
        opacity: 0,
        scale: 0.8,
        y: 100,
        duration: 1.5,
        ease: "power2.in",
      });
      document.querySelectorAll("nav router-link").forEach((link, index) => {
        gsap.to(link, {
          opacity: 0,
          x: -50,
          delay: index * 0.2,
          duration: 1,
          ease: "power2.in",
        });
      });
    },
    closeMenu() {
      this.$emit("update:isMenuOpen", false);
    },
    animateLinkEnter(event) {
      gsap.to(event.target.querySelector("svg"), {
        duration: 0.5,
        scale: 1.2,
        ease: "power2.out",
      });
    },
    animateLinkLeave(event) {
      gsap.to(event.target.querySelector("svg"), {
        duration: 0.5,
        scale: 1,
        ease: "power2.out",
      });
    },
  },
};
</script>

<style scoped></style>
