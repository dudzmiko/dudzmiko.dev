import { Icons } from '@/components/icons'

type Config = {
    name: string
    avatar: string
    title: string
    siteUrl: string
    socials: {
        name: string
        url: string
        icon: keyof typeof Icons
    }[]
    description: string | JSX.Element
    descriptionRaw: string
    projects: {
        name: string
        icon?: keyof typeof Icons
        image?: string
        description: string
        url: string
        tags: {
            name: string
            icon: keyof typeof Icons
        }[]
        github?: string
        featured: boolean
        testimonial?: string
    }[]
}

export const CONFIG: Config = {
    name: 'Mikołaj Dudzik',
    avatar: '/images/author.jpg',
    title: 'Software Developer',
    siteUrl: 'https://dudzmiko.dev/',
    socials: [
        {
            name: 'GitHub',
            url: 'https://github.com/dudzmiko',
            icon: 'github',
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/dudzmiko/',
            icon: 'linkedin',
        },
        {
            name: 'X',
            url: 'https://x.com/dudzmiko',
            icon: 'x',
        },
        {
            name: 'Instagram',
            url: 'https://instagram.com/dudzmiko',
            icon: 'instagram',
        },
        {
            name: 'dudzmiko@gmail.com',
            url: 'mailto:dudzmiko@gmail.com',
            icon: 'email',
        },
    ],
    description: (
        <>
            I am passionate about programming and electronics 💡<br />
            <br />
            Currently, I am working on the development of artificial intelligence and OCR models. I am also a full stack developer with experience in Django and Vue 🐍<br />
            <br />
            Outside of work, I repair electronics and create microcontroller-based devices ⚡
        </>
    ),
    descriptionRaw: `I am passionate about programming and electronics. Currently I am working on the development of artificial intelligence and OCR models. Also I am a full stack developer with Django and Vue. Outside of work, I repair electronics and create microcontroller-based devices.`,
    projects: [
        {
            name: 'QDataTransfer',
            description:
                'Transfering data between PyQt applications using sockets 🔀',
            url: 'https://github.com/dudzmiko/QDataTransfer/releases/',
            github: 'https://github.com/dudzmiko/QDataTransfer',
            tags: [
                { name: 'Python', icon: 'python' },
                { name: 'PyQt', icon: 'qt' },
            ],
            featured: true,
        },
        {
            name: 'GamPref',
            description:
                'Simple landing page for my friend 🛒',
            url: 'https://dudzmiko.github.io/GamPref/',
            github: 'https://github.com/dudzmiko/GamPref',
            tags: [
                { name: 'HTML', icon: 'html' },
                { name: 'CSS', icon: 'css' },
            ],
            featured: true,
        },
    ]
}
