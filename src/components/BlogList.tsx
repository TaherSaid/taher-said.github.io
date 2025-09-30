// 'use client'

// import { useState, useMemo } from 'react'
// import { motion } from 'framer-motion'
// import { Search, Filter, Clock, Calendar } from 'lucide-react'
// import Link from 'next/link'
// import { getAllBlogPosts, getAllTags, formatDate } from '@/lib/blog'
// // import { type BlogPost } from '@/data/blog'

// export default function BlogList() {
//   const [searchTerm, setSearchTerm] = useState('')
//   const [selectedTag, setSelectedTag] = useState('all')
  
//   const allPosts = getAllBlogPosts()
//   const allTags = getAllTags()

//   // Filter posts based on search term and selected tag
//   const filteredPosts = useMemo(() => {
//     let filtered = allPosts

//     // Filter by tag
//     if (selectedTag !== 'all') {
//       filtered = filtered.filter(post => 
//         post.tags.some(tag => tag.toLowerCase() === selectedTag.toLowerCase())
//       )
//     }

//     // Filter by search term
//     if (searchTerm) {
//       filtered = filtered.filter(post =>
//         post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
//       )
//     }

//     return filtered
//   }, [allPosts, searchTerm, selectedTag])

//   return (
//     <div>
//       {/* Search and Filter Controls */}
//       <div className="mb-8 space-y-4">
//         {/* Search */}
//         <div className="relative">
//           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Search posts..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent bg-white text-gray-900"
//           />
//         </div>

//         {/* Tag Filter */}
//         <div>
//           <div className="flex items-center mb-3">
//             <Filter className="h-5 w-5 text-gray-700 mr-2" />
//             <h3 className="text-lg font-semibold">Filter by Tag</h3>
//           </div>
          
//           <div className="flex flex-wrap gap-2">
//             <button
//               onClick={() => setSelectedTag('all')}
//               className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
//                 selectedTag === 'all'
//                   ? 'bg-gray-900 text-white'
//                   : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//               }`}
//             >
//               All Posts
//             </button>
            
//             {allTags.map((tag) => (
//               <button
//                 key={tag}
//                 onClick={() => setSelectedTag(tag)}
//                 className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
//                   selectedTag === tag
//                     ? 'bg-gray-900 text-white'
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                 }`}
//               >
//                 {tag}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Results Count */}
//       <div className="mb-6">
//         <p className="text-gray-600">
//           {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''} found
//         </p>
//       </div>

//       {/* Blog Posts Grid */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {filteredPosts.map((post, index) => (
//           <motion.div
//             key={post.slug}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             className="card hover:shadow-xl transition-all duration-300 group"
//           >
//             <Link href={`/blog/${post.slug}`}>
//               <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center">
//                 <div className="text-center">
//                   <div className="text-4xl font-bold text-gray-700 mb-2">
//                     {post.title.charAt(0)}
//                   </div>
//                   <p className="text-sm text-gray-700">
//                     {post.readTime} min read
//                   </p>
//                 </div>
//               </div>
              
//               <div className="space-y-3">
//                 <h3 className="text-xl font-semibold group-hover:text-gray-900 transition-colors line-clamp-2">
//                   {post.title}
//                 </h3>
                
//                 <p className="text-gray-600 line-clamp-3">
//                   {post.excerpt}
//                 </p>
                
//                 <div className="flex items-center justify-between text-sm text-gray-500">
//                   <div className="flex items-center">
//                     <Calendar className="h-4 w-4 mr-1" />
//                     <span>{formatDate(post.publishedAt)}</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Clock className="h-4 w-4 mr-1" />
//                     <span>{post.readTime} min</span>
//                   </div>
//                 </div>
                
//                 <div className="flex flex-wrap gap-2 pt-2">
//                   {post.tags.slice(0, 3).map((tag) => (
//                     <span
//                       key={tag}
//                       className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                   {post.tags.length > 3 && (
//                     <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
//                       +{post.tags.length - 3} more
//                     </span>
//                   )}
//                 </div>
//               </div>
//             </Link>
//           </motion.div>
//         ))}
//       </div>

//       {filteredPosts.length === 0 && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="text-center py-12"
//         >
//           <p className="text-lg text-gray-600">
//             No posts found matching your criteria.
//           </p>
//         </motion.div>
//       )}
//     </div>
//   )
// }
