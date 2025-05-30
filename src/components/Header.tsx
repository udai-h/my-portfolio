type HeaderProps = {
  activeSection: string;
  onSectionClick: (id: string) => void;
};

export default function Header({ activeSection, onSectionClick }: HeaderProps) {
  const navItems = [
    { id: "about", label: "ABOUT" },
    { id: "education", label: "EDUCATION" },
    { id: "skills", label: "SKILLS" },
    { id: "projects", label: "PROJECTS" },
  ];

  const handleClick = (id: string) => {
    onSectionClick(id);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="flex flex-col justify-center text-left px-6 py-24">
      <h1 className="text-5xl font-extrabold">Yudai Hinata</h1>
      <p className="mt-4 text-lg text-navy dark:text-beige">
        Software Engineer (Frontend & Backend) @Sydney
      </p>
      <p className="mt-2 text-lg text-navy dark:text-beige">
        Engineering value through the harmony of logic and empathy.
      </p>

      <nav className="space-y-4 pt-16">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className="flex items-center gap-3 group transition-all focus:outline-none"
          >
            <span
              className={`block h-0.5 rounded-full transition-all duration-300 ${
                activeSection === item.id
                  ? "w-20 bg-navy dark:bg-beige"
                  : "w-8 bg-gray-400 group-hover:w-20"
              }`}
            />
            <span
              className={`text-sm font-medium tracking-wide transition-colors ${
                activeSection === item.id
                  ? "text-navy dark:text-beige"
                  : "text-gray-500"
              }`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </header>
  );
}
