'use client'

import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { Education as ContentfulEducation } from '@/lib/contentful'

export default function Education({education}: {education: ContentfulEducation[]}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="card"
    >
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <GraduationCap className="h-6 w-6 mr-2 text-gray-700" />
        Education
      </h2>
      
      <div className="space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="border-l-4 border-gray-700 pl-6"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-xl font-semibold text-gray-900">
                {edu.degree}
              </h3>
              <span className="text-sm text-gray-700 font-medium">
                {edu.period}
              </span>
            </div>
            
            <p className="text-gray-600 mb-1">
              {edu.institution}
            </p>
            
            {edu.specialization && (
              <p className="text-sm text-gray-500">
                Specialization: {edu.specialization}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
