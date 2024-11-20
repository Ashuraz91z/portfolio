<template>
  <section
    class="h-screen flex flex-col justify-center items-center relative text-center overflow-hidden"
  >
    <!-- Background abstrait -->
    <div ref="background" class="absolute inset-0 w-full h-full">
      <!-- Formes abstraites -->
      <div
        ref="shapeTop"
        class="absolute top-10 left-20 w-96 h-96 bg-gradient-to-r from-blue-300 to-indigo-300 dark:from-blue-800 dark:to-indigo-500 rounded-full blur-3xl"
      ></div>
      <div
        ref="shapeBottom"
        class="absolute bottom-10 right-20 w-96 h-96 bg-gradient-to-r from-blue-300 to-indigo-300 dark:from-blue-800 dark:to-indigo-500 rounded-full blur-3xl"
      ></div>
    </div>

    <!-- Contenu principal -->
    <div ref="content" class="z-10 text-black dark:text-white">
      <h1 class="text-4xl md:text-6xl font-extrabold font-raleway">
        HEY, JE SUIS
        <span class="text-blue-600 dark:text-blue-400">LUCAS FERNANDES</span>
        <br />
      </h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-400 font-quicksand">
        Je suis développeur web freelance JS/TS<br />
        & passionné par l'entrepreneuriat.
      </p>
      <div class="mt-8 flex justify-center space-x-8">
        <router-link
          to="/projects"
          class="text-blue-600 dark:text-blue-400 text-lg flex items-center group relative font-quicksand"
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
          <span>Voir mes projets</span>
          <span
            class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 origin-left transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
          ></span>
        </router-link>
        <router-link
          to="/about"
          class="text-blue-600 dark:text-blue-400 text-lg flex items-center group relative font-quicksand"
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
          <span>En savoir plus</span>
          <span
            class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 origin-left transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
          ></span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";

export default {
  name: "Home",
  data() {
    return {
      isDarkMode: false, // Contrôle le mode sombre
    };
  },
  mounted() {
    this.detectTheme();

    // Surveille les changements de mode clair/sombre
    const observer = new MutationObserver(() => {
      this.detectTheme();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"], // Surveille les changements de classe sur l'élément HTML
    });
  },
  methods: {
    detectTheme() {
      this.isDarkMode = document.documentElement.classList.contains("dark");
      this.animateModeChange();
    },
    animateModeChange() {
      // Animation de l'arrière-plan (durée réduite à 1s)
      gsap.to(this.$refs.background, {
        duration: 1,
        background: this.isDarkMode
          ? "linear-gradient(to right, #252a38, #1c1e26)"
          : "linear-gradient(to right, #f0f4ff, #e8eeff)",
      });

      // Animation des formes abstraites (durée 1.2s)
      gsap.to(this.$refs.shapeTop, {
        duration: 1.2,
        opacity: this.isDarkMode ? 0.3 : 1,
        scale: this.isDarkMode ? 1.2 : 1,
        ease: "power2.out",
      });

      gsap.to(this.$refs.shapeBottom, {
        duration: 1.2,
        opacity: this.isDarkMode ? 0.3 : 1,
        scale: this.isDarkMode ? 1.2 : 1,
        ease: "power2.out",
      });

      // Animation du texte (durée 0.8s)
      gsap.to(this.$refs.content, {
        duration: 0.8,
        color: this.isDarkMode ? "#ffffff" : "#000000",
        ease: "power2.out",
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@800&family=Quicksand:wght@400;500&display=swap");

/* Ajoutez ici le style par défaut de l'arrière-plan */
div[ref="background"] {
  background: linear-gradient(to right, #f0f4ff, #e8eeff);
  transition: background 0.3s ease;
}

.font-raleway {
  font-family: "Raleway", sans-serif;
}

.font-quicksand {
  font-family: "Quicksand", sans-serif;
}
</style>
