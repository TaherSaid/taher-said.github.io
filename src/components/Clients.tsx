'use client'

import { motion } from 'framer-motion'

const clients = [
  { name: 'National Bank', logo: '🏦' },
  { name: 'Mattered', logo: '⚡' },
  { name: 'Coca-Cola', logo: '🥤' },
  { name: 'Adobe', logo: '🎨' },
  { name: 'Subway', logo: '🥪' },
  { name: 'Codecademy', logo: '💻' },
]

export default function Clients() {
  return (
    <section className="py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="hero-container"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <span className="text-2xl">{client.logo}</span>
                <span className="font-medium text-lg">{client.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
