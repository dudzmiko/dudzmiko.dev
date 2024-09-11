import { ModeToggle } from '@/components/mode-toggle'
import Project from '@/components/project'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { CONFIG } from '@/config'
import Link from 'next/link'

import {useTranslations} from 'next-intl';

export const metadata = {
    title: 'Projects',
}

const Projects = () => {
    const t = useTranslations('common');
    return (
        <div>
            <div className='flex animate-slide-from-down-and-fade-1 items-start justify-between'>
                <Breadcrumb className='mb-4 px-4'>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href='/'>{t('navbar.home')}</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>{t('navbar.projects')}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className='px-4'>
                    <ModeToggle />
                </div>
            </div>
            <h1 className='animate-slide-from-down-and-fade-2 scroll-m-20 px-4 text-4xl font-bold tracking-tight'>
                {t('projects.title')}
            </h1>
            <div className='animate-slide-from-down-and-fade-3 space-y-3 pt-12'>
                {CONFIG.projects.map((project, idx) => (
                    <Project
                        key={idx}
                        name={project.name}
                        icon={project.icon}
                        description={project.description}
                        image={project.image}
                        url={project.url}
                        tags={project.tags}
                        testimonial={project.testimonial}
                        github={project.github}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects
