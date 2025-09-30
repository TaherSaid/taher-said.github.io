'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="card"
    >
      <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
      
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="p-3 bg-gray-100 rounded-lg">
            <Mail className="h-6 w-6 text-gray-700" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="text-gray-700 hover:underline"
            >
              {portfolioData.contact.email}
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="p-3 bg-gray-100 rounded-lg">
            <Phone className="h-6 w-6 text-gray-700" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
            <a
              href={`tel:${portfolioData.contact.phone}`}
              className="text-gray-700 hover:underline"
            >
              {portfolioData.contact.phone}
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="p-3 bg-gray-100 rounded-lg">
            <MapPin className="h-6 w-6 text-gray-700" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
            <p className="text-gray-600">
              Lisbon, Portugal
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="p-3 bg-gray-100 rounded-lg">
            <Github className="h-6 w-6 text-gray-700" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">GitHub</h3>
            <a
              href={portfolioData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:underline"
            >
              github.com/TaherSaid
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="p-3 bg-gray-100 rounded-lg">
            <Linkedin className="h-6 w-6 text-gray-700" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">LinkedIn</h3>
            <a
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:underline"
            >
              linkedin.com/in/taher-said
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-3">Languages</h3>
        <div className="space-y-2">
          {Object.entries(portfolioData.languages).map(([language, level]) => (
            <div key={language} className="flex justify-between">
              <span className="text-gray-600">{language}</span>
              <span className="text-sm text-gray-700 font-medium">
                {level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
