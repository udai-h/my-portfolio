import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const initialDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    setIsDark(initialDark);
    document.documentElement.classList.toggle("dark", initialDark);
  }, []);

  const toggleDarkMode = () => {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-3 rounded-full shadow-lg bg-[#2b4261] opacity-80 text-xl hover:scale-110 transition-transform duration-200"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? (
        <Sun className="w-6 h-6 text-beige" />
      ) : (
        <Moon className="w-6 h-6 text-beige" />
      )}
    </button>
  );
}
