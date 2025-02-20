import {
    AcademicCapIcon,
    ArrowDownTrayIcon,
    BuildingOffice2Icon,
    CalendarIcon,
    FlagIcon,
    MapIcon,
    SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';

import bg4 from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
    About,
    ContactSection,
    ContactType,
    Hero,
    HomepageMeta,
    PortfolioItem,
    SkillGroup,
    Social,
    TestimonialSection,
    TimelineItem,
} from './dataDef';
import * as https from 'https';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
    title: `Alexa B's Resume`,
    description: `Alexa Bienkowski's personal resume website.`,
};

/**
 * Section definition
 */
export const SectionId = {
    Hero: 'hero',
    About: 'about',
    Contact: 'contact',
    Portfolio: 'portfolio',
    Resume: 'resume',
    Skills: 'skills',
    Stats: 'stats',
    Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
    imageSrc: bg4,
    //href: 'https://images4.alphacoders.com/853/thumb-1920-853192.jpg',
    name: `I'm Alexa Bienkowski.`,
    description: (
        <>
            <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
                I'm a Connecticut based <strong className="text-stone-100">Frontend Engineer</strong> who turns <strong>caffeine</strong> into <strong>code</strong>.
                {/*helping build a modern, mobile-first, domain*/}
                {/*registrar and site builder.*/}
            </p>
            <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
                In my free time time, you can catch me working with <strong className="text-stone-100">reptiles</strong>,
                training in <strong className="text-stone-100">kick-boxing</strong>, or drawing beautiful{''}
                <strong className="text-stone-100"> frogs</strong>.
            </p>
        </>
    ),
    actions: [
        {
            href: '/alexa.bienkowski.resume.pdf',
            text: 'Resume',
            primary: true,
            Icon: ArrowDownTrayIcon,
        },
        {
            href: `#${SectionId.Contact}`,
            text: 'Contact',
            primary: false,
        },
    ],
};

/**
 * About section
 */
export const aboutData: About = {
    profileImageSrc: profilepic,
    description: `I’m a friendly frontend developer with a passion for building clean, efficient solutions. I specialize in react and enjoy tackling challenges that require both logic and creativity. Whether it’s debugging code or collaborating on a team project, I’m at my best when solving problems and delivering results. Outside of work, I like to work on graphic design sketches. Let’s connect and create something meaningful!`,
    aboutItems: [
        { label: 'Location', text: 'Connecticut', Icon: MapIcon },
        { label: 'Age', text: '21', Icon: CalendarIcon },
        { label: 'Nationality', text: 'Russian American', Icon: FlagIcon },
        { label: 'Interests', text: 'Graphic Design, Kick-Boxing, Games', Icon: SparklesIcon },
        { label: 'Study', text: 'Computer Science', Icon: AcademicCapIcon },
        { label: 'Employment', text: 'HealthNest', Icon: BuildingOffice2Icon },
    ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
    {
        name: 'Frontend development',
        skills: [
            {
                name: 'React',
                level: 9,
            },
            {
                name: 'Typescript',
                level: 7,
            },
            {
                name: 'GraphQL',
                level: 6,
            },
        ],
    },
    {
        name: 'Kinds of Frogs I Draw',
        skills: [
            {
                name: 'Green Ones',
                level: 10,
            },
            {
                name: '',
                level: 0,
            },
            {
                name: '',
                level: 0,
            },
        ],
    },
    // {
    //     name: 'Backend development',
    //     skills: [
    //         {
    //             name: 'Node.js',
    //             level: 8,
    //         },
    //         {
    //             name: 'Rust',
    //             level: 5,
    //         },
    //         {
    //             name: 'Golang',
    //             level: 4,
    //         },
    //     ],
    // },
    // {
    //     name: 'Mobile development',
    //     skills: [
    //         {
    //             name: 'React Native',
    //             level: 9,
    //         },
    //         {
    //             name: 'Flutter',
    //             level: 4,
    //         },
    //         {
    //             name: 'Swift',
    //             level: 3,
    //         },
    //     ],
    // },
];
/*export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];*/

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
    {
        title: 'Project title 1',
        description: 'Give a short description of your project here.',
        url: 'https://reactresume.com',
        image: porfolioImage1,
    },
    {
        title: 'Project title 2',
        description: 'Give a short description of your project here.',
        url: 'https://reactresume.com',
        image: porfolioImage2,
    },
    {
        title: 'Project title 3',
        description: 'Give a short description of your project here.',
        url: 'https://reactresume.com',
        image: porfolioImage3,
    },
    {
        title: 'Project title 4',
        description: 'Give a short description of your project here.',
        url: 'https://reactresume.com',
        image: porfolioImage4,
    },
    {
        title: 'Project title 5',
        description: 'Give a short description of your project here.',
        url: 'https://reactresume.com',
        image: porfolioImage5,
    },
    {
        title: 'Project title 6',
        description: 'Give a short description of your project here.',
        url: 'https://reactresume.com',
        image: porfolioImage6,
    },
    {
        title: 'Project title 7',
        description: 'Give a short description of your project here.',
        url: 'https://reactresume.com',
        image: porfolioImage7,
    },
    {
        title: 'Project title 8',
        description: 'Give a short description of your project here.',
        url: 'https://reactresume.com',
        image: porfolioImage8,
    },
    {
        title: 'Project title 9',
        description: 'Give a short description of your project here.',
        url: 'https://reactresume.com',
        image: porfolioImage9,
    },
    {
        title: 'Project title 10',
        description: 'Give a short description of your project here.',
        url: 'https://reactresume.com',
        image: porfolioImage10,
    },
    {
        title: 'Project title 11',
        description: 'Give a short description of your project here.',
        url: 'https://reactresume.com',
        image: porfolioImage11,
    },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
    {
        date: 'Currently enrolled',
        location: 'Southern New Hampshire University',
        title: 'AS Computer Science',
        content: <p>Pursuing an Associate of Science in Computer Science from SNHU, I am developing a strong foundation in software development, programming languages, algorithms, and systems design. The flexible, online-oriented program emphasizes hands-on learning and real-world applications, equipping me with practical skills and comprehensive knowledge
            in the field.</p>,
    },
];

export const experience: TimelineItem[] = [
    {
        date: '2022 - 2023',
        location: 'Health Nest',
        title: 'Junior Frontend Developer',
        content: (
            <p>
                Worked closely with diverse teams to design and deliver essential features for a health-focused web application, playing a key role in frontend development and prioritizing smooth, user-friendly experiences. Experience with HIPAA compliance and single sign-on authentication.
            </p>
        ),
    },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
    imageSrc: testimonialImage,
    testimonials: [
         {
             name: 'John Stanovich',
             text: "Alexa's development work has been nothing short of stellar and has been integral to our company's success. Her positive attitude and enthusiasm have been a constant source of motivation, helping our team stay on track and inspired.",
             image: 'https://freerangestock.com/sample/120140/business-man-profile-vector.jpg',
         },
        {
            name: 'Mason Brooks',
            text: "Alexa consistently goes above and beyond, treating every task with the utmost effort and priority. Her dedication and commitment to excellence are truly commendable.",
            image: 'https://freerangestock.com/sample/120140/business-man-profile-vector.jpg',
        },
        {
            name: 'Borat',
            text: 'Very Nice!',
            image: 'https://media.tenor.com/0-2u8codjGcAAAAi/thumbs-up-borat.gif',
        },
    ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
    headerText: 'Get in touch.',
    description: 'I look forward to connecting with you soon.',
    items: [
        {
            type: ContactType.Email,
            text: 'alexa.bienkowski@gmail.com',
            href: 'alexa.bienkwski@gmsil.com',
        },
        {
            type: ContactType.Location,
            text: 'Connecticut',
            href: 'https://www.google.ca/maps/place/Connecticut/@41.4988442,-73.4168604,9z/data=!3m1!4b1!4m6!3m5!1s0x89e65311f21151a5:0xae9a6d5b056170e5!8m2!3d41.6032207!4d-73.087749!16zL20vMDF4NzM?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D',
        },
        {
            type: ContactType.Github,
            text: 'alexabienkowski',
            href: 'https://github.com/alexabienkowski',
        },
    ]
};

export const githubLink = { label: 'Github', Icon: GithubIcon, href: 'https://github.com/alexabienkowski/react-resume' };

