import { Metadata } from 'next'
import ProjectsList from '@/components/ProjectsList'
import { getProjects } from '@/lib/contentful';

export const metadata: Metadata = {
  title: 'Projects - Taher Said',
  description: 'Explore the projects I\'ve worked on, from mobile apps to web platforms and innovative solutions.',
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="container py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-lg text-gray-600">
            A collection of projects I&apos;ve built and contributed to
          </p>
        </div>
        
        <ProjectsList projects={projects} />
      </div>
    </div>
  )
}
