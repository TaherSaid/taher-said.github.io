'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import RichTextRenderer from './RichTextRendrer'
import Image from 'next/image'


export default function FeaturedProjects({ projects }: { projects: any[] }) {
  console.log(projects)
  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on recently
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map(({id, fields}, index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <Image src={`https:${fields.coverImage.fields.file.url}`} alt={fields.name} width={500} height={200}  />
              </div>
              
              <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-900 transition-colors">
                {fields.name}
              </h3>
              
              {/* <p className="text-gray-600 mb-4"> */}
                <RichTextRenderer content={fields.description} animate={true} maxCharacters={100} />
              {/* </p> */}
              
              {fields.technologies && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {fields.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech.sys.id}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                    >
                      {tech.fields.name}
                    </span>
                  ))}
                  {fields.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                      +{fields.technologies.length - 3} more
                    </span>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/projects" className="btn-primary inline-flex items-center space-x-2">
            <span>View All Projects</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
