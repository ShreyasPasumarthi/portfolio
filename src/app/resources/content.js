import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Shreyas',
    lastName:  'Pasumarthi',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Software Engineer',
    avatar:    '/images/profiletriton.jpg',
    location:  'US/Pacific',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['Python', 'Java', 'C++', 'SQL', 'Javascript', 'HTML', 'CSS', 'MATLAB', 'R', 'Scala']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/ShreyasPasumarthi',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/shreyaspasumarthi/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:shreyaspasumarthi@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Shreyas Pasumarthi: Software engineer and builder</>,
    subline: <>I'm Shreyas, a recent UC San Diego graduate, where I studied<br/> Mathematics-Computer Science. I use software engineering and machine learning to create impact.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: false,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Shreyas is a software engineer with a passion for building products. His work spans machine learning, autonomous systems, and software engineering.</>
    },
    work: {
        display: true,
        title: 'Work Experience',
        experiences: [
            {
                company: 'Autonomy Software Engineer Intern',
                timeframe: 'June 2024 - September 2024',
                role: 'NASA Jet Propulsion Laboratory',
                achievements: [
                    <>Created a Python and C++ version of a low-fidelity simulation platform of autonomy algorithms for multi-agent and single-agent robotics missions to asteroids, translating legacy MATLAB code and implementing autonomy algorithms.</>,
                    <>Wrote test plans, created automated CI/CD unit and integration test pipeline using PyTest and Jenkins, and containerized application with Docker on Linux and Kubernetes on AWS EKS to standardize performance</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/asteroid_muscat.png',
                        alt: 'Asteroid',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/muscat.jpg',
                        alt: 'Code Organization',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Software Engineer Intern',
                timeframe: 'June 2023 - September 2023',
                role: 'NASA Jet Propulsion Laboratory',
                achievements: [
                    <>Reduced biodiversity assessment time by 50% by developing a novel ML model using an RNN (LSTM) and CNN
                    for computer vision in SageMaker, predicting biodiversity from multi-modal satellite data with 91.2% accuracy</>,
                    <>Built a 64.2% faster distributed ETL pipeline to process satellite data with Amazon EMR using Hadoop and Spark</>,
                    <>Designed an interactive biodiversity web platform, creating a React and D3.js front-end, Amazon RDS MySQL
                    predictions database, and an optimized serverless REST API back-end with Flask and AWS Lambda, to provide
                    stakeholders improved and novel biodiversity insights, trend visualizations, and region-specific health scores</>,
                    <>Conducted A/B testing and customer interviews to refine features, achieving 95% user satisfaction</>,
                    <>Deployed containerized microservices with Docker on ECS and built a CI/CD pipeline with Jest and Jenkins</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    // {
                    //     src: '/images/projects/project-01/cover-01.jpg',
                    //     alt: 'Once UI Project',
                    //     width: 16,
                    //     height: 9
                    // }
                ]
            },
            {
                company: 'Data Automation Engineer Intern',
                timeframe: 'June 2023 - September 2023',
                role: 'NASA Jet Propulsion Laboratory',
                achievements: [
                    <>Reduced manual science data processing time for NASA’s OCO-3 instrument on the International Space Station by
                    53% by accessing downlink data in S3 buckets, log files, and RDS with SQL queries and writing Python scripts with
                    Pandas to automatically generate QA files, detect anomalies, and determine data sources for preprocessing</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    // {
                    //     src: '/images/projects/project-01/cover-01.jpg',
                    //     alt: 'Once UI Project',
                    //     width: 16,
                    //     height: 9
                    // }
                ]
            },
            {
                company: 'LLM Project Lead Intern',
                timeframe: 'June 2020 - August 2021',
                role: 'STEM-Away, Inc.',
                achievements: [
                    <>Increased user engagement with suggested posts by 30% on an open-source forum by creating a content
recommender system using the BERT model in HuggingFace with 87% user approval of suggested posts</>,
                    <>Served as project lead for team of 15 interns, creating Agile roadmaps, defining user personas, conducting A/B
testing and interviews to align features with user needs and verify results, and presenting progress to the C-Suite</>,
                    <>Scraped and parsed user data from forum using BeautifulSoup and used Hadoop to analyze and clean text data</>,
                    <>Used distillBERT to generate post embeddings and similarity scores and fine-tuned model for next-post prediction</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    // {
                    //     src: '/images/projects/project-01/cover-01.jpg',
                    //     alt: 'Once UI Project',
                    //     width: 16,
                    //     height: 9
                    // }
                ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Education',
        institutions: [
            {
                name: 'University of California, San Diego',
                description: <>B.S. in Mathematics-Computer Science '24</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Machine Learning',
                description: <>Training, testing, and finetuning models in TensorFlow and PyTorch</>,
                images: [
                    // {
                    //     src: '/images/projects/project-01/cover-02.jpg',
                    //     alt: 'Project image',
                    //     width: 16,
                    //     height: 9
                    // },
                    // {
                    //     src: '/images/projects/project-01/cover-03.jpg',
                    //     alt: 'Project image',
                    //     width: 16,
                    //     height: 9
                    // }
                ]
            },
            {
                title: 'Full-Stack Development',
                description: <>Building next gen apps with Next.js, Flask, and React</>,
                images: [
                    // {
                    //     src: '/images/projects/project-01/cover-04.jpg',
                    //     alt: 'Project image',
                    //     width: 16,
                    //     height: 9
                    // },
                ]
            },
            {
                title: 'Data Engineering',
                description: <>Developing data pipelines with Hadoop, Spark, MapReduce, and cloud services</>,
                images: [
                    // {
                    //     src: '/images/projects/project-01/cover-04.jpg',
                    //     alt: 'Project image',
                    //     width: 16,
                    //     height: 9
                    // },
                ]
            },
            {
                title: 'Cloud',
                description: <>Experienced with GCP, AWS, and Azure</>,
                images: [
                    // {
                    //     src: '/images/projects/project-01/cover-04.jpg',
                    //     alt: 'Project image',
                    //     width: 16,
                    //     height: 9
                    // },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Portfolio',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };