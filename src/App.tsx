import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import "./index.css";
import Education from "./components/Education";

export default function App() {
  return (
    <main className="bg-beige text-navy dark:bg-navy dark:text-beige min-h-screen">
      <Header />
      <About />
      <Education />
    </main>
  );
}
