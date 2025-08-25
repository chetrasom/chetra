import { FiGithub, FiLinkedin, FiYoutube, FiTwitter } from 'react-icons/fi';
import { LiaTelegram } from "react-icons/lia";
import { FaHtml5, FaCss3, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiRedux, SiGithub, SiFigma, SiAdobephotoshop, SiVercel, SiPostman, SiJest } from "react-icons/si";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa"

export const linksData: NavLinks[] = [
    { path: '/', name: 'home' },
    { path: '/about', name: 'about' },
    { path: '/projects', name: 'projects' },
    { path: '/contact', name: 'contact' },
];

export const socialData: SocialType[] = [
    { path: 'https://github.com/chetrasom', icon: <FiGithub /> },
    { path: 'https://twitter.com/chetra_som', icon: <FiTwitter /> },
    { path: 'https://t.me/ChetraDeveloper', icon: <LiaTelegram /> },
    // { path: '/', icon: <FiLinkedin /> },
    // { path: '/', icon: <FiYoutube /> },
];


export const servicesData = [
    {
        num: "01",
        title: "Web Development",
        description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    },
    {
        num: "02",
        title: "UI/UX Design",
        description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    },
    {
        num: "03",
        title: "Logo Design",
        description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    },
    {
        num: "04",
        title: "SEO",
        description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    },
];

export const aboutData: AboutType = {
    title: "About me",
    description: `
    I am a passionate front-end developer. I am a dedicated and enthusiastic developer with a passion for coding and problem-solving. I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques.
    
    I am self-driven and hardworking. I am able to adapt very quickly, and I am also a team player who thrives on collaborating with cross-functional teams to produce outstanding web applications.
    `,
    info: [
        { fieldName: "Name", fieldValue: "Chetra SOM" },
        { fieldName: "Phone", fieldValue: "(+855) 93 90 38 94" },
        { fieldName: "Email", fieldValue: "chetrasom7@gmail.com" },
        { fieldName: "Nationality", fieldValue: "Cambodian" },
        { fieldName: "Telegram", fieldValue: "t.me/ChetraDeveloper" },
        { fieldName: "Languages", fieldValue: "Khmer, English" },
        { fieldName: "Experience", fieldValue: "Currently building personal projects and expanding skills as a front-end developer." },
        { fieldName: "Employment", fieldValue: "Open to opportunities (Freelance, Internship, Full-time)." },
    ]
};

export const experienceData = {
    icon: "/assets/resume/badge.svg",
    title: "My experience in Web Development",
    description: "Experience, Review a step-by-step guide plus useful templates to learn how to write an effective blog post for your target audience and customers.",
    items: [
        {
            company: "Tech Solution Inc.",
            position: "Full Stack Developer",
            duration: "2022 - Present",
        },
        {
            company: "Web Design Studio",
            position: "Front-End Developer",
            duration: "Summer 2021",
        },
        {
            company: "E-commerce Startup",
            position: "Freelance Web Developer",
            duration: "2020 - 2021",
        },
        {
            company: "Tech Academy",
            position: "Teaching Assistant",
            duration: "2019 - 2020",
        },
        {
            company: "Digital Agency",
            position: "UI/UX Designer",
            duration: "2018 - 2019",
        },
        {
            company: "Software Development Firm",
            position: "Junior Developer",
            duration: "2017 - 2018",
        },
    ],
}

export const educationData: EducationType = {
    // icon: "/assets/resume/cap.svg",
    // title: "My education",
    // description: "Education, Review a step-by-step guide plus useful templates to learn how to write an effective blog post for your target audience and customers.",
    // items: [
    //     {
    //         institute: "Online Course Platform",
    //         degree: "Full Stack Web Development Bootcamp",
    //         duration: "2023",
    //     },
    //     {
    //         institute: "Code academy",
    //         degree: "Front-end Track",
    //         duration: "2022",
    //     },
    //     {
    //         institute: "Online Course",
    //         degree: "Programming Course",
    //         duration: "2020 - 2021",
    //     },
    //     {
    //         institute: "Tech Institute",
    //         degree: "Certified Web Developer",
    //         duration: "2019",
    //     },
    //     {
    //         institute: "Design School",
    //         degree: "Diploma in Graphic Design",
    //         duration: "2016 - 2018",
    //     },
    //     {
    //         institute: "Community College",
    //         degree: "Associate Degree in Computer Science",
    //         duration: "2014 - 2016",
    //     },
    // ],

    icon: "/assets/resume/cap.svg",
    title: "My education",
    // description: "I have finished my undergraduate studies.",
    // description: "Completed undergraduate studies.",
    description: "Completed undergraduate studies. After completing my Bachelor’s in 2017, I returned to web development in 2025, focusing on modern front-end technologies and building hands-on projects.",
    items: [
        {
            institute: "SETEC Institute",
            degree: "Bachelor of MIS (Management Information System)",
            duration: "2014 - 2017",
        },
        // {
        //     institute: "Code academy",
        //     degree: "Front-end Track",
        //     duration: "2022",
        // },
        // {
        //     institute: "Online Course",
        //     degree: "Programming Course",
        //     duration: "2020 - 2021",
        // },
        // {
        //     institute: "Tech Institute",
        //     degree: "Certified Web Developer",
        //     duration: "2019",
        // },
        // {
        //     institute: "Design School",
        //     degree: "Diploma in Graphic Design",
        //     duration: "2016 - 2018",
        // },
        // {
        //     institute: "Community College",
        //     degree: "Associate Degree in Computer Science",
        //     duration: "2014 - 2016",
        // },
    ],
}

export const skillsData: SkillType = {
    title: "My skills",
    description: "Technologies and tools I’ve learned and use to build projects.",
    skillList: [
        // { icon: <FaHtml5 />, name: 'html5'},
        // { icon: <FaCss3 />, name: 'css3'},
        // { icon: <FaJs />, name: 'javascript'},
        // { icon: <FaReact />, name: 'reactjs'},
        // { icon: <SiNextdotjs />, name: 'nextjs'},
        // { icon: <SiTailwindcss />, name: 'tailwindcss'},
        // { icon: <FaGitAlt />, name: 'git'},
        
        // Core Web Technologies
        { icon: <FaHtml5 />, name: 'HTML5' },
        { icon: <FaCss3 />, name: 'CSS3' },
        { icon: <FaJs />, name: 'JavaScript' },

        // Frameworks & Libraries
        { icon: <FaReact />, name: 'ReactJS' },
        { icon: <SiNextdotjs />, name: 'Next.js' },
        { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
        { icon: <SiRedux />, name: 'Redux' },

        // Version Control & Tools
        { icon: <FaGitAlt />, name: 'Git' },
        { icon: <SiGithub />, name: 'GitHub' },

        // UI/UX & Design
        { icon: <SiFigma />, name: 'Figma' },
        { icon: <SiAdobephotoshop />, name: 'Photoshop' }, // optional if you do design work

        // Others (Optional but impressive)
        { icon: <SiVercel />, name: 'Vercel' },         // Deployment
        { icon: <SiPostman />, name: 'Postman' },       // API testing
        // { icon: <SiJest />, name: 'Jest' },             // Testing
    ],
}

export const projectsData = [
    {
        num: "01",
        category: "frontend",
        title: "Gym Fitness Tracker",
        description: "Gym Fitness Tracker Website is an online mode exercise website where anyone can learn all type of workout exercise like biceps, triceps, back, shoulders, abs, etc. There is no need of any Trainer to learn any workout exercise. In that website anyone can learn with the help of gif in which it shows that how to do exercise with correct position. If anyone click on gif it renders to you with similar equipment exercises and some related youtube videos link to learn easily.",
        stack: [
            { name: "React.js" },
            { name: "Tailwind CSS" },
            { name: "React Router" },
            { name: "Rapid API" },
        ],
        image: "/assets/images/gym-cover.png",
        live: "https://gym-fitness-tracker.vercel.app/",
        github: "https://github.com/chetrasom/gym-fitness-tracker.git",
        type: 'react-js'
    },
    {
        num: "02",
        category: "frontend",
        title: "Buzz News",
        description: "Buzz News is a website that provides users with the latest news from around the world. The app utilizes the NewsAPI to gather news articles. This app allows users to read the latest news articles from many popular website sources.",
        stack: [
            { name: "React.js" },
            { name: "Tailwind CSS" },
            { name: "React Router" },
            { name: "Contentful Headless CMS" },
        ],
        image: "/assets/images/news-cover.png",
        live: "https://buzz-news.vercel.app/",
        github: "https://github.com/chetrasom/buzz-news.git",
        type: 'react-js'
    },
    {
        num: "03",
        category: "frontend",
        title: "IP Movies",
        description: "IP Movies is a dynamic platform that utilizes the TMDB API to fetch and display detailed information about movies and TV shows. This application provides users with an engaging interface to explore and discover their favorite films and television series. Users can search for specific movies or TV shows using the search filters, enabling them to find content based on criteria such as title, release date and ratings. One of the standout features of the application is the ability to play trailers. Users can watch trailers of movies and TV shows directly within the application.",
        stack: [
            { name: "React.js" },
            { name: "Tailwind CSS" },
            { name: "React Router" },
            { name: "Redux Toolkit" },
            { name: "TMDB API" },
        ],
        image: "/assets/images/ipmovie-cover.png",
        live: "https://ipmovies.vercel.app/",
        github: "https://github.com/chetrasom/ipmovies.git",
        type: 'react-js'
    },
    {
        num: "04",
        category: "frontend",
        title: "Beaux Store",
        description: `Beaux Store aims to bring the online cosmetics business in Cambodia to the next level of professionalism and responsibilities. That is why it’s well known throughout the country for its professional leadership and warm-hearted customer service provided by its dealers all around the country. In addition, all BEAUX’s customers could get high-quality products conveniently by buying via an online platform.`,
        stack: [
            { name: "React.js" },
            { name: "Tailwind CSS" },
            { name: "React Router" },
            { name: "Redux Toolkit" },
            { name: "Strapi Headless CMS" },
        ],
        image: "/assets/images/beaux-cover.png",
        live: "https://beaux-store.vercel.app/",
        github: "https://github.com/chetrasom/beaux-store.git",
        type: 'react-js'
    },
    // # NextJS
    {
        num: "05",
        category: "Frontend Developer",
        title: "Chetra Coffee",
        description: "Welcome to the Chetra Coffee Shop eCommerce website! This is a fully functional, modern, and responsive coffee shop website that allows customers to browse and purchase a wide variety of coffee products. Built using modern web technologies, it provides a seamless shopping experience.",
        stack: [
            { name: "Next.js" },
            { name: "React.js" },
            { name: "TypeScript" },
            { name: "TailwindCSS & Shadcn-UI" },
            { name: "Prisma" },
            { name: "Supabase" },
            { name: "Clerk" },
        ],
        image: "/assets/images/coffee-cover.png",
        live: "https://chetracoffee-shop.vercel.app/",
        github: "https://github.com/chetrasom/chetra-coffee-shop.git",
        type: 'next-js'
    },
    {
        num: "06",
        category: "Frontend Developer",
        title: "Jobify",
        description: "A modern Job Management Dashboard with a public landing page and protected dashboard. Built with Next.js, Prisma, and Supabase for seamless job tracking and management.",
        stack: [
            { name: "Next.js" },
            { name: "React.js" },
            { name: "TypeScript" },
            { name: "TailwindCSS & Shadcn-UI" },
            { name: "Prisma" },
            { name: "Supabase" },
            { name: "Clerk" },
        ],
        image: "/assets/images/jobify-cover.png",
        live: "https://jobify-dashboard.vercel.app/",
        github: "https://github.com/chetrasom/jobify-dashboard.git",
        type: 'next-js'
    },
];

export const contactData: ContactType = [
    {
        icon: <FaEnvelope />,
        title: 'email',
        description: 'chetrasom7@gmail.com',
        path: '/contact'
    },
    {
        icon: <FaPhoneAlt />,
        title: 'phone',
        description: '(+855) 93 90 38 94',
        path: '/contact'
    },
    {
        icon: <LiaTelegram />,
        title: 'telegram',
        description: 't.me/ChetraDeveloper',
        path: 'https://t.me/ChetraDeveloper'
    },
    {
        icon: <FiGithub />,
        title: 'github',
        description: 'chetrasom',
        path: 'https://github.com/chetrasom'
    },
    // {
    //     icon: <FaMapMarkedAlt />,
    //     title: 'address',
    //     description: `Street 271, Sangkat Boeng Salang, Khan Toulkork, Phnom Penh`,
    //     path: '/contact'
    // },
];