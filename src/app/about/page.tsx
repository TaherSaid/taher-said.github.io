import { Metadata } from 'next'
import Bio from '@/components/Bio'
import Education from '@/components/Education'
import Interests from '@/components/Interests'
import { getEducation } from '@/lib/contentful'

export const metadata: Metadata = {
  title: 'About - Taher Said',
  description: 'Learn more about Taher Said, a Full Stack Developer with expertise in React, Next.js, and AWS.',
}

export default async function AboutPage() {
  const education = await getEducation()
  // console.log("education => ", education);
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-gray-600">
            Get to know me better - my background, education, and what drives me
          </p>
        </div>
        <Bio />
        <Education education={education} />
        <Interests />
      </div>
    </div>
  )
}
