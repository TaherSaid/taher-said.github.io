'use client'

import { motion } from 'framer-motion'

export default function Bio() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="card"
    >
      <h2 className="text-2xl font-bold mb-6">About Me</h2>
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg leading-relaxed mb-6">
         {`I'm a passionate Full Stack Developer with over 3 years of experience building modern web applications. 
          I specialize in React, Next.js, and Node.js, with a strong focus on creating scalable, user-friendly solutions.`}
        </p>
        <p className="text-lg leading-relaxed mb-6">
          {`Currently pursuing my Master's degree in Information Management System with a specialization in Business Intelligence 
          at NOVA IMS Information Management School of Lisbon, I'm constantly expanding my knowledge and skills to stay 
          at the forefront of technology.`}
        </p>
        <p className="text-lg leading-relaxed">
         {`I believe in writing clean, maintainable code and creating exceptional user experiences. 
          When I'm not coding, you can find me playing Padel, listening to music, or experimenting in the kitchen.`}
        </p>
      </div>
    </motion.section>
  )
}
