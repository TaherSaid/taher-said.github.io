const { createClient } = require('contentful-management')
require('dotenv').config({ path: '.env.local' })

// Debug: Log environment variables (without showing full tokens)
console.log('🔍 Environment check:')
console.log('CONTENTFUL_SPACE_ID:', process.env.CONTENTFUL_SPACE_ID ? '✅ Set' : '❌ Missing')
console.log('CONTENTFUL_ACCESS_TOKEN:', process.env.CONTENTFUL_ACCESS_TOKEN ? '✅ Set' : '❌ Missing')
console.log('CONTENTFUL_MANAGEMENT_TOKEN:', process.env.CONTENTFUL_MANAGEMENT_TOKEN ? '✅ Set' : '❌ Missing')

// Check if environment variables are set
if (!process.env.CONTENTFUL_MANAGEMENT_TOKEN || !process.env.CONTENTFUL_SPACE_ID) {
  console.error('❌ Missing environment variables!')
  console.error('Please set up your .env.local file with:')
  console.error('- CONTENTFUL_SPACE_ID')
  console.error('- CONTENTFUL_ACCESS_TOKEN') 
  console.error('- CONTENTFUL_MANAGEMENT_TOKEN')
  console.error('\n📖 See CONTENTFUL_SETUP.md for detailed instructions')
  process.exit(1)
}

const client = createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
})

const spaceId = process.env.CONTENTFUL_SPACE_ID
const environmentId = 'master'

async function setupContentful() {
  try {
    console.log('🔗 Connecting to Contentful...')
    const space = await client.getSpace(spaceId)
    const environment = await space.getEnvironment(environmentId)

    console.log('Setting up Contentful content models...')

    // Create content types
    await createContentTypes(environment)
    
    // Create sample content
    await createSampleContent(environment)
    
    console.log('✅ Contentful setup completed successfully!')
  } catch (error) {
    console.error('❌ Error setting up Contentful:', error)
  }
}

async function createContentTypes(environment) {
  const contentTypes = [
    {
      id: 'heroSection',
      name: 'Hero Section',
      fields: [
        { id: 'title', name: 'Title', type: 'Text', required: true },
        { id: 'subtitle', name: 'Subtitle', type: 'Text', required: true },
        { id: 'profileImage', name: 'Profile Image', type: 'Asset', required: false },
        { id: 'ctaText', name: 'CTA Text', type: 'Text', required: true },
        { id: 'ctaLink', name: 'CTA Link', type: 'Text', required: true },
        { id: 'ctaBadge', name: 'CTA Badge Number', type: 'Integer', required: false }
      ]
    },
    {
      id: 'client',
      name: 'Client',
      fields: [
        { id: 'name', name: 'Name', type: 'Text', required: true },
        { id: 'logo', name: 'Logo', type: 'Asset', required: true },
        { id: 'order', name: 'Order', type: 'Integer', required: true }
      ]
    },
    {
      id: 'service',
      name: 'Service',
      fields: [
        { id: 'title', name: 'Title', type: 'Text', required: true },
        { id: 'description', name: 'Description', type: 'Text', required: true },
        { id: 'icon', name: 'Icon Name', type: 'Text', required: true },
        { id: 'order', name: 'Order', type: 'Integer', required: true }
      ]
    },
    {
      id: 'skillCategory',
      name: 'Skill Category',
      fields: [
        { id: 'category', name: 'Category', type: 'Text', required: true },
        { id: 'skills', name: 'Skills', type: 'Array', items: { type: 'Text' }, required: true },
        { id: 'order', name: 'Order', type: 'Integer', required: true }
      ]
    },
    {
      id: 'project',
      name: 'Project',
      fields: [
        { id: 'name', name: 'Name', type: 'Text', required: true },
        { id: 'description', name: 'Description', type: 'Text', required: true },
        { id: 'technologies', name: 'Technologies', type: 'Array', items: { type: 'Text' }, required: true },
        { id: 'image', name: 'Image', type: 'Asset', required: false },
        { id: 'link', name: 'Link', type: 'Text', required: false },
        { id: 'featured', name: 'Featured', type: 'Boolean', required: true },
        { id: 'order', name: 'Order', type: 'Integer', required: true }
      ]
    },
    {
      id: 'workExperience',
      name: 'Work Experience',
      fields: [
        { id: 'title', name: 'Title', type: 'Text', required: true },
        { id: 'company', name: 'Company', type: 'Text', required: true },
        { id: 'period', name: 'Period', type: 'Text', required: true },
        { id: 'location', name: 'Location', type: 'Text', required: true },
        { id: 'description', name: 'Description', type: 'Array', items: { type: 'Text' }, required: true }
      ]
    },
    {
      id: 'education',
      name: 'Education',
      fields: [
        { id: 'degree', name: 'Degree', type: 'Text', required: true },
        { id: 'institution', name: 'Institution', type: 'Text', required: true },
        { id: 'period', name: 'Period', type: 'Text', required: true },
        { id: 'specialization', name: 'Specialization', type: 'Text', required: false }
      ]
    },
    {
      id: 'blogPost',
      name: 'Blog Post',
      fields: [
        { id: 'title', name: 'Title', type: 'Text', required: true },
        { id: 'slug', name: 'Slug', type: 'Text', required: true },
        { id: 'excerpt', name: 'Excerpt', type: 'Text', required: true },
        { id: 'content', name: 'Content', type: 'RichText', required: true },
        { id: 'publishedAt', name: 'Published At', type: 'Date', required: true },
        { id: 'updatedAt', name: 'Updated At', type: 'Date', required: false },
        { id: 'readTime', name: 'Read Time (minutes)', type: 'Integer', required: true },
        { id: 'tags', name: 'Tags', type: 'Array', items: { type: 'Text' }, required: true },
        { id: 'featured', name: 'Featured', type: 'Boolean', required: true }
      ]
    },
    {
      id: 'contactInfo',
      name: 'Contact Info',
      fields: [
        { id: 'email', name: 'Email', type: 'Text', required: true },
        { id: 'phone', name: 'Phone', type: 'Text', required: true },
        { id: 'location', name: 'Location', type: 'Text', required: true },
        { id: 'github', name: 'GitHub URL', type: 'Text', required: true },
        { id: 'linkedin', name: 'LinkedIn URL', type: 'Text', required: true }
      ]
    },
    {
      id: 'personalInfo',
      name: 'Personal Info',
      fields: [
        { id: 'name', name: 'Name', type: 'Text', required: true },
        { id: 'title', name: 'Title', type: 'Text', required: true },
        { id: 'bio', name: 'Bio', type: 'RichText', required: true },
        { id: 'interests', name: 'Interests', type: 'Array', items: { type: 'Text' }, required: true },
        { id: 'languages', name: 'Languages', type: 'Object', required: true }
      ]
    }
  ]

  for (const contentType of contentTypes) {
    try {
      await environment.createContentTypeWithId(contentType.id, {
        name: contentType.name,
        fields: contentType.fields.map(field => ({
          id: field.id,
          name: field.name,
          type: field.type,
          required: field.required,
          ...(field.items && { items: field.items })
        }))
      })
      console.log(`✅ Created content type: ${contentType.name}`)
    } catch (error) {
      if (error.name === 'VersionMismatch') {
        console.log(`⚠️  Content type ${contentType.name} already exists`)
      } else {
        console.error(`❌ Error creating ${contentType.name}:`, error)
      }
    }
  }
}

async function createSampleContent(environment) {
  // Create sample hero section
  try {
    await environment.createEntryWithId('hero-section', 'heroSection', {
      fields: {
        title: { 'en-US': 'Building digital products, brands, and experience.' },
        subtitle: { 'en-US': 'Full Stack Developer passionate about creating innovative web solutions' },
        ctaText: { 'en-US': 'Latest Shots' },
        ctaLink: { 'en-US': '/projects' },
        ctaBadge: { 'en-US': 3 }
      }
    })
    console.log('✅ Created hero section')
  } catch (error) {
    console.log('⚠️  Hero section already exists or error:', error.message)
  }

  // Create sample contact info
  try {
    await environment.createEntryWithId('contact-info', 'contactInfo', {
      fields: {
        email: { 'en-US': 'taher.said@example.com' },
        phone: { 'en-US': '+351 123 456 789' },
        location: { 'en-US': 'Lisbon, Portugal' },
        github: { 'en-US': 'https://github.com/TaherSaid' },
        linkedin: { 'en-US': 'https://linkedin.com/in/taher-said' }
      }
    })
    console.log('✅ Created contact info')
  } catch (error) {
    console.log('⚠️  Contact info already exists or error:', error.message)
  }

  // Create sample personal info
  try {
    await environment.createEntryWithId('personal-info', 'personalInfo', {
      fields: {
        name: { 'en-US': 'Taher Said' },
        title: { 'en-US': 'Full Stack Developer' },
        bio: { 'en-US': 'I\'m a passionate Full Stack Developer with over 3 years of experience building modern web applications. I specialize in React, Next.js, and Node.js, with a strong focus on creating scalable, user-friendly solutions.' },
        interests: { 'en-US': ['Playing Padel', 'Listening to music', 'Cooking'] },
        languages: { 'en-US': { 'English': 'Fluent', 'Portuguese': 'Intermediate', 'Arabic': 'Native' } }
      }
    })
    console.log('✅ Created personal info')
  } catch (error) {
    console.log('⚠️  Personal info already exists or error:', error.message)
  }
}

setupContentful()
