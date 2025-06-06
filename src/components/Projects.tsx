import pomodoro from "../assets/pomodoro.jpg";
import portfolio from "../assets/portfolio.png";

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-3xl mx-auto px-6 pt-16 pb-16 text-left xl:text-lg text-base"
    >
      <h2 className="xl:text-2xl text-xl font-bold mb-4">Projects</h2>

      <div className="flex flex-col sm:flex-row items-center gap-8">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-8 p-4 w-full border shadow border-[#486ea0] border-opacity-40 rounded-lg  transition-transform duration-300 overflow-hidden text-inherit group relative">
          <div className="absolute inset-0 bg-[#486ea0]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>

          <h3 className="text-lg font-semibold text-left block sm:hidden z-20">
            Chrome Extension: Pomodoro Bar
          </h3>

          <div className="relative z-20 w-2/3 sm:w-1/3 flex flex-col items-center">
            <img
              src={pomodoro}
              alt="pomodoro bar chrome extension pic"
              className="w-full h-auto rounded"
            />

            <div className="flex flex-wrap justify-center gap-3 mt-4">
              <a
                href="https://chromewebstore.google.com/detail/cfcalhgbkanpokodhcodleljlaaaabic?utm_source=item-share-cb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-52 text-center px-3 py-2 border border-navy text-navy dark:border-beige dark:text-beige bg-transparent rounded text-sm hover:bg-[#486ea0]/40 transition-colors duration-200"
              >
                View on Chrome Web Store
              </a>
              <a
                href="https://github.com/udai-h/pomodoro-extension/tree/main"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-52 text-center px-3 py-2 border border-navy text-navy dark:border-beige dark:text-beige bg-transparent rounded text-sm hover:bg-[#486ea0]/40 transition-colors duration-200"
              >
                View on GitHub
              </a>
            </div>
          </div>

          <div className="relative z-20 w-full sm:w-2/3 text-navy dark:text-beige">
            <h3 className="text-lg font-semibold mb-1 hidden sm:block text-left">
              Chrome Extension: Pomodoro Bar
            </h3>
            <p className="text-base">
              A lightweight, always-visible progress bar timer that follows the
              Pomodoro technique. Built with a focus on minimalist UI/UX, state
              persistence, and privacy (no tracking). Synchronizes across tabs
              using Chrome local storage. Designed to help users maintain focus
              without UI interruptions.
            </p>
            <p className="text-base">Available on the Chrome Web Store.</p>

            <div className="flex flex-wrap gap-2 mt-3">
              {["JavaScript", "HTML", "CSS", "Chrome Extension API"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 border border-navy text-navy dark:border-beige dark:text-beige bg-[#486ea0]/10 dark:bg-[#486ea0]/30 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-8 mt-5">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-8 p-4 w-full border shadow border-[#486ea0] border-opacity-40 rounded-lg  transition-transform duration-300 overflow-hidden text-inherit group relative">
          <div className="absolute inset-0 bg-[#486ea0]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>

          <h3 className="text-lg font-semibold text-left block sm:hidden z-20">
            Portfolio Website
          </h3>

          <div className="relative z-20 w-2/3 sm:w-1/3 flex flex-col items-center">
            <img
              src={portfolio}
              alt="portfolio pic"
              className="w-full h-auto rounded border border-navy dark:border-beige"
            />

            <div className="flex flex-wrap justify-center gap-3 mt-4">
              <a
                href="https://github.com/udai-h/my-portfolio/tree/main"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-52 text-center px-3 py-2 border border-navy text-navy dark:border-beige dark:text-beige bg-transparent rounded text-sm hover:bg-[#486ea0]/40 transition-colors duration-200"
              >
                View on GitHub
              </a>
            </div>
          </div>

          <div className="relative z-20 w-full sm:w-2/3 text-navy dark:text-beige">
            <h3 className="text-lg font-semibold mb-1 hidden sm:block text-left">
              Portfolio Website
            </h3>
            <p className="text-base">
              A responsive portfolio website built with a focus on clean,
              accessible design and smooth user experience. Features light/dark
              mode toggle, seamless navigation, and semantic HTML. Hosted on
              GitHub Pages.
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              {["React", "TypeScript", "Vite", "Tailwind CSS"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 border border-navy text-navy dark:border-beige dark:text-beige bg-[#486ea0]/10 dark:bg-[#486ea0]/30 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
