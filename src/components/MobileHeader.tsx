import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex flex-col text-left px-6 mt-8">
      <h1 className="text-4xl font-[1000]">Yudai Hinata</h1>
      <p className="mt-2 text-lg font-bold text-navy dark:text-beige">
        Software Engineer @Sydney
      </p>
      <p className="mt-4 text-base text-navy dark:text-beige">
        Engineering value through the harmony of logic and empathy.
      </p>
      <div className="flex gap-4 mt-8 mb-16">
        <a
          href="https://github.com/udai-h"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="w-6 h-6 hover:text-gold transition-colors" />
        </a>
        <a
          href="https://linkedin.com/in/yudai-hinata"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="w-6 h-6 hover:text-gold transition-colors" />
        </a>
      </div>
    </header>
  );
}
