import { useState } from "react";
import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";
import About from "./components/About";
import "./index.css";
import Education from "./components/Education";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-beige text-navy dark:bg-navy dark:text-beige">
      <div className="block lg:hidden p-6">
        <MobileHeader />
      </div>
      <aside className="hidden lg:block lg:w-2/5 p-10 pl-36 h-screen sticky top-0">
        <Header />
      </aside>
      <main className="w-full lg:w-3/5 overflow-y-auto px-6 md:pl-10 md:pr-36 py-10">
        <About />
        <Education />
        <Skills />
      </main>
    </div>
  );
}
