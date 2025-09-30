import { Metadata } from 'next'
import WorkExperience from '@/components/WorkExperience'
import { getWorkExperience } from '@/lib/contentful'

export const metadata: Metadata = {
  title: 'Work Experience - Taher Said',
  description: 'Professional work experience and career journey of Taher Said, Full Stack Developer.',
}

export default async function WorkPage() {
  const workExperience = await getWorkExperience();
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Work Experience</h1>
          <p className="text-lg text-gray-600">
            My professional journey and contributions to various projects
          </p>  
        </div>
        
        <WorkExperience workExperience={workExperience} />
      </div>
    </div>
  )  
}
