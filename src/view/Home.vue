<template>
  <section
    class="h-screen flex flex-col justify-center items-center relative text-center overflow-hidden"
  >
    <!-- Background abstrait -->
    <div class="absolute inset-0">
      <div
        class="bg-gradient-to-r from-[#f0f4ff] to-[#e8eeff] dark:from-[#252a38] dark:to-[#1c1e26] w-full h-full"
      ></div>
      <!-- Formes abstraites -->
      <div
        class="absolute top-10 left-20 w-96 h-96 bg-gradient-to-r from-blue-300 to-indigo-300 dark:from-blue-800 dark:to-indigo-500 rounded-full blur-3xl opacity-30"
      ></div>
      <div
        class="absolute bottom-10 right-20 w-96 h-96 bg-gradient-to-r from-blue-300 to-indigo-300 dark:from-blue-800 dark:to-indigo-500 rounded-full blur-3xl opacity-30"
      ></div>
    </div>

    <!-- Contenu principal -->
    <div class="z-10 text-black dark:text-white">
      <h1 class="text-4xl md:text-6xl font-extrabold">
        HEY, JE SUIS
        <span class="text-blue-600 dark:text-blue-400">LUCAS FERNANDES</span
        ><br />
      </h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">
        Je suis développeur web freelance JS/TS<br />
        & passionné par l'entrepreneuriat.
      </p>

      <!-- Boutons -->
      <div class="mt-8 flex justify-center space-x-8">
        <router-link
          to="/projects"
          class="text-blue-600 dark:text-blue-400 text-lg flex items-center group relative"
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
          class="text-blue-600 dark:text-blue-400 text-lg flex items-center group relative"
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
export default {
  name: "Home",
};
</script>

<style scoped>
/* Styles supplémentaires pour ajuster le design */
h1 span {
  color: #2563eb; /* Couleur bleue plus foncée pour le mode clair */
}

.dark h1 span {
  color: #3b82f6; /* Couleur bleue d'origine pour le mode sombre */
}

p {
  color: #4b5563; /* Couleur grise plus foncée pour le mode clair */
}

.dark p {
  color: #a5a9b3; /* Couleur grise d'origine pour le mode sombre */
}
</style>
