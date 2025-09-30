"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Globe, Tag } from "lucide-react";
import RichTextRenderer from "./RichTextRendrer";
import Image from "next/image";

interface ProjectPostProps {
  project: any;
}

export default function ProjectPost({ project }: ProjectPostProps) {
  const { item } = project;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Projects</span>
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          {/* Featured Badge */}
          {item.featured && (
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                Featured Project
              </span>
            </div>
          )}

          {/* Project Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {item.name}
          </h1>

          {/* Project Meta */}
          <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-gray-600">
            {/* <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>2020</span>
            </div> */}
            <div className="flex items-center space-x-2">
              <Tag className="h-4 w-4" />
              <span>{item.technologies?.length || 0} Technologies</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            {item.link && (
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Globe className="h-4 w-4" />
                <span>View Live Demo</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
            )}
          </div>
        </motion.div>

        {/* Project Content */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Cover Image */}
          {item.coverImage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative overflow-hidden rounded-2xl shadow-lg flex flex-row justify-center items-center"
            >
              <Image
                width={400}
                height={200}
                src={`https:${item.coverImage.fields.file.url}`}
                alt={item.name}
                // className="w-full h-auto object-cover"
              />
            </motion.div>
          )}

          {/* Project Description */}
          <div className="mb-8">
            <RichTextRenderer content={item.description} animate={true} />
          </div>

          {/* Demo Videos */}
          {item.demo && item.demo.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Project Demo
              </h2>
              {item.demo.map((demo: any) => (
                <div key={demo.sys.id} className="space-y-4">
                  {demo.fields.title && (
                    <h3 className="text-lg font-semibold text-gray-800">
                      {demo.fields.title}
                    </h3>
                  )}
                  <div className="relative bg-gray-100 rounded-xl overflow-hidden w-full h-96 md:h-80">
                    <video
                      key={demo.fields.file.url}
                      controls
                      className="w-full h-full object-contain"
                      poster={item.coverImage?.fields.file.url}
                    >
                      <source
                        src={`https:${demo.fields.file.url}`}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Project Overview
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Key Features */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Responsive design for all devices
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Modern UI/UX with intuitive navigation
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Performance optimized for fast loading
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Scalable architecture for future growth
                    </span>
                  </li>
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {item.technologies?.map((tech: any, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tech.fields.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Development Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Development Process
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Planning</h4>
                <p className="text-sm text-gray-600">
                  Requirements gathering and wireframing
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Design</h4>
                <p className="text-sm text-gray-600">
                  UI/UX design and prototyping
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Development
                </h4>
                <p className="text-sm text-gray-600">
                  Agile development and testing
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 font-bold">4</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Deployment</h4>
                <p className="text-sm text-gray-600">
                  Production deployment and monitoring
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto mt-16 pt-8 border-t border-gray-200"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>View All Projects</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <span>Get in Touch</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
