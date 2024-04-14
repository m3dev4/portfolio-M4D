import { meta, ibm, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    python,
    icondash,
    bank,
    ai,
    tshirt,
    meethub
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend"
    }
];

export const experiences  = [
    {
        title: "Front End",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: " 2020 - 2021",
        points: [
            "Apprentissage du développement web avec HTML, CSS, React, JavaScript.",
            "Découverte des systèmes de contrôle de version comme Git.", 
            "Initiation au design d'expérience utilisateur et d'interface utilisateur (UX/UI).",
            "Participation à des projets de groupe pour mettre en pratique les technologies web.",
            "Présentation des projets réalisés et échanges techniques avec les autres apprenants.",
        ],
    },
    {
        title: "Back End",
        company_name: "meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "2021 - 2023",
        points: [
            "Découverte du développement back-end avec Node.js.",
            "Apprentissage des bases de données relationnelles (SQL) et non-relationnelles (NoSQL).",
            "Initiation à la sécurisation des applications web côté serveur.",
            "Mise en place d'API RESTful pour la communication front-end et back-end.",
            "Participation à des projets intégrant un serveur back-end et une base de données.",
          
        ],
    },
    {
        title: "DevOps",
        company_name: "IBM",
        icon: ibm,
        iconBg: "#b7e4c7",
        date: "",
        points: [
            "Currently"
        ]
    },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/m3dev4',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/mouhamed-lo-287a06202/',
    }
];

export const projects = [
    {
        iconUrl: icondash,
        theme: 'btn-back-red',
        name: 'UI Dashboard',
        description: "Ce tableau de bord d'interface utilisateur moderne a été développé avec React, le dashboard présente une interface visuellement attrayante grâce à l'utilisation d'un framework CSS tiers comme Tailwind avec des thèmes personnalisés.",
        link: 'https://uidashboards.netlify.app',
    },
    {
        iconUrl: bank,
        theme: 'btn-back-green',
        name: 'HooBank',
        description: "Hoobank est une application bancaire moderne développée avec React qui propose une expérience utilisateur intuitive. L'interface graphique soignée utilise des animations fluides et des composants Material UI stylisés pour guider l'utilisateur dans ses tâches.",
        link: 'https://hoo-b.netlify.app',
    },
    {
        iconUrl: ai,
        theme: 'btn-back-blue',
        name: 'Full Stack Kortext',
        description: "Kortex est une application web moderne construite avec Next.js et l'utilisation avancée de TypeScript assure la stabilité du code et améliore la maintenance à long terme. La fonctionnalité phare de Kortex est l'intégration transparente de modèles de génération de langage naturel d'OpenAI pour proposer des contenus originaux à la demande. Le moteur de Kortex récupère intelligemment le contexte de la page pour alimenter le modèle textuel d'OpenAI. Qu'il s'agisse de compléter une biographie, générer un paragraphe ou proposer des intitulés accrocheurs.",
        link: 'https://kortex-ai-6kny.vercel.app/',
    },
    {
        iconUrl: tshirt,
        theme: 'btn-back-black',
        name: 'T-shirt Custom',
        description: 'Shirt Custom est une application web interactive permettant de personnaliser visuellement des t-shirts. Développée avec React, elle offre une interface dynamique basée sur des composants pour ajuster en temps réel la customisation.',
        link: 'https://shirt-custom.netlify.app/',
    },
    {
        iconUrl: meethub,
        theme: 'btn-back-yellow',
        name: 'Meet-Hub',
        description: 'MeetHub est une plateforme de vidéoconférence intuitive conçue pour réunir les gens du monde entier en ligne. Avec MeetHub, vous pouvez organiser des réunions professionnelles, des séminaires en ligne, des cours virtuels et des retrouvailles avec vos proches, le tout en quelques clics.',
        link: 'https://meet-hub-4eyg.vercel.app',
    }
];