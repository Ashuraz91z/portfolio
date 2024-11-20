<template>
  <section class="min-h-screen flex flex-col items-center relative py-20">
    <!-- Background abstrait -->
    <div class="absolute inset-0 w-full h-full">
      <div
        class="absolute top-10 left-20 w-96 h-96 bg-gradient-to-r from-blue-300 to-indigo-300 dark:from-blue-800 dark:to-indigo-500 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-10 right-20 w-96 h-96 bg-gradient-to-r from-blue-300 to-indigo-300 dark:from-blue-800 dark:to-indigo-500 rounded-full blur-3xl"
      ></div>
    </div>

    <!-- Contenu principal -->
    <div class="z-10 w-full max-w-4xl px-6 text-black dark:text-white">
      <h1 class="text-5xl font-extrabold font-raleway mb-16 text-center">
        <span class="text-blue-600 dark:text-blue-400">Lucas Fernandes</span>
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 font-quicksand">
        <!-- Carte Info Personnelle -->
        <div
          class="bg-white/90 dark:bg-gray-800/90 p-6 rounded-xl shadow-lg backdrop-blur-sm transform hover:scale-105 transition-transform duration-300"
        >
          <h2
            class="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400 border-b pb-2"
          >
            Info Personnelle
          </h2>
          <ul class="space-y-3">
            <li class="flex items-center space-x-2">
              <svg
                class="w-4 h-4 text-blue-600 dark:text-blue-400"
                viewBox="0 0 330 330"
              >
                <path
                  fill="currentColor"
                  d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
                  s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
                  c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
                />
              </svg>
              <span>19 ans</span>
            </li>
            <li class="flex items-center space-x-2">
              <svg
                class="w-4 h-4 text-blue-600 dark:text-blue-400"
                viewBox="0 0 330 330"
              >
                <path
                  fill="currentColor"
                  d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
                  s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
                  c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
                />
              </svg>
              <span>Paris, France</span>
            </li>
            <li class="flex items-center space-x-2">
              <svg
                class="w-4 h-4 text-blue-600 dark:text-blue-400"
                viewBox="0 0 330 330"
              >
                <path
                  fill="currentColor"
                  d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
                  s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
                  c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
                />
              </svg>
              <span>Étudiant à Epitech</span>
            </li>
          </ul>
        </div>

        <!-- Carte Compétences -->
        <div
          class="bg-white/90 dark:bg-gray-800/90 p-6 rounded-xl shadow-lg backdrop-blur-sm transform hover:scale-105 transition-transform duration-300"
        >
          <h2
            class="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400 border-b pb-2"
          >
            Compétences
          </h2>
          <ul class="space-y-3">
            <li class="flex items-center space-x-2">
              <svg
                class="w-4 h-4 text-blue-600 dark:text-blue-400"
                viewBox="0 0 330 330"
              >
                <path
                  fill="currentColor"
                  d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
                  s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
                  c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
                />
              </svg>
              <span>Développement Web</span>
            </li>
            <li class="flex items-center space-x-2">
              <svg
                class="w-4 h-4 text-blue-600 dark:text-blue-400"
                viewBox="0 0 330 330"
              >
                <path
                  fill="currentColor"
                  d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
                  s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
                  c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
                />
              </svg>
              <span>JavaScript / TypeScript</span>
            </li>
            <li class="flex items-center space-x-2">
              <svg
                class="w-4 h-4 text-blue-600 dark:text-blue-400"
                viewBox="0 0 330 330"
              >
                <path
                  fill="currentColor"
                  d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
                  s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
                  c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
                />
              </svg>
              <span>Vue.js / React</span>
            </li>
          </ul>
        </div>

        <!-- Carte Passions -->
        <div
          class="bg-white/90 dark:bg-gray-800/90 p-6 rounded-xl shadow-lg backdrop-blur-sm transform hover:scale-105 transition-transform duration-300"
        >
          <h2
            class="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400 border-b pb-2"
          >
            Passions
          </h2>
          <ul class="space-y-3">
            <li class="flex items-center space-x-2">
              <svg
                class="w-4 h-4 text-blue-600 dark:text-blue-400"
                viewBox="0 0 330 330"
              >
                <path
                  fill="currentColor"
                  d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
                  s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
                  c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
                />
              </svg>
              <span>Entrepreneuriat</span>
            </li>
            <li class="flex items-center space-x-2">
              <svg
                class="w-4 h-4 text-blue-600 dark:text-blue-400"
                viewBox="0 0 330 330"
              >
                <path
                  fill="currentColor"
                  d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
                  s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
                  c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
                />
              </svg>
              <span>Nouvelles Technologies</span>
            </li>
            <li class="flex items-center space-x-2">
              <svg
                class="w-4 h-4 text-blue-600 dark:text-blue-400"
                viewBox="0 0 330 330"
              >
                <path
                  fill="currentColor"
                  d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
                  s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
                  c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
                />
              </svg>
              <span>Innovation</span>
            </li>
          </ul>
        </div>

        <!-- Carte Objectifs -->
        <div
          class="bg-white/90 dark:bg-gray-800/90 p-6 rounded-xl shadow-lg backdrop-blur-sm transform hover:scale-105 transition-transform duration-300"
        >
          <h2
            class="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400 border-b pb-2"
          >
            Objectifs
          </h2>
          <ul class="space-y-3">
            <li class="flex items-center space-x-2">
              <svg
                class="w-4 h-4 text-blue-600 dark:text-blue-400"
                viewBox="0 0 330 330"
              >
                <path
                  fill="currentColor"
                  d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
                  s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
                  c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
                />
              </svg>
              <span>Freelance Web Dev</span>
            </li>
            <li class="flex items-center space-x-2">
              <svg
                class="w-4 h-4 text-blue-600 dark:text-blue-400"
                viewBox="0 0 330 330"
              >
                <path
                  fill="currentColor"
                  d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
                  s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
                  c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
                />
              </svg>
              <span>Création d'entreprise</span>
            </li>
            <li class="flex items-center space-x-2">
              <svg
                class="w-4 h-4 text-blue-600 dark:text-blue-400"
                viewBox="0 0 330 330"
              >
                <path
                  fill="currentColor"
                  d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
                  s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
                  c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
                />
              </svg>
              <span>Projets innovants</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
