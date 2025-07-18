import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  filmora,
  cloud,
  solid,
  cj,
  c,
  java,
  html,
  css,
  reactjs,
  datavisualization,
  ieee2025,
  aiyield,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  sheenedge,
  technojam,
  gtc,
  gssoc,
  python,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "AI Engineer",
    icon: mobile,
  },
  {
    title: "UI/UX Designer",
    icon: backend,
  },
  {
    title: "Freelancer",
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
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "C++",
    icon: cj,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Filmora",
    icon: filmora,
  },
  {
    name: "solidworks",
    icon: solid,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "cloud",
    icon: cloud,
  },
];

const experiences = 
[
  {
    title: "Open Source Developer",
    company_name: "GirlScript Summer of Code",
    icon: gssoc,
    iconBg: "#E6DEDD",
    date: "Oct 2024 - Nov 2024",
    points: [
      "Made first contributions to open source projects via GSSoC.",
      "Explored a variety of repositories and learned diverse coding practices.",
      "Engaged with experienced developers, gaining insights into scalable project structures.",
      "Enhanced teamwork and adaptability by working on community-driven projects."
    ],
  },
  {
    title: "Technical Team Member",
    company_name: "Galgotias Tech Council",
    icon: gtc,
    iconBg: "#383E56",
    date: "Oct 2024 - Nov 2024",
    points: [
      "Worked with the AI-ML group on real-time and generative AI projects.",
      "Participated in hackathons and workshops, pushing boundaries in machine learning.",
      "Collaborated with peers to brainstorm and execute innovative ideas.",
      "Strengthened understanding of data-driven decision making and AI pipelines."
    ],
  },
  {
    title: "Technical Team Member",
    company_name: "TechnoJam",
    icon: technojam,
    iconBg: "#E6DEDD",
    date: "Nov 2024 - Apr 2025",
    points: [
      "Engaged in club activities that fostered growth through hackathons, workshops, and tech meetups.",
      "Contributed to team projects, improving collaboration and version control practices.",
      "Explored multiple tech stacks, broadening understanding of modern development.",
      "Built strong connections and improved communication through active on-site involvement."
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "SheenEdge",
    icon: sheenedge,
    iconBg: "#383E56",
    date: "Feb 2025 - Jul 2025",
    points: [
      "Built responsive HTML email templates ensuring compatibility across major clients and devices.",
      "Started learning and applying React to create interactive UI components.",
      "Enhanced frontend problem-solving skills by debugging complex CSS & JS issues.",
      "Collaborated with a hybrid team, adapting to both remote and on-site workflows."
    ],
  },
]



const testimonials = [
  {
    testimonial:
      "Strongly typed JavaScript that boosts productivity, reduces runtime errors, and scales well in complex React apps.",
    name: "TypeScript",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    testimonial:
      "Powerful server-side rendering and static site generation for building production-grade React applications.",
    name: "Next.js",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    testimonial:
      "The go-to NoSQL database for modern web apps — fast, flexible, and perfect for scalable backend architecture.",
    name: "MongoDB",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    testimonial:
      "Production-ready motion library for React that adds smooth animations and delightful interactions effortlessly.",
    name: "Framer Motion",
    image: "https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png",
  },
  {
    testimonial:
      "Machine learning in the browser! Enables smart, AI-driven interfaces by bringing TensorFlow models to frontend.",
    name: "TensorFlow.js",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  {
    testimonial:
      "Enables lightweight, fast containerization and deployment. Essential for scalable and reproducible environments.",
    name: "Docker",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    testimonial:
      "Next-gen decentralized applications and smart contracts are powered by blockchain — the future of secure systems.",
    name: "Blockchain",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg", 
  },
];


const projects = [
  {
    name: "Data Visualization Project",
    description:
      "A dynamic web app for visualizing data through interactive bar, line, and scatter plots. Users can upload CSV/JSON files or enter data manually, with real-time updates, zoom/pan, and trend lines. Built using HTML, CSS, JavaScript, and frameworks like Tailwind and Chart.js, the app supports graph export (PNG/JPEG) and data export (CSV). Backend powered by Node.js or Python handles processing, graph generation, and optional database storage.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "chart.js",
        color: "green-text-gradient",
      },
    ],
    image: datavisualization, // Replace with actual import
    source_code_link: "https://github.com/tanmay019ai/Data-visualization-project.git",
  },
  {
    name: "IEEE-2025 Website",
    description:
      "A responsive frontend website built by Team PureIsh for the IEEE WebWars 2025 challenge. Developed using HTML, CSS, and JavaScript, the project focuses on clean UI, user experience, and interactivity. Deployed using GitHub, Vercel, and Netlify, it highlights strong teamwork, creative design, and efficient frontend development.",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "text-yellow-300",
      },
    ],
    image: ieee2025, // Replace with actual import
    source_code_link: "https://github.com/tanmay019ai/Webwars_PureIsh.git",
  },
  {
    name: "AI Crop Yield Predictor",
    description:
      "The AI Crop Yield Predictor combines the power of machine learning and user-friendly interfaces to provide actionable insights for farmers. By analyzing weather, soil data, and historical records, the platform predicts crop yields and offers tailored recommendations, promoting sustainable agricultural practices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "green-text-gradient",
      },
    ],
    image: aiyield, // Replace with actual import
    source_code_link: "https://github.com/tanmay019ai/AI-CROP-YIELD-PREDICTOR.git",
  }
];


export { services, technologies, experiences, testimonials, projects };