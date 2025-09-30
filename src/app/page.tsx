import Hero from '@/components/Hero'
import {AboutMe} from '@/components/AboutMe'
import Skills from '@/components/Skills'
import FeaturedProjects from '@/components/FeaturedProjects'
import ContactCTA from '@/components/ContactCTA'
import { getProjects, getSkills } from '@/lib/contentful'

export default async function Home() {
  const skills = await getSkills()
  const projects = await getProjects(3)
  
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutMe />
      <Skills skills={skills} />
      <FeaturedProjects projects={projects} />
      <ContactCTA />
    </div>
  )
}