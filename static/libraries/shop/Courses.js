/* JSON data, but evaluated as a JS expression */
[
    {
        title: 'Foundations',
        subtitle: 'Web Design: Intro to HTML and CSS',
        course: 'prep',
        content: `Learn foundational skills while creating cool, useful
        websites from scratch.  Learn how to embed music, videos, maps,
        e-commerce stores, and more!`,
        skill: 1,
        img: 'computer-g0e7058b72_1280.jpg',
        imgalt: 'A computer with rainbow',
        imgfg: 'white',
        free: true,
        url: 'https://freecodinglessons.com/foundations/1.1/',
        modules: [
            { num: '1.1', title: 'HTML basics' },
            { num: '1.2', title: 'Tags and Styles' },
            { num: '1.3', title: 'Lab: Single Page Projects' },
            { num: '2.1', title: 'Multipage Sites' },
            { num: '2.2', title: 'Flex Layouts' },
            { num: '2.3', title: 'Lab: Multi-Page Projects' },
        ],
    },

    {
        title: 'Foundations',
        subtitle: 'Web Design: Components & Frameworks',
        course: 'prep',
        content: `
            Learn design trends, re-usable components, and how to use
            frameworks, such as Tailwind CSS. Finally, use Modulo.js to launch
            a JAMStack app on Netlify.
        `,
        skill: 1,
        img: 'hd-wallpaper-g721518917_1280.jpg',
        imgalt: 'Illustration of rainbow going through monitor',
        imgfg: 'white',
        free: true,
        url: 'https://freecodinglessons.com/foundations/3.1/',
        modules: [
            { num: '3.1', title: 'Tailwind' },
            { num: '3.2', title: 'Forms' },
            { num: '3.3', title: 'Lab: Forms and Frameworks'},
            { num: '4.1', title: 'Web Components' },
            { num: '4.2', title: 'Component Reuse' },
            { num: '4.3', title: 'Lab: JAMStack Apps' },
        ],
    },

    {
        course: 'prep',
        subtitle: 'Kickstart Prework',
        img: 'plans-gb63d02c1d_1280.jpg',
        content: `
            Get acquainted to coding on your personal computer or a provided
            Linux Lab account. Prep your computer, get familiar with tech
            terms, and learn markdown.
        `,
        skill: 1,
        modules: [
            { num: '1', title: 'Intro to Coding Bootcamps' },
            { num: '2', title: 'Linux, macOS, & online setup' },
            { num: '3', title: 'Terminology research' },
            { num: '4', title: 'Markdown and Fast Typing' },
            { num: '5', title: 'Skill Check: Dive into Coding' },
            { num: '6', title: 'Skill Check: Deeper with Coding' },
            { num: '7', title: 'Beyond Prework' },
        ],
    },

    {
        course: 'fundamentals',
        img: 'laptop-g4d7844033_1280.png',
        subtitle: 'Static Sites & Bootstrap',
        content: `Start peeling back the layers of the web in this whirlwind
        tour of HTML, CSS, Dev Tools, column-based layouts, responsive design
        and Bootstrap 5`,
        skill: 2,
        project: 'Static Profile Page',
        modules: [
            { num: '1.1', title: 'HTML', topics: [ 'HTML', 'tech stack', 'GitHub', 'Publishing', 'template editing' ] },
            { num: '1.2', title: 'CSS', topics: [ 'CSS', 'Dev tools', 'selectors', 'classes' ] },
            { num: '1.3', title: 'Bootstrap', topics: [ 'Bootstrap 5', 'column layouts', 'grid systems', 'responsive design', 'stylesheet linking'  ]  },
        ],

    },

    {
        course: 'fundamentals',
        img: 'apple-ga7d81315e_1280.png',
        subtitle: 'Automation: Bash, Git, and Python Scripts',
        content: `Learn how to use Git to keep your code safe under version control.
        Learn effective terminal use, and how to write Bash and Python scripts
        to replace tedious tasks.`,
        skill: 2,
        project: 'Simple automation of page assembly in Bash and Python',
        modules: [
            { num: '2.1', title: 'Bash', topics: [
              'bash', 'zsh', 'shell scripting', 'directory navigation',
              'redirection', 'piping', 'wildcards', 'ls', 'cd', 'mkdir',
              'touch', 'echo', 'cat' ]  },
            { num: '2.2', title: 'Git', topics: [
              'git', 'commits', 'remotes', 'branching',
              'merging', 'commit history', 'sharing with GitHub',
              'pull requests' ] },
            { num: '2.3', title: 'Python', topics: [
              'python', 'python scripting', 'variables', 'assignment operator',
              'reading files', 'writing files', 'combining files' ] },
        ],
    },

    {
        course: 'fundamentals',
        img: 'background-g8ee7d113b_1280.jpg',
        subtitle: 'Computer Programming with Python',
        project: 'Python-based static site generator, bonus assignment includes computer-vision powered OCR and face detection image gallery',
        content: `Begin a classic introduction to backend programming with
        Python, learning core data types and control-flow structures. Go deeper
        with OOP, Pipenv, and Jinja templating.`,
        skill: 2,
        modules: [
            { num: '3.1', title: 'Flow' },
            { num: '3.2', title: 'Functions' },
            { num: '3.3', title: 'Loops' },
            { num: '4.1', title: 'OOP' },
            { num: '4.2', title: 'Modules' },
            { num: '4.3', title: 'Templating' },
        ],
    },

    {
        course: 'backend',
        subtitle: 'Intro to Networking with Python',
        img: 'background-ged739cdbf_1280.jpg',
        imgfg: 'white',
        project: 'API-driven Dashboard',
        content: `Learn about the Internet, networking, and server-side
        programming. You will use web APIs, implement HTTP over TCP/IP, and
        finally basic request routing and web apps.`,
        skill: 3,
        modules: [
            { num: '1.1', title: 'Requests and APIs' },
            { num: '1.2', title: 'Servers, HTTP over TCP/IP, and Routing' },
            { num: '1.3', title: 'Web Apps and Deployment' },
        ],
    },

    {
        course: 'backend',
        subtitle: 'Practical Django',
        imgalt: 'Cube in a world of cubes',
        img: 'cubes-g21a82afce_1280.jpg',
        imgfg: 'white',
        project: 'Multi-user shareable DB-driven dashboard',
        content: `Learn the best practices from an experienced Django
        developer: MVC, CRUD, forms, urls, users, admin, models, data
        cardinality (eg Many-To-Many), unit testing, and much more.`,
        skill: 3,
        modules: [
            { num: '2.1', title: 'Django' },
            { num: '2.2', title: 'Forms' },
            { num: '2.3', title: 'Users' },
            { num: '3.1', title: 'CRUD' },
            { num: '3.2', title: 'Models' },
            { num: '3.3', title: 'Unit testing' },
        ],

    },

    {
        course: 'backend',
        img: 'server-g6892d162b_1280.jpg',
        imgfg: 'white',
        subtitle: 'Intro to Databases with Postgres SQL',
        content: `Learn SQL basics on a Postgres DB, before getting practice
        with JOINs, constraints, query analysis, indexes and optimization,
        full-text search, geo-spatial features, and more.`,
        skill: 3,
        modules: [
            { num: '4.1', title: 'Postgres SQL' },
            { num: '4.2', title: 'Joins and Indices' },
        ],
    },

    {
        course: 'frontend',
        imgfg: 'white',
        img: 'retro-g526726a00_1280.jpg',
        subtitle: 'JavaScript in the Modern Web',
        project: 'Data Viz SPA in pure CSS and vanilla JS',
        content: `Learn modern JavaScript, including let, const, iterators, and
        DOM manipulation. Explore tricky CSS concepts like animations and
        pseudo-elements.`,
        skill: 3,
        modules: [
            { num: '1.1', title: 'Box Model & BEM' },
            { num: '1.2', title: 'Grid & Animations' },
            { num: '1.3', title: 'Flexbox & JS Events' },
            { num: '2.1', title: 'Modern JavaScript' },
            { num: '2.2', title: 'DOM Manipulation' },
            { num: '2.3', title: 'API & Single Page Apps' },
        ],
    },

    {
        course: 'frontend',
        img: 'colorful-g427212bf2_1280.jpg',
        imgfg: 'white',
        subtitle: 'Thinking in React',
        project: 'Data Viz SPA in React JS',
        content: `In this hooks-based React course segment, you go beyond just
        learning the JSX syntax, and practice "thinking in React" with
        data-flow, lifting state, and more.`,
        skill: 4,
        modules: [
            { num: '3.1', title: 'React' },
            { num: '3.2', title: 'State' },
            { num: '3.3', title: 'Lifecycle' },
            { num: '4.1', title: 'Components' },
            { num: '4.2', title: 'Data-flow' },
            { num: '4.3', title: 'Patterns' },
        ],
    },

    {
        course: 'frontend',
        imgfg: 'white',
        img: 'wallpaper-gbaac742b2_1280.jpg',
        subtitle: 'Full Stack JS: MERN, Redux, and Routing',
        project: 'React Widget Library: Design, launch and release on NPM',
        content: `Take your React JS skills to the full stack by learning
        MongoDB, Express.JS, and Node.js. Learn Redux for state management, and
        Routing for multi-page apps.`,
        skill: 4,
        modules: [
            { num: '4.4', title: 'Full-stack' },
            { num: '5.1', title: 'Router' },
            { num: '5.2', title: 'Redux' },
            { num: '5.3', title: 'MERN' },
            { num: '5.4', title: 'Testing' },
        ],
    },

    {
        course: 'career',
        img: 'people-g923420017_1280.jpg',
        imgfg: 'white',
        subtitle: 'Kickstart Career',
        content: `Redo your resume, polish your profile, and hone your
        networking skills. Practice interviews and develop a "elevator pitch"
        to market yourself for your next job.`,
        skill: 3,
        modules: [
            { num: 'M1', title: 'Resume' },
            { num: 'M2', title: 'Narrative' },
            { num: 'M3', title: 'Communication' },
            { num: 'M4', title: 'Interviews' },
            { num: 'M5', title: 'Professionalism' },
        ],
    },

    {
        course: 'career',
        subtitle: 'Algorithms: Computer Science for Job Seekers',
        img: 'fractal-gdd9943fe4_1280.jpg',
        imgfg: 'white',
        content: `A CS course hyper-focused on whiteboard interviews. Learn
        time complexity analysis (BigO), sorting, solving problems in dynamic
        programming, recursion and async coding puzzles, and more.`,
        skill: 4,
        modules: [
            { num: '1.1', title: 'Algorithms for Job Seekers' },
            { num: '1.2', title: 'Recursion and Async' },
            { num: '1.3', title: 'Sorting Algorithms' },
            { num: '2.1', title: 'ADT - Abstract Data Types' },
            { num: '2.2', title: 'Computer Engineering & Data Structures' },
        ],
    },

    {
        course: 'career',
        img: 'drawing-g538254e05_1280.jpg',
        subtitle: 'Industry Capstone',
        content: `Use a 5-milestone process to build a software product from
        specs to launch. Learn how tech industry roles interlock, including
        agile Product Management and DevOps.`,
        project: 'A full-stack app using Python, JavaScript, and other technologies',
        skill: 4,
        modules: [
            { num: 'M1', title: 'Industry: Product Management & Agile' },
            { num: 'M2', title: 'Project Proposal' },
            { num: 'M3', title: 'Project Spec' },
            { num: 'M4', title: 'Project MVP' },
            { num: 'M5', title: 'Industry: DevOps & Server Topology' },
            { num: 'M6', title: 'Project Launch' },
            { num: 'M7', title: 'Project Presentation' },
        ],
    },
]



/*
 DEAD CODE
    {
        course: 'fundamentals',
        subtitle: 'Modular Python',
    },

    {
        title: 'Backend: Django and Postgres' ,
        time: '4-12 weeks',
        content: 'Web application programming with Python 3, Django, and Postgres SQL',
        updated: 'Updated for Django&nbsp;4+',
        description: [
            'Build a full-stack web application with Python / Django',
            'Round out your backend knowledge with PosgreSQL',
            'Implement a HTTP web server in Python',
        ],
    },

    {
        title: "Frontend: React and Mern",
        time: '5-15 weeks',
        content: 'Cutting-edge frontend web development with modern vanilla JavaScript and React.js JSX',
        updated: 'Updated for React.js Hooks and ES6+',
        description: [
            'Develop and launch a data visualization React charting component',
            'Modernized frontend with CSS grid and vanilla JS',
            'A crash course in MERN for full-stack JS Single Page Apps',
        ],
    },

    {
        title: "Algorithms: Computer Science for Job Seekers",
        time: '2-6 weeks',
        content: 'Tech career development and fundamentals of algorithms',
        description: [
            'Learn techniques on how to make your dream career in tech a reality',
            'Redo your resume, polish your online profile, and hone your networking skills',
            'Learn CS concepts and problem solving techniques to beat interviews',
        ],
    },

    {
        title: "Career Capstone",
        time: '2-6 weeks',
        content: 'Tech career development and fundamentals of algorithms',
        description: [
            'Learn techniques on how to make your dream career in tech a reality',
            'Redo your resume, polish your online profile, and hone your networking skills',
            'Learn CS concepts and problem solving techniques to beat interviews',
        ],
    },
        description: [
            'Great for both beginners, and pros looking to brush up',
            'Indulge your creative side! Create your own e-commerce store or business page.',
            'Learn to integrate with Etsy, Shopify, YouTube, Soundcloud, Bandcamp, Google Maps and others.',
            'Build band pages, artist profiles, personal pages, artistic blogs and personal writing spots.',
            'Learn HTML, CSS',
            'Learn how to use design principles to create designs from scratch',
        ],

        description: [
            'Great for both beginners, and pros looking to brush up',
            'Indulge your creative side! Create your own e-commerce store or business page.',
            'Learn to integrate with Etsy, Shopify, YouTube, Soundcloud, Bandcamp, Google Maps and others.',
            'Build band pages, artist profiles, personal pages, artistic blogs and personal writing spots.',
            'Learn HTML, CSS',
            'Learn how to use design principles to create designs from scratch',
        ],

{ num: '1.1', title: 'Intro to Coding Bootcamps' },
{ num: '1.2', title: 'Intro to Prework' },
{ num: '2.1', title: 'Online setup' },
{ num: '2.2', title: 'macOS setup' },
{ num: '2.3', title: 'Linux setup' },
{ num: '3.1', title: 'Terminology immersion' },
{ num: '3.2', title: 'Jargon research' },
{ num: '3.3', title: 'Tech news research' },
{ num: '3.4', title: 'Free software research' },
{ num: '4.1', title: 'Git and GitHub research' },
{ num: '4.2', title: 'Touch typing' },
{ num: '4.3', title: 'Markdown' },
{ num: '5.1', title: '(Optional) Dive into HTML' },
{ num: '5.2', title: '(Optional) Dive into Python' },
{ num: '6.1', title: '(Optional) Deeper with HTML' },
{ num: '6.2', title: '(Optional) Deeper with CSS' },
{ num: '6.3', title: '(Optional) Deeper with Python' },
{ num: '7.1', title: 'Learning with Kickstart Coding' },
{ num: '7.2', title: 'Additional Prework' },
*/

