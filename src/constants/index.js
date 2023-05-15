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
        name: "Coffee Shop",
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
    {
        name: "HMIF Vote",
        description:
            "This website application is designed to facilitate the process of selecting the chairman of an association in an educational institution or organization. With a verified account, voters can easily choose the desired candidate and the system will calculate the vote results automatically. This application is also equipped with voter and candidate data management features as well as tight data security. With these features, this website application can be an effective solution to facilitate the process of selecting association leaders quickly, easily, and transparently.",
        tags: [
            {
                name: "codeigniter",
                color: "blue-text-gradient",
            },
            {
                name: "bootstrap",
                color: "green-text-gradient",
            },
            {
                name: "mysql",
                color: "pink-text-gradient",
            },
        ],
        image: himavoting,
        source_code_link: "#",
    },
    {
        name: "Kingvoyage",
        description:
            "This car rental website application is designed to facilitate the process of renting a car online. In this application, users can choose the desired car, determine the pick-up time and location, and select a rental package that suits their needs. The application is also equipped with a secure and easy online payment feature. In addition, users can easily track the booking status and manage orders through the user dashboard. With these features, the car rental website application can be a practical and efficient solution for users who need a rental car quickly and easily.",
        tags: [
            {
                name: "codeigniter",
                color: "blue-text-gradient",
            },
            {
                name: "bootstrap",
                color: "green-text-gradient",
            },
            {
                name: "mysql",
                color: "pink-text-gradient",
            },
        ],
        image: kingvoyage,
        source_code_link: "#",
    },
    {
        name: "Studio66",
        description:
            "This website application features a premium design that is specifically designed to help increase sales for micro, small, and medium-sized enterprises (MSMEs). In this application, MSMEs can promote their products online with a professional and attractive display. Features such as e-commerce, ordering systems, and online payment can help facilitate the purchasing and selling process. Additionally, this application is equipped with analytical features to help MSMEs monitor their sales performance and results in real-time. With this website application, MSMEs can increase the visibility and attractiveness of their products in the digital market, thus increasing their sales and business growth.",
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
                name: "mysql",
                color: "pink-text-gradient",
            },
        ],
        image: studio66,
        source_code_link: "#",
    },
    {
        name: "PT Mulya Cipta",
        description:
            "This tender data processing website aims to provide up-to-date information and analysis on tenders taking place in a particular region or business sector. Through this website, users can access the latest tender data, including tender details, tender winners, and bid prices. In addition, the website is also equipped with data analysis features that can help users understand market trends and business needs in a sector. With accurate and up-to-date information provided by this website, users can make better and more effective business decisions.",
        tags: [
            {
                name: "codeigniter",
                color: "blue-text-gradient",
            },
            {
                name: "bootstrap",
                color: "green-text-gradient",
            },
            {
                name: "mysql",
                color: "pink-text-gradient",
            },
        ],
        image: tender,
        source_code_link: "#",
    },
    {
        name: "Waroeng Rampoes",
        description:
            "This cashier website is a web application designed to help facilitate the sales and payment processes in various types of businesses, ranging from small shops to large-scale businesses. In this application, users can manage inventory, easily calculate prices, and accept payments through various payment methods, such as credit cards, bank transfers, and others. Additionally, the application is also equipped with financial reporting features to help users easily and accurately monitor their finances. With this cashier website application, users can manage their businesses more efficiently and effectively.",
        tags: [
            {
                name: "codeigniter",
                color: "blue-text-gradient",
            },
            {
                name: "bootstrap",
                color: "green-text-gradient",
            },
            {
                name: "mysql",
                color: "pink-text-gradient",
            },
        ],
        image: waroengrampoes,
        source_code_link: "#",
    },
];

export { services, technologies, experiences, testimonials, projects };