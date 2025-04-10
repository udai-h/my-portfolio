import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import "./index.css";

export default function App() {
  return (
    <main className="bg-beige text-navy dark:bg-navy dark:text-beige min-h-screen">
      <Header />
      <About />
    </main>
  );
}
