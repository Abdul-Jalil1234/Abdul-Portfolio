// ============================================================
//  ALL PORTFOLIO CONTENT LIVES IN THIS FILE.
//  Edit text here; the components read from it.
//  Anything left empty ("" or null) is simply not shown.
// ============================================================

// Files in /public are referenced through PUBLIC_URL so the site
// works both locally and when hosted under a GitHub Pages sub-path.
export const asset = (path) => `${process.env.PUBLIC_URL}${path}`;

export const profile = {
  name: "Abdul-Jalil Fuseini",
  initials: "AJ",
  titles: [
    "Software Engineering Student.",
    "Web Developer.",
    "Aspiring Software Engineer.",
  ],
  heroBio:
    "First-year Software Engineering student at the African Leadership College of Higher Education in Mauritius. I build web apps with JavaScript, React and Node.js, and I'm looking for an internship where I can keep learning and build real products with an engineering team.",
  role: "Software Engineering Student",
  contactBio:
    "Based in Pamplemousses, Mauritius. Open to software engineering internships. The quickest way to reach me is by email.",
  location: "Pamplemousses, Mauritius",
  email: "fuseiniabduljalil180@gmail.com",
  phone: "+230 5455 5973",
  phoneHref: "+23054555973",
  github: "https://github.com/Abdul-Jalil1234",
  linkedin: "https://www.linkedin.com/in/abdul-jalil-fuseini-926621319",
  // Put your photo at public/profile.jpg (square or portrait works best).
  // Until then, your initials are shown instead.
  photo: "/profile.jpg",
  // Optional: put your CV at public/cv.pdf and set this to "/cv.pdf".
  cv: "",
};

export const navLinks = [
  { _id: 1, title: "Home", link: "home" },
  { _id: 2, title: "About", link: "about" },
  { _id: 3, title: "Projects", link: "projects" },
  { _id: 4, title: "Resume", link: "resume" },
  { _id: 5, title: "Certificates", link: "certificates" },
  { _id: 6, title: "Contact", link: "contact" },
];

export const about = {
  paragraphs: [
    "I'm Abdul-Jalil Fuseini, a first-year Software Engineering student at the African Leadership College of Higher Education in Pamplemousses, Mauritius. I like turning ideas into working software, from small JavaScript projects to a back-end API with authentication.",
    "Before university, I represented my schools in quiz competitions: the National Brain Battle Quiz at junior high school, and the National Science & Maths Quiz at Tamale Senior High School, where I competed at the quarter-final stage of the national championship in 2023. It taught me to stay calm under time pressure and to work as part of a team.",
    "Recently I led the team that built the Aqua Vitae website, earned IBM-issued certificates in web development, Python and SQL through Coursera, and completed a National Geographic and Nature Conservancy externship on marine conservation. I'm now looking for a software engineering internship.",
  ],
};

// Details below come straight from your certificates.
export const quizzes = [
  {
    title: "National Science & Maths Quiz: National Championship",
    school: "Tamale Senior High School",
    level: "Senior high school",
    result: "Quarter-final stage",
    year: "2023",
    note: "Contestant in the 2023 edition, at the quarter-final stage of the National Championship. Certificate of Participation.",
    certificate: "/certificates/nsmq-national-2023.jpg",
  },
  {
    title: "National Science & Maths Quiz: Northern Regional Championship",
    school: "Tamale Senior High School",
    level: "Senior high school",
    result: "Participant",
    year: "",
    note: "Took part in the Northern Regional/Zonal Championship. Certificate of Participation.",
    certificate: "/certificates/nsmq-northern-regional.jpg",
  },
  {
    title: "National Brain Battle Quiz",
    school: "St. Joseph's JHS",
    level: "Junior high school",
    result: "Certificate of Honour",
    year: "2019/2020",
    note: "Participated in the 2019/2020 National Brain Battle Quiz, organised by The Cocktail Media and the Catholic Secretariat Education Directorate.",
    certificate: "/certificates/brain-battle.jpg",
  },
];

export const externship = {
  title: "Marine & Community Conservation Remote Externship",
  partners: "National Geographic Society and The Nature Conservancy, delivered through Extern",
  issued: "August 10, 2026",
  certificateId: "191124548",
  image: "/certificates/externship.png",
  description: [
    "I researched how eutrophication and the degradation of coral reefs and mangroves contribute to the loss of fish and the decline of tourism at the Blue Bay Lagoon.",
    "The programme asked participants to research marine conservation issues in their local community, offer solutions, and communicate the impact through effective storytelling. It connects directly to my work on Aqua Vitae, where the goal was also to communicate an environmental and health mission clearly.",
  ],
  tags: ["Marine conservation", "Research", "Storytelling"],
};

export const projects = [
  {
    title: "BSE Specialisation Advisor",
    des: "A timed, scored quiz that matches incoming students to one of four software engineering specialisations: Low-Level Programming, AR/VR, Full-Stack and Machine Learning. Results appear as a radar chart and bar graph drawn directly on the Canvas API, with regex-validated forms and a light/dark theme.",
    tags: ["HTML5", "CSS3", "JavaScript", "Canvas API", "Regex"],
    image: "/projects/advisor.jpg",
    github: "https://abdul-jalil1234.github.io/Bse-specialisation-Advisor/",
    live: "",
    role: "",
  },
  {
    title: "Aqua Vitae Initiative Website",
    des: "A multi-page website built with my team to communicate our mission: improving healthcare in underprivileged rural African communities by making safe drinking water more accessible. Features a preloader, a dark/light theme and mission, support, updates and contact pages.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/projects/aquavitae.jpg",
    github: "https://abdul-jalil1234.github.io/Aqua-Vitae-Website/",
    live: "",
    role: "Project lead · group project",
  },
  {
    title: "Book Reviews API",
    des: "A REST API for a book review service. Users can register and log in, find books by ISBN, author or title, and add, edit or delete their own reviews. Protected routes use JWT authentication with session middleware.",
    tags: ["Node.js", "Express.js", "JWT", "Axios"],
    image: "/projects/book review.jpg",
    github: "https://github.com/Abdul-Jalil1234/expressBookReviews",
    live: "",
    role: "",
  },
];


// Small HTML/CSS/JavaScript projects built to practise core concepts.
// Add `live: "https://..."` to show a live-demo button on a card.
export const miniProjects = [
  {
    title: "Dice Roller",
    des: "The dice-rolling part of my Ludo game project. Choose how many dice to roll and see each result as a dice image, using a loop, Math.random() and DOM updates.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/projects/dice.jpg",
    github: "https://abdul-jalil1234.github.io/Ludo-game/",
    live: "",
  },
  {
    title: "Calculator",
    des: "A calculator with digits, decimals and the four operators, a clear button, and an error message for invalid input.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/projects/calc.jpg",
    github: "https://abdul-jalil1234.github.io/calculator/",
    live: "",
  },
  {
    title: "Digital Clock",
    des: "A live 12-hour digital clock with AM/PM that updates every second, over a full-screen space background.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/projects/clock.jpg",
    github: "https://abdul-jalil1234.github.io/clock/",
    live: "",
  },
  {
    title: "Stopwatch",
    des: "A stopwatch with start, stop and reset buttons that counts hours, minutes, seconds and hundredths of a second.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/projects/stopwatch.jpg",
    github: "https://abdul-jalil1234.github.io/stop-watch/",
    live: "",
  },
];

export const moreProjects = [
  {
    title: "Attendance Tracker Setup Script",
    des: "A Bash script that sets up an attendance tracker workspace and safely archives it if interrupted with Ctrl+C. Includes a Python attendance checker.",
    tags: ["Bash", "Python"],
    github: "https://github.com/Abdul-Jalil1234/deploy_agent_Abdul-Jalil1234",
  },
  {
    title: "API Data Export Scripts",
    des: "Python scripts that gather data from an API and export it to CSV and JSON.",
    tags: ["Python"],
    github: "https://github.com/Abdul-Jalil1234/lucky",
  },
  {
    title: "Python Quests",
    des: "A group assignment of beginner Python challenges, including FizzBuzz.",
    tags: ["Python"],
    github: "https://github.com/Abdul-Jalil1234/The-algorithm-society-python-quests",
  },
];

export const education = [
  {
    title: "Software Engineering",
    subTitle: "African Leadership College of Higher Education, Pamplemousses, Mauritius",
    result: "Year 1",
    des: "First-year Software Engineering student. Coursework and projects include web development, Python, shell scripting and a specialisation advisor for the BSE programme.",
  },
  {
    title: "Senior High School",
    subTitle: "Tamale Senior High School",
    result: "",
    des: "Represented the school at the National Science & Maths Quiz, reaching the quarter-final stage of the national championship in 2023.",
  },
  {
    title: "Junior High School",
    subTitle: "St. Joseph's JHS",
    result: "",
    des: "Represented the school in the 2019/2020 National Brain Battle Quiz.",
  },
];

export const experience = [
  {
    title: "Assistant Tutor",
    subTitle: "Better Future Remedial Classes",
    result: "Oct 2024 – Aug 2025",
    des: "Supported students in remedial classes, strengthening my communication and my ability to explain ideas clearly.",
  },
  {
    title: "Mobile Money Vendor",
    subTitle: "Fasco Ventures",
    result: "Mar 2022 – Aug 2024",
    des: "Handled customers' mobile money transactions, where accuracy, honesty and good customer service matter every day.",
  },
  {
    title: "Laundry Attendant",
    subTitle: "Laundry business",
    result: "Feb 2021 – Feb 2022",
    des: "Worked in a laundry business, handling day-to-day customer orders and building a reliable work routine.",
  },
];

export const leadership = [
  {
    title: "Project Lead",
    subTitle: "Aqua Vitae Initiative website",
    result: "Group project",
    des: "Led our team in building a website that communicates our mission of making safe drinking water more accessible in rural African communities.",
  },
  {
    title: "Externship Participant",
    subTitle: "National Geographic Society × The Nature Conservancy",
    result: "Aug 2026",
    des: "Researched marine conservation issues at the Blue Bay Lagoon and communicated the findings through storytelling.",
  },
  {
    title: "School Quiz Representative",
    subTitle: "St. Joseph's JHS and Tamale Senior High School",
    result: "2019 – 2023",
    des: "Represented my schools in the National Brain Battle Quiz and the National Science & Maths Quiz (regional and national stages).",
  },
];

export const skills = {
  core: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "Python",
    "SQL",
    "Git & GitHub",
  ],
  familiar: [
    "TypeScript",
    "Java",
    "Regex",
    "Next.js",
    "React Native",
    "Django",
    "MongoDB",
    "Prisma",
    "Docker",
  ],
  soft: [
    "Analytical thinking",
    "Mathematical problem solving",
    "Time management",
    "Communication",
    "Teamwork",
    "Leadership",
  ],
};

export const certificates = [
  {
    title: "Introduction to HTML, CSS, & JavaScript",
    issuer: "IBM · Coursera",
    date: "Sep 23, 2026",
    image: "/certificates/html-css-js.jpg",
    verify: "https://www.credly.com/badges/5c2ba9f6-85ad-4eaf-8248-c79cff8db0db",
  },
  {
    title: "Front-end Development with React V2",
    issuer: "IBM · Coursera",
    date: "Sep 25, 2026",
    image: "/certificates/react.jpg",
    verify: "https://www.credly.com/badges/c788f3c2-87a0-47f5-a35c-b8f5d672e85e",
  },
  {
    title: "Node and Express Essentials",
    issuer: "IBM · Coursera",
    date: "Sep 28, 2026",
    image: "/certificates/node-express.jpg",
    verify: "https://www.credly.com/badges/01da5674-b712-4787-97ed-4dd98ccef46a",
  },
  {
    title: "Python for Data Science and AI",
    issuer: "IBM · Coursera",
    date: "Sep 30, 2026",
    image: "/certificates/python.jpg",
    verify: "https://www.credly.com/badges/b1e4d403-c92b-44bd-b789-42fa19c3caa3",
  },
  {
    title: "Querying Databases with SQL",
    issuer: "IBM · Coursera",
    date: "Sep 30, 2026",
    image: "/certificates/sql.jpg",
    verify: "https://www.credly.com/badges/8a8fa2bb-757a-487e-97f1-7c1451730189",
  },
];

// Add real recommendations here, with the person's permission.
// While this list is empty, the Testimonials section is not shown.
// Example: { quote: "…", name: "Chris Bergue", role: "Front-End Course Facilitator" }
export const testimonials = [];
