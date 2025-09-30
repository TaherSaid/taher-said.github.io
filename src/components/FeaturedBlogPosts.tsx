'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Clock, Calendar } from 'lucide-react'
import { getFeaturedPosts, formatDate } from '@/lib/blog'

export default function FeaturedBlogPosts() {
  const featuredPosts = getFeaturedPosts()

  if (featuredPosts.length === 0) {
    return null
  }

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
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Latest Articles</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Thoughts on web development, technology, and industry insights
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPosts.slice(0, 3).map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card hover:shadow-xl transition-all duration-300 group"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-600 mb-2">
                      {post.title.charAt(0)}
                    </div>
                    <p className="text-sm text-gray-600">
                      {post.readTime} min read
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold group-hover:text-gray-900 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{formatDate(post.publishedAt)}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime} min</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/blog" className="btn-primary inline-flex items-center space-x-2">
            <span>View All Articles</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
