import {
  Code,
  ShoppingCart,
  BarChart,
  Database,
  Smartphone,
  Cloud,
  UserCheck,
  Github,
  Puzzle,
} from "lucide-react";

import html5 from "../../src/assets/tech/html.png";
import css3 from "../../src/assets/tech/css.png";
import javascript from "../../src/assets/tech/javascript.png";
import tailwind from "../../src/assets/tech/tailwind.png";
import reactjs from "../../src/assets/tech/reactjs.png";
import redux from "../../src/assets/tech/redux.png";
import formik from "../../src/assets/tech/formik-icon.png";
import material from "../../src/assets/tech/material-ui.png";
import scss from "../../src/assets/tech/scss.png";
import nodejs from "../../src/assets/tech/nodejs.png";
import expressjs from "../../src/assets/tech/expressjs.png";
import mongodb from "../../src/assets/tech/mongodb.png";
import mongoose from "../../src/assets/tech/mongoose.png";
import git from "../../src/assets/tech/git.png";
import githubicon from "../../src/assets/github.png";
import ec2 from "../../src/assets/tech/ec2.png";
import s3 from "../../src/assets/tech/Amazon-S3.png";
import nxtjs from "../assets/tech/next.png";
import wordpress from "../assets/tech/wordpress.png";

import vscode from "../../src/assets/tools/vscode.png";
import ChatGPT from "../../src/assets/tools/ChatGPT.png";
import chrome from "../../src/assets/tools/chrome.png";
import mongodbCompass from "../../src/assets/tools/mongodbCompass.png";
import postman from "../../src/assets/tools/postman.png";
import webstorm from "../../src/assets/tools/webstorm.512x512.png";

import frontend from "../../src/assets/frontend.png";
import design from "../../src/assets/design.png";
import backend from "../../src/assets/backend.png";

import mernShop from "../assets/portfolio/mernshop.png";
import rabbilclone from "../assets/portfolio/lms.jpg";
import portfolio from "../../src/assets/portfolio/portfolio.png";

const navLinks = [
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
    title: "MERN Stack Development",
    icon: <Code className="h-8 w-8 text-white" />, // Code icon for MERN Stack
  },
  {
    title: "E-commerce Website Development",
    icon: <ShoppingCart className="h-8 w-8 text-white" />, // Shopping Cart icon for E-commerce
  },
  {
    title: "Custom Admin Dashboards",
    icon: <BarChart className="h-8 w-8 text-white" />, // Bar chart icon for Admin Dashboards
  },
  {
    title: "API Development & Integration",
    icon: <Database className="h-8 w-8 text-white" />, // Database icon for API Integration
  },

  {
    title: "Responsive Web Design",
    icon: <Smartphone className="h-8 w-8 text-white" />, // Smartphone icon for Responsive Design
  },
  {
    title: "Cloud Hosting & Deployment",
    icon: <Cloud className="h-8 w-8 text-white" />, // Cloud icon for Hosting
  },
  {
    title: "Authentication & Authorization",
    icon: <UserCheck className="h-8 w-8 text-white" />, // User Check icon for Authentication
  },
  {
    title: "GitHub Integrations",
    icon: <Github className="h-8 w-8 text-white" />, // GitHub icon for integrations
  },
  {
    title: "Personalized Web Solutions", // Updated service
    icon: <Puzzle className="h-8 w-8 text-white" />, // Puzzle icon for Personalized Web Solutions
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html5,
  },
  {
    name: "CSS 3",
    icon: css3,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: nxtjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Wordpress",
    icon: wordpress,
  },
  {
    name: "Formik",
    icon: formik,
  },
  {
    name: "Matirial UI",
    icon: material,
  },

  {
    name: "Scss",
    icon: scss,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: expressjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Mongoose",
    icon: mongoose,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: githubicon,
  },
  {
    name: "EC2",
    icon: ec2,
  },
  {
    name: "S3",
    icon: s3,
  },
];

const tools = [
  {
    name: "VS Code",
    icon: vscode,
  },
  {
    name: "WebStorm",
    icon: webstorm,
  },
  {
    name: "ChatGPT",
    icon: ChatGPT,
  },
  {
    name: "Chrome",
    icon: chrome,
  },
  {
    name: "Mongodb Compass",
    icon: mongodbCompass,
  },
  {
    name: "Postman",
    icon: postman,
  },
];

const experiences = [
  {
    title: "Frontend Development",
    company_name: "React.js, Zustand, Axios",
    icon: frontend,
    iconBg: "#383E56",
    date: "",
    points: [
      "Advanced skills in React.js for building dynamic web applications.",
      "Expertise in Redux for efficient state management.",
      "Experience with Formik and Yup for seamless form handling and validation.",
      "Applied Flux architecture to enhance data flow and maintainability.",
      "Implemented advanced architectural patterns for scalable applications.",
      "These are just a few of the many libraries",
    ],
  },
  {
    title: "UI Designing",
    company_name: "Material UI, Framer motion, Tailwind CSS, SCSS",
    icon: design,
    iconBg: "white",
    date: "",
    points: [
      "Proficient in Material UI for creating modern and responsive user interfaces.",
      "Expertise in Framer Motion for crafting smooth and interactive animations.",
      "Skillful use of Tailwind CSS to streamline and enhance UI styling.",
      "Leveraged SCSS to seamlessly integrate Tailwind CSS utility classes, optimizing code and enabling custom class creation when required.",
      "Ability to create responsive layouts for diverse screen sizes and devices.",
      "Prioritizing user experience and usability in UI design projects.",
    ],
  },
  {
    title: "Backend Development",
    company_name: "Node js, Express js, Mongoose, S3",
    icon: backend,
    iconBg: "#383E56",
    date: "",
    points: [
      "Proficient in Node.js for building robust and scalable server-side applications.",
      "Strong command of Express.js for creating RESTful APIs and routing.",
      "Experience in using MongoDB and Mongoose, including the strategic use of indexing, for efficient data modeling, storage, and retrieval.",
      "Strategies for optimizing application performance and scalability.",
      "Integration of AWS S3 for secure and scalable file storage and retrieval",
      "Skillful use of Postman for API testing, validation, and documentation",
      "Familiarity with the Model-View-Controller (MVC) pattern for structured and maintainable code",
      "Application of Clean Architecture principles for modular and testable codebases",
      "Implementation of security measures, including authorization, and authentication mechanisms to protect data.",
      "Expertise in error handling, debugging, and performance optimization.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Jakaria delivered exactly what we needed — a clean, modern website with flawless responsiveness. His ability to understand our requirements and turn them into pixel-perfect design is impressive.",
    name: "Sarah M.",
    designation: "Startup Founder",
    company: "",
    image: "",
  },
  {
    testimonial:
      "Super professional and easy to work with. Jakaria built our dashboard using React and MUI, and it turned out fast, sleek, and highly user-friendly. Highly recommended!",
    name: "Alex K.",
    designation: "Product Manager",
    company: "",
    image: "",
  },
  {
    testimonial:
      "We hired Jakaria for a custom eCommerce build. From setting up the MERN stack to deploying it on AWS, everything was handled smoothly. His communication was top-notch throughout the project.",
    name: "Ahmed R.",
    designation: "CEO",
    company: "",
    image: "",
  },
  {
    testimonial:
      "Jakaria’s attention to detail and problem-solving skills are rare to find. He took full ownership of the project and went above and beyond to deliver on time.",
    name: "Emily L.",
    designation: "Creative Director",
    company: "",
    image: "",
  },
  {
    testimonial:
      "From UI/UX to backend logic, Jakaria knows how to build complete applications. He even helped us with performance tuning and best practices. We’ll definitely work with him again!",
    name: "Jason T.",
    designation: "CTO",
    company: "",
    image: "",
  },
];

const projects = [
  {
    name: "MERN Stack eCommerce Platform",
    description:
      "A fully functional, modern eCommerce platform built using the MERN stack, providing a seamless shopping experience and robust admin tools.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
    ],
    image: mernShop,
    alt: "E-Commerce",
    source_code_link: "https://github.com/jakariait/MERN_Ecommerce",
    live_link: "https://mern-ecommerce-chi-seven.vercel.app/",
  },
  {
    name: "Online Course Selling Platform – MERN Stack Project",
    description:
      "A fully functional online course platform built with the MERN stack. Users can browse, purchase, and access video courses, while admins manage content and users.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: rabbilclone,
    alt: "Pro Connect Up",

    source_code_link: "https://github.com/jakariait/Rabbil.com_Clone",
    live_link: "https://rabbil-com-clone.vercel.app/",
  },
  {
    name: "My Portfolio",
    description:
      "My portfolio features a collection of projects that reflect my commitment to delivering top-tier web solutions. I take pride in developing user-friendly and efficient applications.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    alt: "Portfolio",
    source_code_link: "https://github.com/jakariait/portfolio",
    live_link: "https://portfolio-jakariaits-projects.vercel.app/",
  }
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  tools,
};
