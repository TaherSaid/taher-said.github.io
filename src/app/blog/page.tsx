import { ComingSoon } from '@/components/ComingSoon'
import { Metadata } from 'next'
// import BlogList from '@/components/BlogList'

export const metadata: Metadata = {
  title: 'Blog - Taher Said',
  description: 'Read my thoughts on web development, technology, and industry insights.',
}

export default function BlogPage() {
  return (
    <div className="container py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          {/* <p className="text-lg text-gray-600">
            Thoughts on web development, technology, and industry insights
          </p> */}
        </div>
        <ComingSoon />
        {/* <BlogList /> */}
      </div>
    </div>
  )
}
