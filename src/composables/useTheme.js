import { ref } from "vue";

export default function useTheme() {
  const isDark = ref(false);

  const toggleTheme = () => {
    isDark.value = !isDark.value;
    const root = document.documentElement;
    if (isDark.value) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    isDark.value = true;
    document.documentElement.classList.add("dark");
  }

  return { isDark, toggleTheme };
}
