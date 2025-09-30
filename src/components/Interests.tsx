'use client'

import { motion } from 'framer-motion'
import { Heart, Music, ChefHat } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'

const interestIcons = {
  'Playing Padel': Heart,
  'Listening to music': Music,
  'Cooking': ChefHat,
}

export default function Interests() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="card"
    >
      <h2 className="text-2xl font-bold mb-6">Interests & Hobbies</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {portfolioData.interests.map((interest, index) => {
          const Icon = interestIcons[interest as keyof typeof interestIcons] || Heart
          
          return (
            <motion.div
              key={interest}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <Icon className="h-12 w-12 text-gray-700 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">
                {interest}
              </h3>
            </motion.div>
          )
        })}
      </div>
    </motion.section>
  )
}
