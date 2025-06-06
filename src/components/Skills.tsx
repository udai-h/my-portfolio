export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-3xl mx-auto px-6 pt-16 text-left xl:text-lg text-base"
    >
      <h2 className="xl:text-2xl text-xl font-bold mb-4">Skills</h2>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Frontend</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "React",
            "TypeScript",
            "JavaScript",
            "HTML",
            "CSS",
            "Tailwind CSS",
          ].map((tech) => (
            <span
              key={tech}
              className="text-sm md:text-base px-3 py-1 border border-navy text-navy dark:border-beige dark:text-beige bg-[#486ea0]/10 dark:bg-[#486ea0]/30 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Backend</h3>
        <div className="flex flex-wrap gap-2">
          {["C", "Python", "Java"].map((tech) => (
            <span
              key={tech}
              className="text-sm md:text-base px-3 py-1 border border-navy text-navy dark:border-beige dark:text-beige bg-[#486ea0]/10 dark:bg-[#486ea0]/30 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Tools</h3>
        <div className="flex flex-wrap gap-2">
          {["Git"].map((tech) => (
            <span
              key={tech}
              className="text-sm md:text-base px-3 py-1 border border-navy text-navy dark:border-beige dark:text-beige bg-[#486ea0]/10 dark:bg-[#486ea0]/30 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
