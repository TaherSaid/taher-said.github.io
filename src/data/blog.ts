export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  publishedAt: string
  updatedAt?: string
  tags: string[]
  readTime: number
  featured?: boolean
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'getting-started-with-nextjs-14',
    title: 'Getting Started with Next.js 14: A Complete Guide',
    excerpt: 'Learn how to build modern web applications with Next.js 14, including the new App Router, Server Components, and performance optimizations.',
    content: `
# Getting Started with Next.js 14: A Complete Guide

Next.js 14 brings significant improvements to the React framework, including the new App Router, Server Components, and enhanced performance optimizations. In this guide, we'll explore how to get started with Next.js 14 and build modern web applications.

## What's New in Next.js 14

### App Router
The App Router is the new recommended routing system that provides:
- File-system based routing
- Server Components by default
- Improved performance
- Better developer experience

### Server Components
Server Components allow you to:
- Reduce client-side JavaScript
- Improve performance
- Access server-side resources directly
- Better SEO

## Setting Up Your Project

\`\`\`bash
npx create-next-app@latest my-app --typescript --tailwind --app
cd my-app
npm run dev
\`\`\`

## Key Features

### 1. File-based Routing
Create routes by adding files to the \`app\` directory:
- \`app/page.tsx\` → \`/\`
- \`app/about/page.tsx\` → \`/about\`
- \`app/blog/[slug]/page.tsx\` → \`/blog/any-slug\`

### 2. Server Components
Server Components are the default in the App Router:

\`\`\`tsx
// app/page.tsx
export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Next.js 14</h1>
      <p>This is a Server Component</p>
    </div>
  )
}
\`\`\`

### 3. Client Components
Use \`'use client'\` directive for interactive components:

\`\`\`tsx
'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  )
}
\`\`\`

## Performance Optimizations

Next.js 14 includes several performance improvements:

1. **Automatic Image Optimization**
2. **Font Optimization**
3. **Bundle Analysis**
4. **Improved Caching**

## Conclusion

Next.js 14 provides a powerful foundation for building modern web applications. The App Router and Server Components offer better performance and developer experience.

Start building your next project with Next.js 14 today!
    `,
    publishedAt: '2024-12-15',
    tags: ['Next.js', 'React', 'Web Development', 'Tutorial'],
    readTime: 8,
    featured: true,
  },
  {
    slug: 'typescript-best-practices-2024',
    title: 'TypeScript Best Practices for 2024',
    excerpt: 'Discover the latest TypeScript best practices and patterns to write more maintainable and type-safe code.',
    content: `
# TypeScript Best Practices for 2024

TypeScript has evolved significantly over the years, and with the latest features, we can write more robust and maintainable code. Let's explore the best practices for 2024.

## 1. Use Strict Mode

Always enable strict mode in your \`tsconfig.json\`:

\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true
  }
}
\`\`\`

## 2. Leverage Type Inference

Let TypeScript infer types when possible:

\`\`\`typescript
// Good
const users = ['Alice', 'Bob', 'Charlie']

// Avoid
const users: string[] = ['Alice', 'Bob', 'Charlie']
\`\`\`

## 3. Use Union Types

Union types provide flexibility while maintaining type safety:

\`\`\`typescript
type Status = 'loading' | 'success' | 'error'

function handleStatus(status: Status) {
  switch (status) {
    case 'loading':
      return 'Loading...'
    case 'success':
      return 'Success!'
    case 'error':
      return 'Error occurred'
  }
}
\`\`\`

## 4. Generic Types

Use generics for reusable components:

\`\`\`typescript
interface ApiResponse<T> {
  data: T
  status: number
  message: string
}

async function fetchData<T>(url: string): Promise<ApiResponse<T>> {
  const response = await fetch(url)
  return response.json()
}
\`\`\`

## 5. Utility Types

Take advantage of built-in utility types:

\`\`\`typescript
interface User {
  id: number
  name: string
  email: string
  isActive: boolean
}

// Make all properties optional
type PartialUser = Partial<User>

// Pick specific properties
type UserBasic = Pick<User, 'id' | 'name'>

// Omit specific properties
type UserWithoutId = Omit<User, 'id'>
\`\`\`

## 6. Type Guards

Use type guards for runtime type checking:

\`\`\`typescript
function isString(value: unknown): value is string {
  return typeof value === 'string'
}

function processValue(value: unknown) {
  if (isString(value)) {
    // TypeScript knows value is string here
    console.log(value.toUpperCase())
  }
}
\`\`\`

## Conclusion

Following these TypeScript best practices will help you write more maintainable, type-safe, and robust code. Stay updated with the latest TypeScript features and continue learning!
    `,
    publishedAt: '2024-12-10',
    tags: ['TypeScript', 'Best Practices', 'Programming'],
    readTime: 6,
  },
  {
    slug: 'react-performance-optimization',
    title: 'React Performance Optimization Techniques',
    excerpt: 'Learn advanced techniques to optimize React applications for better performance and user experience.',
    content: `
# React Performance Optimization Techniques

Performance is crucial for providing a great user experience. Let's explore various techniques to optimize React applications.

## 1. React.memo for Component Memoization

Use \`React.memo\` to prevent unnecessary re-renders:

\`\`\`tsx
import React from 'react'

const ExpensiveComponent = React.memo(({ data }) => {
  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  )
})
\`\`\`

## 2. useMemo for Expensive Calculations

Memoize expensive calculations:

\`\`\`tsx
import { useMemo } from 'react'

function UserList({ users, filter }) {
  const filteredUsers = useMemo(() => {
    return users.filter(user => 
      user.name.toLowerCase().includes(filter.toLowerCase())
    )
  }, [users, filter])

  return (
    <div>
      {filteredUsers.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  )
}
\`\`\`

## 3. useCallback for Function Memoization

Memoize functions to prevent child re-renders:

\`\`\`tsx
import { useCallback } from 'react'

function ParentComponent() {
  const handleClick = useCallback((id) => {
    console.log('Clicked:', id)
  }, [])

  return (
    <div>
      <ChildComponent onButtonClick={handleClick} />
    </div>
  )
}
\`\`\`

## 4. Code Splitting

Use dynamic imports for code splitting:

\`\`\`tsx
import { lazy, Suspense } from 'react'

const LazyComponent = lazy(() => import('./LazyComponent'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  )
}
\`\`\`

## 5. Virtual Scrolling

For large lists, implement virtual scrolling:

\`\`\`tsx
import { FixedSizeList as List } from 'react-window'

function VirtualizedList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index].name}
    </div>
  )

  return (
    <List
      height={400}
      itemCount={items.length}
      itemSize={35}
    >
      {Row}
    </List>
  )
}
\`\`\`

## 6. Bundle Analysis

Use tools to analyze your bundle:

\`\`\`bash
npm install --save-dev @next/bundle-analyzer
\`\`\`

## Conclusion

These optimization techniques will significantly improve your React application's performance. Remember to measure performance before and after implementing optimizations.
    `,
    publishedAt: '2024-12-05',
    tags: ['React', 'Performance', 'Optimization'],
    readTime: 7,
  },
  {
    slug: 'aws-serverless-architecture',
    title: 'Building Serverless Applications with AWS',
    excerpt: 'Explore how to build scalable, cost-effective applications using AWS serverless services like Lambda, API Gateway, and DynamoDB.',
    content: `
# Building Serverless Applications with AWS

Serverless architecture has revolutionized how we build and deploy applications. Let's explore how to build scalable applications using AWS serverless services.

## What is Serverless?

Serverless computing allows you to run code without provisioning or managing servers. You only pay for the compute time you consume.

## AWS Serverless Services

### 1. AWS Lambda

Lambda is a serverless compute service:

\`\`\`javascript
// index.js
exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from Lambda!',
      timestamp: new Date().toISOString()
    })
  }
  
  return response
}
\`\`\`

### 2. API Gateway

API Gateway provides RESTful APIs:

\`\`\`yaml
# serverless.yml
service: my-serverless-app

provider:
  name: aws
  runtime: nodejs18.x

functions:
  hello:
    handler: handler.hello
    events:
      - http:
          path: hello
          method: get
\`\`\`

### 3. DynamoDB

DynamoDB is a fully managed NoSQL database:

\`\`\`javascript
const AWS = require('aws-sdk')
const dynamodb = new AWS.DynamoDB.DocumentClient()

async function createUser(userData) {
  const params = {
    TableName: 'Users',
    Item: {
      id: userData.id,
      name: userData.name,
      email: userData.email,
      createdAt: new Date().toISOString()
    }
  }
  
  return await dynamodb.put(params).promise()
}
\`\`\`

## Architecture Patterns

### 1. Event-Driven Architecture

\`\`\`yaml
functions:
  processOrder:
    handler: handlers.processOrder
    events:
      - sqs:
          arn: !GetAtt OrderQueue.Arn
\`\`\`

### 2. Microservices

Break down your application into smaller, focused services:

\`\`\`yaml
functions:
  userService:
    handler: services/user.handler
  orderService:
    handler: services/order.handler
  paymentService:
    handler: services/payment.handler
\`\`\`

## Best Practices

1. **Cold Start Optimization**
   - Use provisioned concurrency
   - Minimize dependencies
   - Use connection pooling

2. **Error Handling**
   - Implement proper error handling
   - Use Dead Letter Queues
   - Monitor and alert

3. **Security**
   - Use IAM roles with least privilege
   - Encrypt data at rest and in transit
   - Implement proper authentication

## Conclusion

AWS serverless services provide a powerful foundation for building scalable, cost-effective applications. Start with simple functions and gradually build complex architectures.
    `,
    publishedAt: '2024-11-30',
    tags: ['AWS', 'Serverless', 'Cloud Computing', 'Architecture'],
    readTime: 9,
  },
]
