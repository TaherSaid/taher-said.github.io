'use client'

import { motion } from 'framer-motion'
import { Monitor, Smartphone, Palette, Code } from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: 'UX & UI',
    description: 'Designing interfaces that are intuitive, efficient, and enjoyable to use.',
  },
  {
    icon: Smartphone,
    title: 'Web & Mobile App',
    description: 'Transforming ideas into exceptional web and mobile app experiences.',
  },
  {
    icon: Palette,
    title: 'Design & Creative',
    description: 'Crafting visually stunning designs that connect with your audience.',
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Bringing your vision to life with the latest technology and design trends.',
  },
]

export default function Collaboration() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Collaborate with brands and agencies to create impactful results.
          </h2>
          <div className="inline-block bg-gray-100 rounded-full px-4 py-2">
            <span className="text-sm font-medium text-gray-700">Services</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="service-card text-center"
            >
              <div className="mb-4">
                <service.icon className="h-12 w-12 text-gray-700 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
