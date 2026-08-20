import Image from "next/image";
import IntroSequence from "@/components/intro/IntroSequence";
import ContactAction from "@/components/ContactAction";

const workExperience = [
  {
    role: "Research Intern",
    company: "Indian Institute of Information Technology Vadodara",
    focus: "Physical Layer Security & Reinforcement Learning",
    period: "2025",
    points: [
      "Enhanced physical layer security for IoT networks using an RIS-mounted UAV to mitigate eavesdropping attacks.",
      "Formulated an average secrecy-rate maximization model optimizing UAV flight trajectories, RIS phase shifts, and transmit power.",
      "Deployed Reinforcement Learning with TD3 for dynamic trajectory and signal adaptation, achieving a peak secrecy rate of 8.5 bits/s/Hz.",
      "Benchmarked against standard baselines, demonstrating a 40% higher average secrecy rate in dense eavesdropper environments.",
    ],
  },
];

const projects = [
  {
    year: "2024",
    title: "SkillRoute",
    category: "AI-Powered Personalized Learning Platform",
    tech: "Spring Boot, MySQL, React, Tailwind CSS, Redis, JWT, GenAI",
    href: "https://github.com/Sudeep-Gupta04/SkillRoute",
    points: [
      "Delivered GenAI-curated resources for roadmap topics with 1000+ YouTube videos and articles.",
      "Generated 500+ adaptive quizzes using GPT-powered APIs for personalized assessments.",
      "Built a Reddit-style forum with voting, filtering, and Redis caching for fast user experience.",
      "Secured user data with JWT authentication and role-based access control.",
    ],
  },
  {
    year: "2024",
    title: "Profit Pilot",
    category: "Price Forecasting and Inventory Optimization",
    tech: "React.js, Express.js, MongoDB, ML Libraries",
    href: "https://github.com/Sudeep-Gupta04/sparkathon2025_HackMonarchs",
    points: [
      "Integrated ML-powered price prediction models with a responsive React dashboard through REST APIs.",
      "Built an interactive UI for real-time inventory tracking, demand trends, and pricing suggestions.",
      "Engineered a full-stack pipeline enabling dynamic pricing based on expiry and market analytics.",
    ],
  },
  {
    year: "2023",
    title: "BidBazaar",
    category: "Online Auction Platform",
    tech: "Spring Boot, MySQL, React.js, REST API",
    href: "https://github.com/Sudeep-Gupta04/BidBazaar_mig",
    points: [
      "Built a full-stack auction system enabling 50+ users to bid on products through real-time auctions.",
      "Designed a normalized MySQL schema for users, bids, listings, transactions, and their relationships.",
      "Integrated Spring Boot APIs with a responsive React UI for live bidding and product tracking.",
    ],
  },
];

const education = [
  {
    school: "IIIT Vadodara",
    detail: "B.Tech in Information Technology",
    period: "Aug 2023 - Present",
    result: "CGPA 8.52/10 till 6th semester",
  },
  {
    school: "Class XII - CBSE",
    detail: "Senior Secondary",
    period: "July 2022",
    result: "87.4%",
  },
  {
    school: "Class X - CBSE",
    detail: "Secondary",
    period: "July 2020",
    result: "89.6%",
  },
];

const achievements = [
  "Solved 1400+ coding problems across platforms with a 1700+ LeetCode rating, ranking in the top 10%.",
  "Ranked 91st on GeeksforGeeks among 1800+ registered students of IIIT Vadodara.",
  "Secured Rank 1778 in LeetCode Biweekly Contest 189 among over 46,000 participants.",
  "Secured Rank 1826 in LeetCode Biweekly Contest 185 among over 40,000 participants.",
];

const skillGroups = [
  "Java",
  "C",
  "JavaScript",
  "SQL",
  "Spring Boot",
  "React",
  "MySQL",
  "MongoDB",
  "Redis",
  "PostgreSQL",
  "Git",
  "Prompt Engineering",
  "LLM API Integration",
];

export default function Home() {
  return (
    <div className="relative w-full">
      <IntroSequence />

      <div className="relative z-10 h-[58vh] pointer-events-none" />

      {/* ── About / Skills ── */}
      <section id="about" className="relative z-20">
        <div
          className="overflow-hidden rounded-t-[2.5rem] bg-cross-pattern shadow-[0_-30px_80px_rgba(0,0,0,0.12)] md:rounded-t-[4rem]"
          style={{ backgroundColor: "var(--accent-yellow)" }}
        >
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-12 md:py-28">
            <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
              <div className="flex justify-center lg:justify-start">
                <div
                  className="relative aspect-[3/4] w-[68vw] max-w-[360px] overflow-hidden rounded-[2rem] shadow-2xl"
                  style={{ border: "3px solid rgba(30,30,30,0.20)" }}
                >
                  <Image
                    src="/profile.png"
                    alt="Sudeep Gupta"
                    fill
                    sizes="(max-width: 768px) 80vw, 360px"
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute bottom-5 left-4 right-4 flex flex-wrap gap-2">
                    {["Full-Stack", "AI / ML", "Research"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.15em]"
                        style={{
                          backgroundColor: "var(--text-primary)",
                          color: "var(--accent-yellow)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <p
                  className="mb-6 text-xs font-extrabold uppercase tracking-[0.3em]"
                  style={{ color: "rgba(30,30,30,0.50)" }}
                >
                  Portfolio
                </p>
                <h2
                  className="mb-10 text-3xl font-extrabold leading-[1.12] tracking-tight md:text-[2.8rem]"
                  style={{ color: "#1e1e1e" }}
                >
                  I build practical software across full-stack systems, AI
                  integrations, data-backed workflows, and research-led security
                  problems.
                </h2>
                <div className="mb-10 h-px w-full" style={{ backgroundColor: "rgba(30,30,30,0.20)" }} />
                <div id="skills" className="grid scroll-mt-28 gap-3 sm:grid-cols-2">
                  {skillGroups.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.14em]"
                      style={{
                        border: "1px solid rgba(30,30,30,0.20)",
                        color: "rgba(30,30,30,0.70)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section
        id="experience"
        className="relative z-20 bg-dot-pattern py-24 md:py-32"
        style={{
          backgroundColor: "var(--bg-dark)",
          color: "var(--text-on-dark)",
        }}
      >
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p
                className="mb-4 text-xs font-extrabold uppercase tracking-[0.3em]"
                style={{ color: "rgba(232,226,216,0.40)" }}
              >
                Work Experience
              </p>
              <h2 className="text-5xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-7xl">
                Research
                <br />
                Work
              </h2>
            </div>
            <p
              className="max-w-sm text-sm font-medium leading-relaxed"
              style={{ color: "rgba(232,226,216,0.55)" }}
            >
              Academic research experience focused on securing IoT communication
              using optimization and reinforcement learning.
            </p>
          </div>

          {workExperience.map((item) => (
            <article
              key={item.role}
              className="grid gap-10 py-10 lg:grid-cols-[0.7fr_1.3fr]"
              style={{ borderTop: "1px solid rgba(232,226,216,0.12)", borderBottom: "1px solid rgba(232,226,216,0.12)" }}
            >
              <div>
                <p
                  className="mb-4 text-xs font-extrabold uppercase tracking-[0.24em]"
                  style={{ color: "var(--accent-yellow)" }}
                >
                  {item.period}
                </p>
                <h3 className="mb-3 text-4xl font-extrabold uppercase leading-none tracking-tight">
                  {item.role}
                </h3>
                <p
                  className="text-sm font-bold uppercase tracking-[0.16em]"
                  style={{ color: "rgba(232,226,216,0.45)" }}
                >
                  {item.company}
                </p>
                <p
                  className="mt-4 text-sm font-semibold"
                  style={{ color: "rgba(232,226,216,0.70)" }}
                >
                  {item.focus}
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {item.points.map((point, index) => (
                  <div
                    key={point}
                    className="rounded-[1rem] p-5 transition-colors duration-300"
                    style={{
                      border: "1px solid rgba(232,226,216,0.10)",
                    }}
                  >
                    <span
                      className="mb-4 block text-xs font-extrabold uppercase tracking-[0.2em]"
                      style={{ color: "var(--accent-yellow)" }}
                    >
                      0{index + 1}
                    </span>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(232,226,216,0.78)" }}
                    >
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Projects ── */}
      <section
        id="projects"
        className="relative z-20 bg-grid-pattern py-24 md:py-32"
        style={{
          backgroundColor: "var(--bg-base)",
          color: "var(--text-primary)",
        }}
      >
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="mb-16">
            <p
              className="mb-4 text-xs font-extrabold uppercase tracking-[0.3em]"
              style={{ color: "rgba(var(--text-primary-rgb, 30,30,30),0.40)" }}
            >
              Selected Builds
            </p>
            <h2 className="text-5xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-7xl">
              Curated
              <br />
              Projects
            </h2>
          </div>

          <div style={{ borderTop: "1px solid var(--border-light)" }}>
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block py-10 transition-all duration-300 hover:px-3"
                style={{ borderBottom: "1px solid var(--border-light)" }}
              >
                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                  <div>
                    <div className="mb-5 flex flex-wrap items-center gap-3">
                      <span
                        className="rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em]"
                        style={{
                          backgroundColor: "var(--border-light)",
                          color: "var(--text-primary)",
                          opacity: 0.6,
                        }}
                      >
                        {project.year}
                      </span>
                      <span
                        className="text-xs font-bold uppercase tracking-[0.16em]"
                        style={{ color: "var(--text-primary)", opacity: 0.45 }}
                      >
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-4xl font-extrabold uppercase leading-none tracking-tight transition-all duration-300 group-hover:italic md:text-6xl">
                      {project.title}
                    </h3>
                    <p
                      className="mt-5 text-sm font-bold uppercase leading-relaxed tracking-[0.14em]"
                      style={{ color: "var(--text-primary)", opacity: 0.42 }}
                    >
                      {project.tech}
                    </p>
                    <span
                      className="mt-6 inline-flex rounded-full px-5 py-2 text-[10px] font-extrabold uppercase tracking-[0.22em] transition-colors duration-300"
                      style={{
                        border: "1px solid var(--border-light)",
                        color: "var(--text-primary)",
                        opacity: 0.6,
                      }}
                    >
                      View GitHub
                    </span>
                  </div>

                  <ul className="grid gap-3">
                    {project.points.map((point) => (
                      <li
                        key={point}
                        className="rounded-[1rem] px-5 py-4 text-sm leading-relaxed"
                        style={{
                          border: "1px solid var(--border-light)",
                          backgroundColor: "var(--bg-card)",
                          color: "var(--text-primary)",
                          opacity: 0.85,
                        }}
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Education ── */}
      <section
        id="education"
        className="relative z-20 py-24 md:py-32"
        style={{
          backgroundColor: "var(--bg-teal)",
          color: "var(--text-primary)",
        }}
      >
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p
                className="mb-4 text-xs font-extrabold uppercase tracking-[0.3em]"
                style={{ color: "var(--text-primary)", opacity: 0.45 }}
              >
                Education
              </p>
              <h2 className="text-5xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-7xl">
                Academic
                <br />
                Track
              </h2>
            </div>
            <p
              className="max-w-xs text-sm font-semibold leading-relaxed"
              style={{ color: "var(--text-primary)", opacity: 0.55 }}
            >
              Information Technology foundation with strong coursework across
              DSA, systems, databases, networks, security, and software
              engineering.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {education.map((item) => (
              <article
                key={item.school}
                className="min-h-[240px] rounded-[1rem] p-6"
                style={{
                  border: "1px solid var(--border-light)",
                  backgroundColor: "var(--bg-card)",
                  opacity: 0.9,
                }}
              >
                <p
                  className="mb-10 text-xs font-extrabold uppercase tracking-[0.22em]"
                  style={{ color: "var(--text-primary)", opacity: 0.42 }}
                >
                  {item.period}
                </p>
                <h3 className="mb-4 text-2xl font-extrabold uppercase leading-tight tracking-tight">
                  {item.school}
                </h3>
                <p
                  className="text-sm font-bold uppercase tracking-[0.12em]"
                  style={{ color: "var(--text-primary)", opacity: 0.52 }}
                >
                  {item.detail}
                </p>
                <p className="mt-6 text-lg font-extrabold">{item.result}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Achievements ── */}
      <section
        id="achievements"
        className="relative z-20 py-24 md:py-32"
        style={{
          backgroundColor: "var(--bg-achievements)",
          color: "var(--text-primary)",
        }}
      >
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="mb-16">
            <p
              className="mb-4 text-xs font-extrabold uppercase tracking-[0.3em]"
              style={{ color: "var(--text-primary)", opacity: 0.40 }}
            >
              Achievements
            </p>
            <h2 className="text-5xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-7xl">
              Competitive
              <br />
              Edge
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {achievements.map((achievement, index) => (
              <article
                key={achievement}
                className="rounded-[1rem] p-6"
                style={{
                  border: "1px solid var(--border-light)",
                  backgroundColor: "var(--bg-base)",
                }}
              >
                <span
                  className="mb-8 block text-xs font-extrabold uppercase tracking-[0.22em]"
                  style={{ color: "var(--accent-orange)" }}
                >
                  0{index + 1}
                </span>
                <p className="text-xl font-extrabold leading-snug tracking-tight md:text-2xl">
                  {achievement}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section
        id="contact"
        className="relative z-20 p-4 md:p-8"
        style={{ backgroundColor: "var(--bg-dark)" }}
      >
        <div
          className="flex w-full flex-col items-center justify-center rounded-[2rem] bg-cross-pattern py-28 text-center md:rounded-[3rem] md:py-40"
          style={{
            backgroundColor: "var(--accent-yellow)",
            border: "1px solid rgba(30,30,30,0.10)",
            color: "#1e1e1e",
          }}
        >
          <p
            className="mb-8 text-xs font-extrabold uppercase tracking-[0.3em]"
            style={{ color: "rgba(30,30,30,0.50)" }}
          >
            Let&apos;s build something
          </p>
          <h2 className="mb-14 text-[12vw] font-extrabold uppercase leading-[0.9] tracking-tight md:text-[8vw]">
            Useful
            <br />&amp; Reliable
          </h2>
          <ContactAction />
        </div>

        <div
          className="mt-8 flex flex-col items-center justify-between gap-4 px-4 text-[10px] font-extrabold uppercase tracking-[0.3em] sm:flex-row"
          style={{ color: "rgba(232,226,216,0.30)" }}
        >
          <p>Designed and built by Sudeep</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/sudeep-g-217a7928b/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#f7f1ed]"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Sudeep-Gupta04"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#f7f1ed]"
            >
              GitHub
            </a>
            <a
              href="https://www.geeksforgeeks.org/profile/sudeepkguqd9b"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#f7f1ed]"
            >
              GFG
            </a>
            <a
              href="https://leetcode.com/u/Sudeep-Gupta04/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#f7f1ed]"
            >
              LeetCode
            </a>
            <a
              href="mailto:sudeepkgupta2001@gmail.com"
              className="transition-colors hover:text-[#f7f1ed]"
            >
              Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
