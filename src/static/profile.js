const EMAIL = "katecalingasan00@gmail.com";
const RESUME_FILENAME = "SHERYN KATE CALINGASAN CV.pdf";

export const resumeUrl = `/assets/${encodeURIComponent(RESUME_FILENAME)}`;
export const resumeDownloadName = "Sheryn-Kate-Calingasan-Resume.pdf";

/** Opens Gmail compose in the browser (user must be signed into Google). */
export const gmailComposeUrl = ({ to = EMAIL, subject = "", body = "" } = {}) => {
  let url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}`;
  if (subject) url += `&su=${encodeURIComponent(subject)}`;
  if (body) url += `&body=${encodeURIComponent(body)}`;
  return url;
};

export const profile = {
  name: "Sheryn Kate Calingasan",
  shortName: "Kate",
  lastName: "Calingasan",
  initials: "SK",
  title: "Junior Software Developer",
  titleNote: "Open to full-time opportunities · Remote",
  availability: {
    status: "Open to work",
    detail: "Available for full-time junior developer roles",
  },
  roles: [
    "Junior Software Developer",
    "Software Engineering Researcher",
    "Game Developer",
    "QA Tester",
    "Flutter Mobile Developer",
  ],
  terminalLines: [
    { type: "command", text: "whoami" },
    { type: "output", text: "Sheryn Kate Calingasan" },
    { type: "command", text: "cat stack.txt" },
    {
      type: "output",
      text: "React JS · Next.js · TypeScript · Tailwind · Vercel · Git",
      variant: "accent",
    },
    { type: "command", text: "ls ./experience" },
    {
      type: "output",
      text: "thesis-research/  game-development/  quality-assurance/",
    },
    { type: "command", text: "git status" },
    {
      type: "output",
      text: "On branch main, working tree clean, ready to ship",
      variant: "success",
    },
    { type: "command", text: "echo $AVAILABILITY" },
    {
      type: "output",
      text: "Open to full-time junior developer opportunities",
      variant: "accent",
    },
  ],
  devWorkflow: [
    {
      step: "01",
      title: "Understand",
      desc: "Talk through the requirements, ask questions, and plan before writing code.",
    },
    {
      step: "02",
      title: "Build",
      desc: "Write clean code for web, mobile, or games using whatever tool fits the task.",
    },
    {
      step: "03",
      title: "Test",
      desc: "Run manual tests, write bug reports, and check fixes before release.",
    },
    {
      step: "04",
      title: "Deliver",
      desc: "Join code reviews, write docs, and help the team get features out the door.",
    },
  ],
  techMarquee: [
    "JavaScript",
    "TypeScript",
    "React JS",
    "Next.js",
    "Tailwind CSS",
    "PHP",
    "Dart",
    "Flutter",
    "Godot",
    "GDScript",
    "MongoDB",
    "MySQL",
    "Firebase",
    "Vercel",
    "Railway",
    "ChatGPT",
    "Claude",
    "Cursor",
    "HTML",
    "CSS",
    "Bootstrap",
    "jQuery",
    "Git",
    "VS Code",
    "Android Studio",
  ],
  yearsExperience: 1,
  experienceStarted: "January 2026",
  experienceRange: "2022 – Present",
  tagline:
    "I've worked on web, mobile, and game projects through school and my internship. I care about clean code, good docs, and testing before things go live.",
  location: "Medina Magallanes, Cavite",
  phone: "0993 801 4668",
  stats: [
    {
      value: "1+",
      label: "Year building software",
      detail:
        "Thesis and capstone projects, school research, and an internship at GoCrayons Digital Inc.",
    },
    {
      value: "Web · Mobile · Game",
      label: "What I build",
      detail:
        "Flutter mobile apps, PHP web systems, and 2D games with Godot and GDScript.",
    },
    {
      value: "QA & teamwork",
      label: "How I work",
      detail:
        "Manual testing, clear bug reports, and working with the team to get features out on time.",
    },
  ],
  contactPreference:
    "Email works best for me. Feel free to ask about my projects or any open roles.",
  email: EMAIL,
  emailComposeUrl: gmailComposeUrl({ to: EMAIL }),
  github: "https://github.com/codewithkatey",
  githubHandle: "codewithkatey",
  linkedin: null,
  linkedinHandle: null,
  photoUrl: null,
  resumeUrl,
  resumeDownloadName,
  builtWithNote:
    "I created this portfolio using React JS, Material UI, and Framer Motion.",
  aboutHeading: "About me",
  aboutSubtitle:
    "Recent IT grad who likes learning new tools and building software with a team.",
  about: `I build web, mobile, and game apps. Most of my experience comes from capstone and thesis work in my BSIT program, where I handled planning, coding, testing, and documentation. During my internship at GoCrayons, I also worked on 2D games in Godot and did manual QA. I work well with others and try to finish what I start.`,
  skillsSubtitle:
    "Languages, frameworks, and tools I've picked up from school projects, personal builds, and my internship.",
  experienceSubtitle:
    "Capstone and thesis work from my BSIT program, plus game development and QA from my internship.",
  projectsSubtitle:
    "A few projects from school and personal work, mostly full-stack web and mobile apps.",
  education: {
    school: "Olivarez College Tagaytay",
    degree: "Bachelor of Science in Information Technology",
    years: "2022 – 2026",
    honors: [
      "Dean's List Awardee",
      "ELO Scholar",
      "Best Accessibility Features",
      "Best Use of Frameworks & Libraries",
    ],
    secondary: {
      school: "Gazellian College Foundation Inc.",
      degree: "Senior High School (HUMSS)",
      years: "2016 – 2022",
    },
  },
  workExperience: [
    {
      company: "GoCrayons Digital Inc.",
      role: "Intern",
      focus: ["Game Development", "Quality Assurance"],
      period: "January 2026 – May 2026",
      sections: [
        {
          title: "Game Development",
          highlights: [
            "Designed, developed, and tested 10+ complete 2D game projects using Godot Engine and GDScript during a five-month internship.",
            "Built more than 7 core gameplay features, including player controls, UI elements, scene transitions, collision detection, and interactive mechanics.",
            "Collaborated with a team of developers and designers to deliver projects on schedule while meeting quality standards.",
          ],
        },
        {
          title: "Quality Assurance",
          highlights: [
            "Performed manual testing across 10+ test cases, identifying gameplay issues, UI bugs, and functional defects before release.",
            "Documented 30+ bug reports with detailed reproduction steps, helping developers resolve issues more efficiently.",
            "Verified fixes for 89% of reported defects before deployment, contributing to improved software quality.",
            "Reduced recurring gameplay issues by approximately 10% through continuous testing, debugging, and optimization.",
          ],
        },
      ],
      technologies: [
        "Godot",
        "GDScript",
        "Manual QA",
        "Bug Reporting",
        "Git",
        "VS Code",
      ],
    },
    {
      company: "Olivarez College Tagaytay",
      role: "Capstone / Thesis",
      focus: ["Software Engineering", "Research & Development"],
      period: "2022 – 2026",
      sections: [
        {
          title: "Software Engineering",
          highlights: [
            "Built full-stack and mobile apps for coursework, capstone, and thesis.",
            "Built a Canteen Ordering System in Flutter with Firebase for ordering, menus, and student transactions.",
            "Built Celestial, a PHP/MySQL inventory site with jQuery, AJAX, image previews, and CRUD.",
            "Followed the full dev process: requirements, design, coding, testing, and docs.",
          ],
        },
        {
          title: "Research & Thesis",
          highlights: [
            "Did IT research on software that solves real campus and business problems.",
            "Read related studies, planned systems, and evaluated apps for our thesis defense.",
            "Documented architecture, database design, and workflows for thesis and capstone.",
            "Presented our projects with focus on how they work and how easy they are to maintain.",
          ],
        },
      ],
      technologies: [
        "Flutter",
        "Dart",
        "Firebase",
        "PHP",
        "MySQL",
        "JavaScript",
        "jQuery",
        "AJAX",
        "Bootstrap",
        "Git",
      ],
    },
  ],
  skillCategories: [
    {
      progressName: "Software Engineering",
      progressValue: 86,
      tools: [
        "SDLC",
        "Requirements Analysis",
        "System Design",
        "Documentation",
        "Capstone / Thesis",
      ],
    },
    {
      progressName: "Programming Languages",
      progressValue: 85,
      tools: ["JavaScript", "TypeScript", "PHP", "Java", "Dart", "GDScript"],
    },
    {
      progressName: "Web Technologies",
      progressValue: 82,
      tools: [
        "HTML",
        "CSS",
        "React JS",
        "Next.js",
        "Tailwind CSS",
        "Bootstrap",
        "jQuery",
        "AJAX",
      ],
    },
    {
      progressName: "Game Development",
      progressValue: 82,
      tools: ["Godot Engine", "GDScript", "Gameplay Systems", "Scene Design"],
    },
    {
      progressName: "Mobile Development",
      progressValue: 80,
      tools: ["Flutter", "Dart", "Android Studio", "Firebase"],
    },
    {
      progressName: "Quality Assurance",
      progressValue: 85,
      tools: [
        "Manual Testing",
        "Bug Reports",
        "Reproduction Steps",
        "Regression Checks",
        "UX Testing",
      ],
    },
    {
      progressName: "Databases & Tools",
      progressValue: 78,
      tools: [
        "MongoDB",
        "MySQL",
        "Firebase",
        "Vercel",
        "Railway",
        "VS Code",
        "Git",
        "XAMPP",
        "phpMyAdmin",
      ],
    },
    {
      progressName: "AI Tools",
      progressValue: 80,
      tools: ["ChatGPT", "Claude", "Cursor"],
    },
  ],
};
