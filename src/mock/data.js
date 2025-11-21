import { BlogImg, ProjectImg } from "@/assets"

export const navbarData = [
    {
        title: "Home",
        url: 'hero'
    },
    {
        title: "About",
        url: 'about'
    },
    {
        title: "Skills",
        url: 'skills'
    },
    {
        title: "Projects",
        url: 'projects'
    },
    {
        title: "Experience",
        url: 'experience'
    },
    {
        title: "Blog",
        url: 'blog'
    },
    {
        title: "Contact",
        url: 'contact'
    },

]

// ---------------------------------------------------

export const techIconsHeroSection = [
    {
        icon: "skill-icons:react-dark",
        top: "0%",
        left: "50%",
        translate: "-50%, 0",
        delay: 5
    },
    {
        icon: "skill-icons:nodejs-dark",
        top: "25%",
        left: "0%",
        translate: "0, 0",
        delay: 0.8
    },
    {
        icon: "skill-icons:mongodb",
        bottom: "20%",
        left: "10%",
        translate: "0, 0",
        delay: 2
    },
    {
        icon: "skill-icons:javascript",
        top: "25%",
        right: "0%",
        translate: "0, 0",
        delay: 3
    },
    {
        icon: "skill-icons:tailwindcss-dark",
        bottom: "20%",
        right: "10%",
        translate: "0, 0",
        delay: 1
    },
    {
        icon: "skill-icons:git",
        bottom: "-5%",
        left: "50%",
        translate: "-50%, 0",
        delay: 0
    },
];

// ---------------------------------------------------

export const aboutMeBigCard = [
    {
        icon: "iconoir:calendar",
        heading: "1.5+",
        desc: "Years Experience",
        color: "#3b82f6"
    },
    {
        icon: "tabler:code",
        heading: "5+",
        desc: "Projects Completed",
        color: "#22c55e"
    },
    {
        icon: "mdi:people-outline",
        heading: "5+",
        desc: "Happy Client",
        color: "#a855f7"
    },
    {
        icon: "streamline:money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow",
        heading: "24/7",
        desc: "Support Available",
        color: "#f97316"
    },
]

// ---------------------------------------------------

export const aboutMeSmallCard = [
    {
        icon: "material-symbols:code-rounded",
        heading: "Clean Code",
        desc: "Maintainable & Scalable",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10"
    },
    {
        icon: "hugeicons:energy",
        heading: "Fast Delivery",
        desc: "On Time, Every Time",
        color: "text-green-500",
        bgColor: "bg-green-500/10 "
    },
    {
        icon: "weui:like-outlined",
        heading: "User Focused",
        desc: "Exceptional UX",
        color: "text-purple-500",
        bgColor: "bg-purple-500/10 "
    },
    {
        icon: "material-symbols:shield-outline-rounded",
        heading: "Secure",
        desc: "Industry Standards",
        color: "text-orange-500",
        bgColor: "bg-orange-500/10 "
    },
]

// ---------------------------------------------------


export const FeaturedSkillsData = [
    {
        title: "Frontend Development",
        data: [
            {
                icon: "ic:round-code",
                heading: "React.js",
                level: "Expert"
            },
            {
                icon: "jam:world",
                heading: "Next.js",
                level: "Advanced"
            },
            {
                icon: "iconoir:terminal",
                heading: "Typescript",
                level: "Advanced"
            },
            {
                icon: "solar:pallete-2-outline",
                heading: "Tailwind CSS",
                level: "Expert"
            },
            {
                icon: "ic:round-code",
                heading: "Javascript",
                level: "Expert"
            },
            {
                icon: "lucide:monitor",
                heading: "HTML5/CSS3",
                level: "Expert"
            },
        ]
    },
    {
        title: "Backend Development",
        data: [
            {
                icon: "mdi:server-outline",
                heading: "Node.js",
                level: "Advanced"
            },
            {
                icon: "hugeicons:zap",
                heading: "Express.js",
                level: "Advanced"
            },
            {
                icon: "jam:world",
                heading: "REST APIs",
                level: "Expert"
            },
            {
                icon: "flowbite:layers-solid",
                heading: "GraphQL",
                level: "Intermediate"
            },
            {
                icon: "hugeicons:zap",
                heading: "Socket.io",
                level: "Advanced"
            },
            {
                icon: "ic:outline-shield",
                heading: "JWT",
                level: "Intermediate"
            },
        ]
    },
    {
        title: "Database & Storage",
        data: [
            {
                icon: "solar:database-line-duotone",
                heading: "Mongo Db",
                level: "Advanced"
            },
            {
                icon: "solar:database-line-duotone",
                heading: "PostgreSQL",
                level: "Intermediate"
            },
            {
                icon: "solar:database-line-duotone",
                heading: "Redis",
                level: "Intermediate"
            },
            {
                icon: "solar:database-line-duotone",
                heading: "Mongoose",
                level: "Advanced"
            },
        ]
    },
    {
        title: "Tools & DevOps",
        data: [
            {
                icon: "mynaui:git-branch",
                heading: "GitHUB",
                level: "Advanced"
            },
            {
                icon: "material-symbols:cloud-outline",
                heading: "Docker",
                level: "Intermediate"
            },
            {
                icon: "material-symbols:cloud-outline",
                heading: "AWS",
                level: "Intermediate"
            },
            {
                icon: "humbleicons:rocket",
                heading: "Render",
                level: "Advanced"
            },
            {
                icon: "jam:world",
                heading: "Postman",
                level: "Advanced"
            },
            {
                icon: "ic:round-code",
                heading: "VS Code",
                level: "Expert"
            },
        ]
    }
]

// ---------------------------------------------------

export const SampleProjectsData = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "Full-stack MERN application with payment integration, inventory management, and admin dashboard.",
        image: ProjectImg,
        alt: "E-Commerce",
        tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
        github: "#",
        live: "#",
        category: "Full Stack",
        featured: true,
        keyFeatures: [
            "User Authentication & Authorization",
            "Shopping Cart & Wishlist",
            "Inventory Management",
            "Admin Dashboard",
            "Search & Filtering",
            "Real-time Updates",
            "Secure Payment Processing",
            "Order Tracking",
            "Product Reviews & Ratings",
            "Responsive Design"
        ],
        challengeSolutions: [
            {
                title: "Real-time Inventory Management",
                desc: "Implemented WebSocket connections to ensure inventory updates are reflected across all user sessions immediately, preventing overselling and maintaining data consistency."
            },
            {
                title: "Payment Security",
                desc: "Integrated Stripe's secure payment processing with proper error handling, webhook management, and PCI compliance to ensure safe transactions."
            },
            {
                title: "Performance Optimization",
                desc: "Optimized database queries, implemented proper indexing, and used Redis caching to handle high traffic loads efficiently."
            }
        ]
    },
    {
        id: 2,
        title: "Social Media Dashboard",
        description: "Real-time analytics dashboard for social media management with data visualization.",
        image: ProjectImg,
        alt: "Social Media Dashboard",
        tech: ["React", "D3.js", "Node.js", "PostgreSQL"],
        github: "#",
        live: "#",
        category: "Frontend",
        featured: true,
        keyFeatures: [
            "User Authentication & Authorization",
            "Shopping Cart & Wishlist",
            "Inventory Management",
            "Admin Dashboard",
            "Search & Filtering",
            "Real-time Updates",
            "Secure Payment Processing",
            "Order Tracking",
            "Product Reviews & Ratings",
            "Responsive Design"
        ],
        challengeSolutions: [
            {
                title: "Real-time Inventory Management",
                desc: "Implemented WebSocket connections to ensure inventory updates are reflected across all user sessions immediately, preventing overselling and maintaining data consistency."
            },
            {
                title: "Payment Security",
                desc: "Integrated Stripe's secure payment processing with proper error handling, webhook management, and PCI compliance to ensure safe transactions."
            },
            {
                title: "Performance Optimization",
                desc: "Optimized database queries, implemented proper indexing, and used Redis caching to handle high traffic loads efficiently."
            }
        ]
    },
    {
        id: 3,
        title: "Task Management App",
        description: "Collaborative project management tool with real-time updates and team collaboration.",
        image: ProjectImg,
        alt: "Task Management",
        tech: ["React", "Socket.io", "Express", "MongoDB"],
        github: "#",
        live: "#",
        category: "Full Stack",
        featured: false,
        keyFeatures: [
            "User Authentication & Authorization",
            "Shopping Cart & Wishlist",
            "Inventory Management",
            "Admin Dashboard",
            "Search & Filtering",
            "Real-time Updates",
            "Secure Payment Processing",
            "Order Tracking",
            "Product Reviews & Ratings",
            "Responsive Design"
        ],
        challengeSolutions: [
            {
                title: "Real-time Inventory Management",
                desc: "Implemented WebSocket connections to ensure inventory updates are reflected across all user sessions immediately, preventing overselling and maintaining data consistency."
            },
            {
                title: "Payment Security",
                desc: "Integrated Stripe's secure payment processing with proper error handling, webhook management, and PCI compliance to ensure safe transactions."
            },
            {
                title: "Performance Optimization",
                desc: "Optimized database queries, implemented proper indexing, and used Redis caching to handle high traffic loads efficiently."
            }
        ]
    },
    {
        id: 4,
        title: "Weather Forecast App",
        description: "Modern weather application with location-based forecasts and interactive maps.",
        image: ProjectImg,
        alt: "Weather Forecast",
        tech: ["React", "API Integration", "Tailwind CSS"],
        github: "#",
        live: "#",
        category: "Frontend",
        featured: false,
        keyFeatures: [
            "User Authentication & Authorization",
            "Shopping Cart & Wishlist",
            "Inventory Management",
            "Admin Dashboard",
            "Search & Filtering",
            "Real-time Updates",
            "Secure Payment Processing",
            "Order Tracking",
            "Product Reviews & Ratings",
            "Responsive Design"
        ],
        challengeSolutions: [
            {
                title: "Real-time Inventory Management",
                desc: "Implemented WebSocket connections to ensure inventory updates are reflected across all user sessions immediately, preventing overselling and maintaining data consistency."
            },
            {
                title: "Payment Security",
                desc: "Integrated Stripe's secure payment processing with proper error handling, webhook management, and PCI compliance to ensure safe transactions."
            },
            {
                title: "Performance Optimization",
                desc: "Optimized database queries, implemented proper indexing, and used Redis caching to handle high traffic loads efficiently."
            }
        ]
    },
    {
        id: 5,
        title: "Blog Platform",
        description: "Full-featured blogging platform with rich text editor and user authentication.",
        image: ProjectImg,
        alt: "Weather Forecast",
        tech: ["Next.js", "MongoDB", "JWT", "Tailwind CSS"],
        github: "#",
        live: "#",
        category: "Full Stack",
        featured: true,
        keyFeatures: [
            "User Authentication & Authorization",
            "Shopping Cart & Wishlist",
            "Inventory Management",
            "Admin Dashboard",
            "Search & Filtering",
            "Real-time Updates",
            "Secure Payment Processing",
            "Order Tracking",
            "Product Reviews & Ratings",
            "Responsive Design"
        ],
        challengeSolutions: [
            {
                title: "Real-time Inventory Management",
                desc: "Implemented WebSocket connections to ensure inventory updates are reflected across all user sessions immediately, preventing overselling and maintaining data consistency."
            },
            {
                title: "Payment Security",
                desc: "Integrated Stripe's secure payment processing with proper error handling, webhook management, and PCI compliance to ensure safe transactions."
            },
            {
                title: "Performance Optimization",
                desc: "Optimized database queries, implemented proper indexing, and used Redis caching to handle high traffic loads efficiently."
            }
        ]
    },
    {
        id: 6,
        title: "Portfolio Website",
        description: "Responsive portfolio website with modern animations and optimized performance.",
        image: ProjectImg,
        alt: "Weather Forecast",
        tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
        github: "#",
        live: "#",
        category: "Frontend",
        featured: false,
        keyFeatures: [
            "User Authentication & Authorization",
            "Shopping Cart & Wishlist",
            "Inventory Management",
            "Admin Dashboard",
            "Search & Filtering",
            "Real-time Updates",
            "Secure Payment Processing",
            "Order Tracking",
            "Product Reviews & Ratings",
            "Responsive Design"
        ],
        challengeSolutions: [
            {
                title: "Real-time Inventory Management",
                desc: "Implemented WebSocket connections to ensure inventory updates are reflected across all user sessions immediately, preventing overselling and maintaining data consistency."
            },
            {
                title: "Payment Security",
                desc: "Integrated Stripe's secure payment processing with proper error handling, webhook management, and PCI compliance to ensure safe transactions."
            },
            {
                title: "Performance Optimization",
                desc: "Optimized database queries, implemented proper indexing, and used Redis caching to handle high traffic loads efficiently."
            }
        ]
    }

]

// ---------------------------------------------------

export const workExpSection = [
    {
        designation: "Senior Full Stack Developer",
        startYear: "2020",
        endYear: "2022",
        companyName: "TechCorp Solutions",
        desc: "Led development of multiple high-scale web applications using MERN stack. Mentored junior developers and implemented best practices for code quality and performance.",
        keyAchievements: [
            "Increased application performance by 40%",
            "Led team of 5 developers",
            "Delivered 8+ major projects"
        ],
        skillsFromExp: [
            "React", "Node.js", "MongoDB", "Team Leadership"
        ]
    },
    {
        designation: "Full Stack Developer",
        startYear: "2021",
        endYear: "2022",
        companyName: "Digital Innovations",
        desc: "Developed and maintained client-facing web applications. Collaborated with design teams to implement responsive UI/UX solutions and optimized application performance.",
        keyAchievements: [
            "Built 12+ responsive web applications",
            "Reduced load times by 35%",
            "Implemented CI/CD pipelines"
        ],
        skillsFromExp: [
            "Javascript", "Express.js", "PostgreSQL", "API Development"
        ]
    },
    {
        designation: "Frontend Developer",
        startYear: "2020",
        endYear: "2021",
        companyName: "StartupHub",
        desc: "Built responsive web interfaces and interactive user experiences. Worked closely with backend teams to integrate APIs and ensure seamless functionality.",
        keyAchievements: [
            "Created 15+ interactive UI components",
            "Improved user engagement by 50%",
            "Collaborated with 3+ cross-functional teams"
        ],
        skillsFromExp: [
            "React", "CSS3", "REST APIs", "Git"
        ]
    }
]

// ---------------------------------------------------

export const SampleBlogData = [
    {
        id: 1,
        img: BlogImg,
        alt: "BlogImg",
        uploadDate: "December 15, 2024",
        readTime: "8 min",
        title: "Building Scalable MERN Applications: Best Practices",
        desc: "Learn the essential patterns and practices for creating maintainable and scalable MERN stack applications.",
        category: "MERN",
        view: "4",
        like: "5",
        BlogAuthor: "Priyanshu Agrawal",
        tags: ["React", "Express", "Portfolio", "Learning", "Finance", "AI"],
        language: ["React", "Node", "Express", "Mongo", "Strapi"]
    },
    {
        id: 2,
        img: BlogImg,
        alt: "BlogImg",
        uploadDate: "December 15, 2024",
        readTime: "8 min",
        title: "Modern React Development: Hooks and Performance",
        desc: "Learn the essential patterns and practices for creating maintainable and scalable MERN stack applications.",
        category: "Frontend",
        view: "4",
        like: "5",
        BlogAuthor: "Priyanshu Agrawal",
        tags: ["React", "Express", "Portfolio", "Learning", "Finance", "AI"],
        language: ["React", "Node", "Express", "Mongo", "Strapi"]
    },
    {
        id: 3,
        img: BlogImg,
        alt: "BlogImg",
        uploadDate: "December 15, 2024",
        readTime: "8 min",
        title: "API Design Principles for Node.js Applications",
        desc: "Learn the essential patterns and practices for creating maintainable and scalable MERN stack applications.",
        category: "Backend",
        view: "4",
        like: "5",
        BlogAuthor: "Priyanshu Agrawal",
        tags: ["React", "Express", "Portfolio", "Learning", "Finance", "AI"],
        language: ["React", "Node", "Express", "Mongo", "Strapi"]
    }
]

// ---------------------------------------------------


