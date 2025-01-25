import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  pos,
  crmnext,
  linkedIn,
  github,
  imss,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "NodeJs Developer",
    icon: backend,
  },
  {
    title: "Javascript Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Imss",
    company_website: "https://www.imss.lk",
    icon: imss,
    iconBg: "#E6DEDD",
    date: "Nov 2024 - Present",
    points: [
      "Boosted team efficiency by 50% by implementing monorepo architecture and reusable Design-System.",
      "Integrated GenAI models to automate flow creation from user prompts, eliminating manual configuration efforts.",
      "Integrated unit testing with 80% code coverage, enhancing code reliability and reducing bugs.",
    ],
  },

];

const projects = [
  {
    name: "IMSS-POS Web",
    description:
      "Empowering businesses with a streamlined Point of Sale (POS) system that offers efficient inventory management, real-time sales tracking, and insightful analytics. Designed to enhance productivity, monitor growth, and provide an intuitive experience for managing day-to-day operations seamlessly.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: pos,
    hosted_link:
      "https://imss.lk",
  }
];

const personalInfo = {
  name: "Muhammathu Rusaith",
  fullName: "Muhammathu ismail Muhammathu Rusaith",
  email: "rusa.rock72@gmail.com@gmail.com",
  role: "Software Developer",
  about: `I'm a software developer with experience in
  JavaScript and expertise in frameworks like React.Js, React-naitve,
  Node.js etc. I'm a quick learner and collaborate closely with clients to
  create efficient, scalable, and user-friendly solutions that solve
  real-world problems. Let's work together to bring your ideas to life!`,
  projectsIntro: `Following projects showcases my skills and experience through
  real-world examples of my work. Each project is briefly described with
  live demos. It reflects my ability to solve complex problems, work
  with different technologies, and manage projects effectively.`,
};

const publicUrls = {
  resume:
    "https://drive.google.com/file/d/1J5z3XBVOxDJuc0iiFTMNjBKKpkio-uS6/view?usp=drive_link",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/muhammadh-rusaith-65004131b/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/RusaithMhd",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
