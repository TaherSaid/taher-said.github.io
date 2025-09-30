import { blogPosts, type BlogPost } from '@/data/blog'

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured)
}

export function getPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter(post => 
    post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  )
}

export function getAllTags(): string[] {
  const tags = new Set<string>()
  blogPosts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag))
  })
  return Array.from(tags).sort()
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function getReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}
