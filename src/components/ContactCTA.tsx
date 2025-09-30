'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ContactCTA() {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            {`Let's Work Together`}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {`I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.`}
          </p>
          <Link 
            href="/contact" 
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Get In Touch</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
