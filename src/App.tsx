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

  useEffect(() => {
    const sections =
      mainRef.current?.querySelectorAll<HTMLElement>("section[id]");
    if (!sections || sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries.filter((e) => e.isIntersecting);
        if (inView.length === 0) return;
        const topMost = inView.reduce((prev, curr) =>
          prev.boundingClientRect.top < curr.boundingClientRect.top
            ? prev
            : curr
        );
        setActiveSection(topMost.target.id);
      },
      {
        root: mainRef.current,
        threshold: 0.1,
        rootMargin: "0px 0px 0px 0px",
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-beige text-navy dark:bg-navy dark:text-beige">
      <div className="block lg:hidden p-6">
        <MobileHeader />
      </div>
      <aside className="hidden lg:block lg:w-2/5 p-10 pt-0 pl-36 h-screen sticky top-0">
        <Header
          activeSection={activeSection}
          onSectionClick={(id: string) => setActiveSection(id)}
        />
      </aside>
      <main
        ref={mainRef}
        className="w-full lg:w-3/5 overflow-y-auto px-6 md:pl-10 md:pr-36 scroll-smooth"
      >
        <About />
        <Education />
        <Skills />
        <Projects />
        <div className="hidden lg:block fixed bottom-10 right-10 z-50">
          <DarkModeToggle />
        </div>
      </main>
    </div>
  );
}
