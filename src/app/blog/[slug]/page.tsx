// import { Metadata } from 'next'
// import { notFound } from 'next/navigation'
// import BlogPost from '@/components/BlogPost'
// import { getBlogPost, getAllBlogPosts } from '@/lib/blog'

import { ComingSoon } from "@/components/ComingSoon"

// interface BlogPostPageProps {
//   params: {
//     slug: string
//   }
// }

// export async function generateStaticParams() {
//   const posts = getAllBlogPosts()
//   console.log("posts =>", posts);
//   return posts.map((post) => ({
//     slug: post.slug,
//   }))
// }

// export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
//   const post = getBlogPost(params.slug)
  
//   if (!post) {
//     return {
//       title: 'Post Not Found',
//     }
//   }

//   return {
//     title: `${post.title} - Taher Said`,
//     description: post.excerpt,
//     openGraph: {
//       title: post.title,
//       description: post.excerpt,
//       type: 'article',
//       publishedTime: post.publishedAt,
//       authors: ['Taher Said'],
//     },
//   }
// }

// export default function BlogPostPage({ params }: BlogPostPageProps) {
export default function BlogPostPage() {
  // const post = getBlogPost(params.slug)

  // if (!post) {
  //   notFound()
  // }

  return <ComingSoon />
}
