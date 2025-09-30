'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Home, Search, AlertCircle, RefreshCw } from 'lucide-react'

interface ProjectNotFoundProps {
  error?: string
  projectId?: string
}

export default function ProjectNotFound({ error, projectId }: ProjectNotFoundProps) {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link 
            href="/projects"
            className="inline-flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Projects</span>
          </Link>
        </motion.div>

        {/* Main Error Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card text-center"
        >
          {/* Error Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-6 w-20 h-20 bg-red-100 rounded-full flex items-center justify-center"
          >
            <AlertCircle className="h-10 w-10 text-red-600" />
          </motion.div>

          {/* Error Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Project Not Found
          </motion.h1>

          {/* Error Message */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto"
          >
            {error || `The project you're looking for doesn't exist or may have been moved.`}
            {projectId && (
              <span className="block text-sm text-gray-500 mt-2">
                Project ID: {projectId}
              </span>
            )}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <Link
              href="/projects"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Search className="h-4 w-4" />
              <span>Browse All Projects</span>
            </Link>

            <Link
              href="/"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Home className="h-4 w-4" />
              <span>Go Home</span>
            </Link>

            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Try Again</span>
            </button>
          </motion.div>

          {/* Helpful Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gray-50 rounded-lg p-6"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              What you can do:
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    Check the URL for any typos or spelling errors
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    Browse all available projects to find what you&apos;re looking for
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    Contact me if you believe this is an error
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    Try refreshing the page or clearing your browser cache
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Featured Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Explore My Work
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder cards for featured projects */}
            <div className="card hover:shadow-lg transition-shadow cursor-pointer">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-2"></div>
                  <p className="text-gray-600 text-sm">Featured Project</p>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Amazing Project</h3>
              <p className="text-gray-600 text-sm">
                A showcase of innovative design and development
              </p>
            </div>

            <div className="card hover:shadow-lg transition-shadow cursor-pointer">
              <div className="h-48 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-lg mx-auto mb-2"></div>
                  <p className="text-gray-600 text-sm">Latest Work</p>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Innovative Solution</h3>
              <p className="text-gray-600 text-sm">
                Cutting-edge technology meets user experience
              </p>
            </div>

            <div className="card hover:shadow-lg transition-shadow cursor-pointer">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg mx-auto mb-2"></div>
                  <p className="text-gray-600 text-sm">Popular Project</p>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Creative Design</h3>
              <p className="text-gray-600 text-sm">
                Beautiful interfaces that users love
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
            >
              <Search className="h-4 w-4" />
              <span>View All Projects</span>
            </Link>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 card bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200"
        >
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Still Can&apos;t Find What You&apos;re Looking For?
            </h3>
            <p className="text-gray-600 mb-6">
              I&apos;m here to help! Feel free to reach out if you have any questions or need assistance.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <span>Get in Touch</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
