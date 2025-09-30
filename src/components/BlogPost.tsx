// 'use client'

// import { motion } from 'framer-motion'
// import Link from 'next/link'
// import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'
// import { formatDate } from '@/lib/blog'
// import { type BlogPost } from '@/data/blog'

// interface BlogPostProps {
//   post: BlogPost
// }

// export default function BlogPost({ post }: BlogPostProps) {
//   return (
//     <div className="container py-12">
//       <div className="max-w-4xl mx-auto">
//         {/* Back Button */}
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           className="mb-8"
//         >
//           <Link 
//             href="/blog"
//             className="inline-flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
//           >
//             <ArrowLeft className="h-4 w-4" />
//             <span>Back to Blog</span>
//           </Link>
//         </motion.div>

//         {/* Article Header */}
//         <motion.article
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           className="card"
//         >
//           {/* Title */}
//           <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
//             {post.title}
//           </h1>

//           {/* Meta Information */}
//           <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-gray-600">
//             <div className="flex items-center">
//               <Calendar className="h-4 w-4 mr-2" />
//               <span>{formatDate(post.publishedAt)}</span>
//             </div>
            
//             <div className="flex items-center">
//               <Clock className="h-4 w-4 mr-2" />
//               <span>{post.readTime} min read</span>
//             </div>

//             {post.updatedAt && (
//               <div className="flex items-center">
//                 <span>Updated: {formatDate(post.updatedAt)}</span>
//               </div>
//             )}
//           </div>

//           {/* Tags */}
//           <div className="flex flex-wrap items-center gap-2 mb-8">
//             <Tag className="h-4 w-4 text-gray-700" />
//             {post.tags.map((tag) => (
//               <Link
//                 key={tag}
//                 href={`/blog?tag=${tag.toLowerCase()}`}
//                 className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
//               >
//                 {tag}
//               </Link>
//             ))}
//           </div>

//           {/* Excerpt */}
//           <div className="mb-8 p-6 bg-gray-50 rounded-lg border-l-4 border-gray-700">
//             <p className="text-lg text-gray-700 italic">
//               {post.excerpt}
//             </p>
//           </div>

//           {/* Content */}
//           <div className="prose max-w-none">
//             <div 
//               className="markdown-content"
//               dangerouslySetInnerHTML={{ __html: formatMarkdown(post.content) }}
//             />
//           </div>
//         </motion.article>

//         {/* Related Posts */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="mt-12"
//         >
//           <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
//           <div className="grid md:grid-cols-2 gap-6">
//             {/* You can add related posts logic here */}
//             <div className="card">
//               <p className="text-gray-600">
//                 More blog posts coming soon...
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   )
// }

// // Simple markdown to HTML converter
// function formatMarkdown(markdown: string): string {
//   return markdown
//     .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mt-6 mb-4">$1</h3>')
//     .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>')
//     .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>')
//     .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
//     .replace(/\*(.*)\*/gim, '<em>$1</em>')
//     .replace(/```(\w+)?\n([\s\S]*?)```/gim, '<pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4"><code class="text-sm">$2</code></pre>')
//     .replace(/`([^`]+)`/gim, '<code class="bg-gray-100 px-1 py-0.5 rounded text-sm">$1</code>')
//     .replace(/\n\n/gim, '</p><p class="mb-4">')
//     .replace(/^\n/gim, '<p class="mb-4">')
//     .replace(/\n$/gim, '</p>')
//     .replace(/^([^<].*)/gim, '<p class="mb-4">$1</p>')
// }
