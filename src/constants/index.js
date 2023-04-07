import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    spring,
    nodejs,
    mongodb,
    git,
    aws,
    docker,
    meta,
    concordia,
    unigroup,
    shopify,
    weCare,
    play,
    tripguide,
    nextJs,
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
        title: "Full Stack Developer",
        icon: web,
    },
    {
        title: "React Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
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
        name: "Spring Boot",
        icon: spring,
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
        name: "Next JS",
        icon: nextJs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "aws",
        icon: aws,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    // {
    //     title: "Project",
    //     company_name: "Concordia University",
    //     icon: concordia,
    //     iconBg: "#E6DEDD",
    //     date: "Sep 2021 - Dec 2021",
    //     points: [
    //         "Created a web app using the Play Framework to help users grab information from Github quickly.",
    //         "CCollaborated with a team of 6 to design and implement a system that relies on asynchronous/reactive programming to handle real-time updates to otherwise static content.",
    //         "Optimized the system by Akka Actor to build correct concurrent and scalable applications.",
    //         "Created a comprehensive testing regime using JUnit to ensure bug-free code, achieved 87% test coverage.",
    //     ],
    // },
    {
        title: "Web Development Engineer Intern",
        company_name: "Tsinghua Uniudc",
        icon: unigroup,
        iconBg: "#E6DEDD",
        date: "Jun 2018 - Sep 2018",
        points: [
            "Developed Tsinghua Uniudc device marketplace web platform to presenting product information and accepting orders.",
            "Designed and developed microservice to support associates to uploading/editing product information with Node.js, Express.js, Typescript, TypeORM, Jest, Docker, Kubernetes, Grafana and Prometheus.",
            "Worked with Product Manager and designers to define usecases and ui/ux mocks ups of device marketplace web platform using Jira.",
            "Organized and facilitated project planning, daily stand-ups, reviews, retrospectives, sprint release planning, demos and other Scrum-related meetings.",
        ],
    },
    {
        title: "Research Assistant",
        company_name: "Concordia University",
        icon: concordia,
        iconBg: "#383E56",
        date: "July 2022 - Sep 2022",
        points: [
            "Designed and implemented an end-to-end plant recognition system to recognize plants automatically based on leaf structure using image processing.",
            "Built admin website to manage uploaded leaf images using React, React Router, Material UI, Next.js, Jest, Circle CI, AWS S3, Route 53",
            "Collaborated with a team of researchers to create an efficient, accurate, and user-friendly application.",
            "Participating in code reviews and providing constructive feedback to other developers.",
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

const projects = [
    {
        name: "We Care",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "redux",
                color: "green-text-gradient",
            },
            {
                name: "MUI",
                color: "pink-text-gradient",
            },
        ],
        image: weCare,
        source_code_link: "https://github.com/RuiWang98/medical-platform-frontend-",
    },
    {
        name: "Reactive Github Lytics",
        description:
            "A web app using the Play Framework to help users grab information from Github quickly which relies on asynchronous/reactive programming to handle real-time updates to otherwise static content.",
        tags: [
            {
                name: "Play",
                color: "blue-text-gradient",
            },
            {
                name: "Akka",
                color: "green-text-gradient",
            },
            {
                name: "JUnit",
                color: "pink-text-gradient",
            },
        ],
        image: play,
        source_code_link: "https://github.com/",
    },
    // {
    //     name: "Trip Guide",
    //     description:
    //         "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //     tags: [
    //         {
    //             name: "nextjs",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "supabase",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "css",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     image: tripguide,
    //     source_code_link: "https://github.com/",
    // },
];

export {services, technologies, experiences, testimonials, projects};