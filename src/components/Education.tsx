export default function Education() {
  return (
    <section className="max-w-3xl mx-auto px-6 lg:py-4 pt-16 text-left">
      <h2 className="text-xl font-bold mb-4 lg:hidden">Education</h2>
      <div className="space-y-6">
        <div>
          <h3 className="lg:text-xl text-base font-semibold text-navy dark:text-beige">
            Bachelor of Science in Computer Science
          </h3>
          <p className="lg:text-base text-base text-navy dark:text-beige">
            The University of New South Wales
          </p>
          <p className="lg:text-sm text-xs text-navy dark:text-beige opacity-75">
            Jan 2023 - Dec 2025 (Expected)
          </p>
          <p className="lg:mt-2 mt-1 lg:text-base text-sm text-navy dark:text-beige">
            Gained knowledge in software design, algorithm design, HCI,
            blockchain, frontend development and network.
          </p>
        </div>
        <div>
          <h3 className="lg:text-xl text-base font-semibold text-navy dark:text-beige">
            Diploma in Computer Science
          </h3>
          <p className="lg:text-base text-base text-navy dark:text-beige">
            UNSW Global
          </p>
          <p className="lg:text-sm text-xs text-navy dark:text-beige opacity-75">
            Aug 2021 - Dec 2022
          </p>
          <p className="lg:mt-2 mt-1 lg:text-base text-sm text-navy dark:text-beige">
            Gained foundational knowledge in programming in C and JavaScript,
            algorithm, discrete math, and software development in a team
            environment.
          </p>
        </div>
      </div>
    </section>
  );
}
