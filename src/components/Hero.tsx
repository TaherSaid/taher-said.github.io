'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight, Github, Linkedin } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'

export default function Hero() {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hero-container text-center max-w-4xl mx-auto"
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-gray-600">TS</span>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-white rounded-full px-3 py-1 shadow-md border border-gray-200">
                <span className="text-sm font-medium text-gray-700">Taher Said</span>
              </div>
            </div>
          </motion.div>
          
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-8 text-gray-900 leading-tight"
          >
            Building digital <span className="font-bold">products, brands, and experience.</span>
          </motion.h1>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12"
          >
            <Link href="/projects" className="btn-primary inline-flex items-center space-x-2 relative">
              <span>Latest Shots</span>
              <ArrowUpRight className="h-4 w-4" />
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                3
              </div>
            </Link>
          </motion.div>
          
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center space-x-6"
          >
            <a
              href={portfolioData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
