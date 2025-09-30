'use client'

import { motion } from 'framer-motion'
import { Skill } from '@/lib/contentful'


export default function Skills({ skills }: { skills: Skill[] }) {

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
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Skills & Technologies</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I work with a wide range of technologies to build modern, scalable applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skillName.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
