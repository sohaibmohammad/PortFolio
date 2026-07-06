import {
  mobile,
  docker,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  orbit,
  ops,
  itc,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  postgreSql,
  boostrap,
  jQuery,
  threejs,
  swap,
  notNull,
  babyLife,
  backItc,
  sql,
  net,
  ef,
  doroob,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },

  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
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
    name: "TypeScript",
    icon: typescript,
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
    name: "Asp.Net Core",
    icon: net,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Entity Framework",
    icon: ef,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "JQuery",
    icon: jQuery,
  },
  {
    name: "bootstrap",
    icon: boostrap,
  },
];

const projects = [
  {
    name: "Job platform",
    description:
      "Doroob is an interactive portal that empowers users to manage their career development journey. Through the platform, candidates can create detailed professional profiles, discover relevant job openings, and apply directly to listings. It also provides companies with an efficient dashboard to manage applications and communicate with potential talents effectively.",
    tags: [
      {
        name: "Asp.Net Core",
        color: "blue-text-gradient",
      },
      {
        name: "SQL Server",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "text-sky-500",
      },
    ],
    image: doroob,
    deploy: "https://front-end-doroob.vercel.app/",
    source_code_link: "https://github.com/sohaibmohammad/Backend_JobPlatform",
  },
  {
    name: "Real-Time Social Media ",
    description:
      "Experience seamless, instantaneous communication with our real-time chat feature. Built for speed and connectivity, it enables private and group messaging with instant delivery, live status indicators, and typing notifications. Stay connected with friends effortlessly, as every conversation happens in real-time, ensuring a smooth, reliable, and immersive social experience.",
    tags: [
      {
        name: "ASP.NET Core",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "text-amber-700",
      },
      {
        name: "SQL",
        color: "text-yellow-400",
      },
    ],
    image: notNull,
    deploy: "https://notnull-socialmedia.netlify.app/",
    source_code_link: "https://github.com/sohaibmohammad/realTimeChat--Backend",
  },
  {
    name: "E-commerce Website",
    description:
      "A tailored e-commerce demo prepared to highlight the end-to-end shopping journey. It features a robust dashboard for managing products, processing orders, and visualizing sales data, providing a complete insight into the business’s online performance",
    tags: [
      {
        name: "ASP.NET Core",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind",
        color: "text-amber-700",
      },
      {
        name: "SQL",
        color: "text-yellow-400",
      } ,
      {
        name: "Socket io",
        color: "text-teal-950",
      },
    ],
    image: backItc,
    deploy: "",
    source_code_link: "https://github.com/sohaibmohammad/Ecommerce_Backend",
  },
];

const experiences = [
  {
    title: "Back-End Developer Intern",
    company_name: "Leading Point",
    icon: orbit, // Update with the appropriate icon reference
    iconBg: "#383E56",
    date: "Jan 2026 - May 2026",
    points: [
      "Designing and developing robust server-side logic using C# and ASP.NET Core to build efficient and scalable web services.",
      "Structuring and managing relational databases with Entity Framework Core, ensuring data integrity and optimized query performance.",
      "Developing and securing RESTful APIs, implementing proper authentication and authorization standards for system protection.",
      "Integrating third-party services and middleware to extend application functionality and streamline background data processing.",
      "Collaborating with front-end developers to define API contracts and ensure seamless integration between client and server layers.",
      "Monitoring and debugging back-end performance issues, implementing logging and error handling to maintain system stability.",
    ],
  },

  {
    title: "Front-End Developer Intern",
    company_name: "DOT JORDAN",
    icon: ops, // Update with the appropriate icon reference
    iconBg: "#E6DEDD",
    date: "Oct 2024 - Feb 2025",
    points: [
      "Architected and developed backend systems to support AI-powered features, leveraging Python and Node.js frameworks.",
      "Integrated AI/ML models into the application workflow, enabling predictive analytics and intelligent automation.",
      "Designed and maintained WebSocket connections for real-time data exchange and low-latency communication.",
      "Deployed and managed scalable infrastructure on AWS, utilizing services such as EC2, Lambda, S3, RDS, and API Gateway to ensure high availability and performance.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export { services, technologies, projects, experiences };
