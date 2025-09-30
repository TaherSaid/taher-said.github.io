import { Metadata } from 'next'

import { getProject, getProjects } from '@/lib/contentful'
import ProjectPost from '@/components/ProjectPost'
import ProjectNotFound from '@/components/ProjectNotFound'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  try {
    const projects = await getProjects()
    return projects.map((project) => ({
      slug: project.fields.slug || project.id,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  try {
    const decodedSlug = decodeURIComponent(params.slug);
    const response = await getProject(decodedSlug)
    
    if (!response || response.item.length === 0) {
      return {
        title: 'Project Not Found - Taher Said',
        description: 'The requested project could not be found.',
      }
    }

    const project = response.item[0]

    return {
      title: `${project.name} - Taher Said`,
      description: project.description || 'Project details and information.',
      openGraph: {
        title: project.name,
        description: project.description,
        type: 'website',
      },
    }
  } catch (error) {
    console.error('Error generating metadata:', error)
    return {
      title: 'Project Not Found - Taher Said',
      description: 'The requested project could not be found.',
    }
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  try {
    const decodedSlug = decodeURIComponent(params.slug);

    const response = await getProject(decodedSlug)
    
    if (!response || response.item === undefined ) {
      return <ProjectNotFound projectId={decodedSlug} />
    }



    return <ProjectPost project={response} />
  } catch (error) {
    console.error('Error fetching project:', error)
    return <ProjectNotFound error="Something went wrong while loading the project." projectId={params.slug} />
  }
}
