import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import DarkModeToggle from "./components/DarkModeToggle";
import "./index.css";

export default function App() {
  const [activeSection, setActiveSection] = useState("about");
  const mainRef = useRef<HTMLDivElement | null>(null);
  const ignoreObserver = useRef(false);
  const ignoreTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const container = mainRef.current;
    if (!container) return;

    const sections = container.querySelectorAll<HTMLElement>("section[id]");
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (ignoreObserver.current) return;
        const visible = entries.find(
          (e) => e.isIntersecting && e.intersectionRatio >= 0.5
        );
        if (visible) setActiveSection(visible.target.id);
      },
      {
        root: null,
        threshold: 0.95,
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const handleSectionClick = (id: string) => {
    ignoreObserver.current = true;
    if (ignoreTimer.current) clearTimeout(ignoreTimer.current);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    ignoreTimer.current = setTimeout(() => {
      ignoreObserver.current = false;
    }, 700);
  };

  return (
    <div className="flex flex-col xl:flex-row min-h-screen bg-beige text-navy dark:bg-navy dark:text-beige">
      <div className="block xl:hidden p-6">
        <MobileHeader />
      </div>
      <aside className="hidden xl:block xl:w-2/5 p-10 pt-0 pl-36 h-screen sticky top-0">
        <Header
          activeSection={activeSection}
          onSectionClick={handleSectionClick}
        />
      </aside>
      <main
        ref={mainRef}
        className="w-full xl:w-3/5 overflow-y-auto px-6 scroll-smooth"
      >
        <About />
        <Education />
        <Skills />
        <Projects />
        <div className="hidden xl:block fixed bottom-10 right-10 z-50">
          <DarkModeToggle />
        </div>
      </main>
    </div>
  );
}
