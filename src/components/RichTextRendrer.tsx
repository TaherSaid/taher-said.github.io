'use client'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface RichTextRendererProps {
  content: any // Contentful rich text document
  className?: string
  animate?: boolean
  maxCharacters?: number // Maximum number of characters to display
  showEllipsis?: boolean // Whether to show ellipsis when truncated
}

export default function RichTextRenderer({ 
  content, 
  className = '', 
  animate = false,
  maxCharacters,
  showEllipsis = true
}: RichTextRendererProps) {
  if (!content) {
    return null
  }



  // Function to process content and truncate if needed
  const processContent = (content: any): any => {
    if (!maxCharacters) {
      return content
    }

    let currentCharCount = 0
    const maxChars = maxCharacters

    const processNode = (node: any): any => {
      // If we've already exceeded the limit, return null to stop rendering
      if (currentCharCount >= maxChars) {
        return null
      }

      if (node.nodeType === 'text') {
        const remainingChars = maxChars - currentCharCount
        const truncatedValue = node.value.length > remainingChars 
          ? node.value.substring(0, remainingChars) + (showEllipsis ? '...' : '')
          : node.value
        
        currentCharCount += Math.min(node.value.length, remainingChars)
        return { ...node, value: truncatedValue }
      }
      
      if (node.content) {
        const processedContent = node.content
          .map(processNode)
          .filter(Boolean) // Remove null nodes
        
        // If no content remains after processing, return null
        if (processedContent.length === 0) {
          return null
        }
        
        return { ...node, content: processedContent }
      }
      
      return node
    }

    const processedContent = content.content
      ?.map(processNode)
      .filter(Boolean) // Remove null nodes

    return {
      ...content,
      content: processedContent || []
    }
  }

  const processedContent = processContent(content)

  // Custom renderers for different content types
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: React.ReactNode) => (
        <strong className="font-bold text-gray-900">{text}</strong>
      ),
      [MARKS.ITALIC]: (text: React.ReactNode) => (
        <em className="italic text-gray-800">{text}</em>
      ),
      [MARKS.UNDERLINE]: (text: React.ReactNode) => (
        <u className="underline">{text}</u>
      ),
      [MARKS.CODE]: (text: React.ReactNode) => (
        <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono text-gray-800">{text}</code>
      ),
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => {
        const Wrapper = animate ? motion.p : 'p'
        const props = animate ? {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.3 }
        } : {}
        
        return (
          <Wrapper 
            className="mb-4 text-gray-700 leading-relaxed inline-block" 
            {...props}
          >
            {children}
          </Wrapper>
        )
      },
      [BLOCKS.HEADING_1]: (node: any, children: React.ReactNode) => {
        const Wrapper = animate ? motion.h1 : 'h1'
        const props = animate ? {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.3, delay: 0.1 }
        } : {}
        
        return (
          <Wrapper 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-8" 
            {...props}
          >
            {children}
          </Wrapper>
        )
      },
      [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => {
        const Wrapper = animate ? motion.h2 : 'h2'
        const props = animate ? {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.3, delay: 0.1 }
        } : {}
        
        return (
          <Wrapper 
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 mt-6" 
            {...props}
          >
            {children}
          </Wrapper>
        )
      },
      [BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => {
        const Wrapper = animate ? motion.h3 : 'h3'
        const props = animate ? {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.3, delay: 0.1 }
        } : {}
        
        return (
          <Wrapper 
            className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 mt-5" 
            {...props}
          >
            {children}
          </Wrapper>
        )
      },
      [BLOCKS.HEADING_4]: (node: any, children: React.ReactNode) => {
        const Wrapper = animate ? motion.h4 : 'h4'
        const props = animate ? {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.3, delay: 0.1 }
        } : {}
        
        return (
          <Wrapper 
            className="text-lg md:text-xl font-semibold text-gray-900 mb-2 mt-4" 
            {...props}
          >
            {children}
          </Wrapper>
        )
      },
      [BLOCKS.HEADING_5]: (node: any, children: React.ReactNode) => {
        const Wrapper = animate ? motion.h5 : 'h5'
        const props = animate ? {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.3, delay: 0.1 }
        } : {}
        
        return (
          <Wrapper 
            className="text-base md:text-lg font-semibold text-gray-900 mb-2 mt-3" 
            {...props}
          >
            {children}
          </Wrapper>
        )
      },
      [BLOCKS.HEADING_6]: (node: any, children: React.ReactNode) => {
        const Wrapper = animate ? motion.h6 : 'h6'
        const props = animate ? {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.3, delay: 0.1 }
        } : {}
        
        return (
          <Wrapper 
            className="text-sm md:text-base font-semibold text-gray-900 mb-2 mt-3" 
            {...props}
          >
            {children}
          </Wrapper>
        )
      },
      [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => {
        const Wrapper = animate ? motion.ul : 'ul'
        const props = animate ? {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.3, delay: 0.1 }
        } : {}
        
        return (
          <Wrapper 
            className="list-disc list-inside space-y-2 mb-4 text-gray-700" 
            {...props}
          >
            {children}
          </Wrapper>
        )
      },
      [BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => {
        const Wrapper = animate ? motion.ol : 'ol'
        const props = animate ? {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.3, delay: 0.1 }
        } : {}
        
        return (
          <Wrapper 
            className="list-decimal list-inside space-y-2 mb-4 text-gray-700" 
            {...props}
          >
            {children}
          </Wrapper>
        )
      },
      [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => {
        const Wrapper = animate ? motion.li : 'li'
        const props = animate ? {
          initial: { opacity: 0, x: -10 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.2 }
        } : {}

       return (
          <Wrapper className="text-gray-700" {...props}>
            {children}
          </Wrapper>
        )
      },
      [BLOCKS.QUOTE]: (node: any, children: React.ReactNode) => {
        const Wrapper = animate ? motion.blockquote : 'blockquote'
        const props = animate ? {
          initial: { opacity: 0, x: -20 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.3, delay: 0.1 }
        } : {}
        
        return (
          <Wrapper 
            className="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-blue-50 rounded-r-lg" 
            {...props}
          >
            <p className="text-gray-700 italic text-lg">{children}</p>
          </Wrapper>
        )
      },
      [BLOCKS.HR]: () => {
        const Wrapper = animate ? motion.hr : 'hr'
        const props = animate ? {
          initial: { opacity: 0, scaleX: 0 },
          animate: { opacity: 1, scaleX: 1 },
          transition: { duration: 0.3, delay: 0.1 }
        } : {}
        
        return (
          <Wrapper 
            className="border-t border-gray-300 my-8" 
            {...props}
          />
        )
      },
      [BLOCKS.TABLE]: (node: any, children: React.ReactNode) => {
        const Wrapper = animate ? motion.table : 'table'
        const props = animate ? {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.3, delay: 0.1 }
        } : {}
        
        return (
          <Wrapper 
            className="w-full border-collapse border border-gray-300 my-6" 
            {...props}
          >
            {children}
          </Wrapper>
        )
      },
      [BLOCKS.TABLE_ROW]: (node: any, children: React.ReactNode) => (
        <tr className="border-b border-gray-300">
          {children}
        </tr>
      ),
      [BLOCKS.TABLE_CELL]: (node: any, children: React.ReactNode) => (
        <td className="border border-gray-300 px-4 py-2 text-gray-700">
          {children}
        </td>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const { url, description, width, height } = node.data.target.fields
        
        const Wrapper = animate ? motion.div : 'div'
        const props = animate ? {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.3, delay: 0.1 }
        } : {}
        
        return (
          <Wrapper className="my-6" {...props}>
            <Image
              src={url}
              alt={description || 'Embedded content'}
              width={width}
              height={height}
              className="max-w-full h-auto rounded-lg shadow-md"
            />
            {description && (
              <p className="text-sm text-gray-600 mt-2 text-center italic">
                {description}
              </p>
            )}
          </Wrapper>
        )
      },
      [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => {
        const { uri } = node.data
        
        // Check if it's an external link
        const isExternal = uri.startsWith('http')
        
        if (isExternal) {
          return (
            <a
              href={uri}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline transition-colors"
            >
              {children}
            </a>
          )
        }
        
        return (
          <Link
            href={uri}
            className="text-blue-600 hover:text-blue-800 underline transition-colors"
          >
            {children}
          </Link>
        )
      },
      [INLINES.ENTRY_HYPERLINK]: (node: any, children: React.ReactNode) => {
        // Handle entry hyperlinks (internal links to other content)
        return (
          <span className="text-blue-600 hover:text-blue-800 underline transition-colors cursor-pointer">
            {children}
          </span>
        )
      },
    },
  }

  const Wrapper = animate ? motion.div : 'div'
  const wrapperProps = animate ? {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 }
  } : {}

  return (
    <Wrapper className={`rich-text-content ${className}`} {...wrapperProps}>
      {documentToReactComponents(processedContent, options)}
    </Wrapper>
  )
}
