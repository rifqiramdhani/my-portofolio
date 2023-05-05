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
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    apud,
    codex,
    adeeva,
    bonli,
    coffeshop,
    himavoting,
    kingvoyage,
    studio66,
    tender,
    waroengrampoes,
    hotelrealta
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
        title: "Frontend Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "App Developer",
        icon: mobile,
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
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Full Stack Developer",
        company_name: "Asian Pasific Urban Designer",
        icon: apud,
        iconBg: "#fff",
        date: "Jan 2021 - Jan 2022",
        points: [
            "Developing and maintaining web applications using PHP and other related technologies.",
            "Redesign old website.",
            "Re-create the company profile along with the CMS page for members and admin.",
            "Create a registration form every time there is a recent event.",
        ],
    },
    {
        title: "Bootcamp Full Stack Node JS",
        company_name: "Code X Academy",
        icon: codex,
        iconBg: "black",
        date: "Dec 2022 - Mar 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
   
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rifqi proved me wrong.",
        name: "Setiawan",
        designation: "CRM",
        company: "PT Consment Jaya Teknindo",
        image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rifqi does.",
        name: "Gery",
        designation: "CEO",
        company: "Waroeng Rampoes",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rifqi optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Tasya",
        designation: "Student",
        company: "UNIKOM",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
        testimonial:
            "Don't hesitate to entrust you website to Rifqi, because he can do anything.",
        name: "Chika",
        designation: "Student",
        company: "UNIKOM",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
        testimonial:
            "Rifqi had helped me to create website for my thesist, he can do everything until I'm passed from my collage",
        name: "Saeful",
        designation: "Student",
        company: "UNIKOM",
        image: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
        testimonial:
            "I thought imposible to create beautifull and responsive website, but Rifqi can do it",
        name: "Ruyatsyah",
        designation: "Student",
        company: "UNIKOM",
        image: "https://randomuser.me/api/portraits/men/8.jpg",
    },
];

const projects = [
    {
        name: "Hotel Realta",
        description:
            "Web-based platform that allows users to search, book, and manage hotel  where customers can search for accommodations, view room availability, and make reservations",
        tags: [
            {
                name: "nextJS",
                color: "blue-text-gradient",
            },
            {
                name: "postgreSQL",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "orange-text-gradient",
            },
            {
                name: "nestJS",
                color: "pink-text-gradient",
            },
        ],
        image: hotelrealta,
        source_code_link: "https://github.com/RealtaHotelKelompok1/hotel_realta_v2",
    },
    {
        name: "Adeeva Tour",
        description:
            "A web-based application that enables users to book domestic travel packages and schedule their trips. Customers can book travel packages and schedule their trip departures using this platform. The website can handle both user and admin accounts.",
        tags: [
            {
                name: "PHP",
                color: "blue-text-gradient",
            },
            {
                name: "bootstrap",
                color: "green-text-gradient",
            },
            {
                name: "codeigniter",
                color: "pink-text-gradient",
            },
        ],
        image: adeeva,
        source_code_link: "#",
    },
    {
        name: "Bonli Cipta Sejahtera",
        description:
            "A web-based application that manages employees within a company. This application streamlines the recruitment process for new employees and assesses them using the best calculation methods. It provides the company with an efficient way to manage their employees.",
        tags: [
            {
                name: "php",
                color: "blue-text-gradient",
            },
            {
                name: "bootstrap",
                color: "green-text-gradient",
            },
            {
                name: "smtp",
                color: "pink-text-gradient",
            },
        ],
        image: bonli,
        source_code_link: "https://github.com/rifqiramdhani/recruitment",
    },
    {
        name: "Coffe Shop",
        description:
            "a website-based application with a premium design, created to increase sales of a small business.",
        tags: [
            {
                name: "php",
                color: "blue-text-gradient",
            },
            {
                name: "bootstrap",
                color: "green-text-gradient",
            },
        ],
        image: coffeshop,
        source_code_link: "#",
    },
];

export { services, technologies, experiences, testimonials, projects };