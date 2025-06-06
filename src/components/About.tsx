export default function About() {
  return (
    <section
      id="about"
      className="max-w-3xl mx-auto px-6 xl:pt-24 text-left xl:text-lg text-base"
    >
      <h2 className="xl:text-2xl text-xl font-bold mb-4">About</h2>
      <p className="text-navy dark:text-beige mb-4">
        I'm a software engineer studying{" "}
        <a
          href="https://www.unsw.edu.au/study/undergraduate/bachelor-of-computer-science"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-navy dark:text-beige"
        >
          Computer Science
        </a>{" "}
        at{" "}
        <a
          href="https://www.unsw.edu.au/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-navy dark:text-beige"
        >
          The University of New South Wales
        </a>
        .
      </p>
      <p className="text-navy dark:text-beige mb-4">
        My life goal is to create new value in the world through software
        development.
      </p>
      <p className="text-navy dark:text-beige mb-4">
        With an academic background in Human-Computer Interaction and
        Installation Art, I strive to build software that people can truly feel
        and interact with.
      </p>
      <p className="text-navy dark:text-beige mb-4">
        I'm especially interested in both web and mobile app development, and I
        aspire to contribute to services from both frontend and backend
        perspectives.
      </p>
      <p className="text-navy dark:text-beige">
        In addition, through my involvement in{" "}
        <a
          href="https://byebyeplasticbags.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-navy dark:text-beige"
        >
          an international non-profit organization
        </a>
        , I've developed strong communication and leadership skills, which I
        bring to both collaborative and cross-cultural projects.
      </p>
    </section>
  );
}
