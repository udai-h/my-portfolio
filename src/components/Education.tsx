export default function Education() {
  return (
    <section id="education" className="max-w-3xl mx-auto px-6 pt-16 text-left">
      <h2 className="xl:text-2xl text-xl font-bold mb-4">Education</h2>
      <div className="space-y-10">
        <div className="xl:flex xl:gap-6">
          <div className="xl:w-1/4 mb-2 xl:mb-0">
            <p className="xl:text-sm text-xs text-navy dark:text-beige mt-1">
              Jan 2023 - Dec 2025 (Expected)
            </p>
          </div>
          <div className="xl:w-3/4 space-y-1">
            <h3 className="xl:text-xl text-lg font-semibold text-navy dark:text-beige">
              Bachelor of Science in Computer Science
            </h3>
            <p className="xl:text-base text-base font-bold italic text-navy dark:text-beige">
              The University of New South Wales
            </p>
            <p className="xl:mt-2 mt-1 xl:text-base text-sm text-navy dark:text-beige">
              Gained knowledge in software design, algorithm design, HCI,
              blockchain, frontend development and network.
            </p>
          </div>
        </div>

        <div className="xl:flex xl:gap-6">
          <div className="xl:w-1/4 mb-2 xl:mb-0">
            <p className="xl:text-sm text-xs text-navy dark:text-beige mt-1">
              Aug 2021 - Dec 2022
            </p>
          </div>
          <div className="xl:w-3/4 space-y-1">
            <h3 className="xl:text-xl text-lg font-semibold text-navy dark:text-beige">
              Diploma in Computer Science
            </h3>
            <p className="xl:text-base text-base font-bold italic text-navy dark:text-beige">
              UNSW Global
            </p>
            <p className="xl:mt-2 mt-1 xl:text-base text-sm text-navy dark:text-beige">
              Gained foundational knowledge in programming in C and JavaScript,
              algorithm, discrete math, and software development in a team
              environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
