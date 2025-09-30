const { createClient } = require('contentful-management')
require('dotenv').config({ path: '.env.local' })

const client = createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
})

const spaceId = process.env.CONTENTFUL_SPACE_ID
const environmentId = 'master'

async function addMissingContent() {
  try {
    console.log('🔗 Connecting to Contentful...')
    const space = await client.getSpace(spaceId)
    const environment = await space.getEnvironment(environmentId)

    console.log('📝 Adding missing content...')

    // Create Hero Section content type
    try {
      await environment.createContentTypeWithId('heroSection', {
        name: 'Hero Section',
        fields: [
          { id: 'title', name: 'Title', type: 'Text', required: true },
          { id: 'subtitle', name: 'Subtitle', type: 'Text', required: true },
          { id: 'profileImage', name: 'Profile Image', type: 'Link', linkType: 'Asset', required: false },
          { id: 'ctaText', name: 'CTA Text', type: 'Text', required: true },
          { id: 'ctaLink', name: 'CTA Link', type: 'Text', required: true },
          { id: 'ctaBadge', name: 'CTA Badge Number', type: 'Integer', required: false }
        ]
      })
      console.log('✅ Created Hero Section content type')
    } catch (error) {
      if (error.name === 'VersionMismatch') {
        console.log('⚠️  Hero Section content type already exists')
      } else {
        console.error('❌ Error creating Hero Section:', error.message)
      }
    }

    // Create sample entries
    await createSampleEntries(environment)

    console.log('✅ Missing content added successfully!')
  } catch (error) {
    console.error('❌ Error adding missing content:', error)
  }
}

async function createSampleEntries(environment) {
  // Create Hero Section entry
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
    console.log('✅ Created hero section entry')
  } catch (error) {
    console.log('⚠️  Hero section entry already exists or error:', error.message)
  }

  // Create Services entries
  const services = [
    {
      title: 'UX & UI',
      description: 'Designing interfaces that are intuitive, efficient, and enjoyable to use.',
      icon: 'Monitor',
      order: 1
    },
    {
      title: 'Web & Mobile App',
      description: 'Transforming ideas into exceptional web and mobile app experiences.',
      icon: 'Smartphone',
      order: 2
    },
    {
      title: 'Design & Creative',
      description: 'Crafting visually stunning designs that connect with your audience.',
      icon: 'Palette',
      order: 3
    },
    {
      title: 'Development',
      description: 'Bringing your vision to life with the latest technology and design trends.',
      icon: 'Code',
      order: 4
    }
  ]

  for (const service of services) {
    try {
      await environment.createEntry('service', {
        fields: {
          title: { 'en-US': service.title },
          description: { 'en-US': service.description },
          icon: { 'en-US': service.icon },
          order: { 'en-US': service.order }
        }
      })
      console.log(`✅ Created service: ${service.title}`)
    } catch (error) {
      console.log(`⚠️  Service ${service.title} already exists or error:`, error.message)
    }
  }

  // Create Skills entries
  const skills = [
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'JavaScript'],
      order: 1
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'],
      order: 2
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'Figma', 'Postman', 'Jest'],
      order: 3
    }
  ]

  for (const skill of skills) {
    try {
      await environment.createEntry('skillCategory', {
        fields: {
          category: { 'en-US': skill.category },
          skills: { 'en-US': skill.skills },
          order: { 'en-US': skill.order }
        }
      })
      console.log(`✅ Created skill category: ${skill.category}`)
    } catch (error) {
      console.log(`⚠️  Skill category ${skill.category} already exists or error:`, error.message)
    }
  }

  // Create Clients entries
  const clients = [
    { name: 'National Bank', order: 1 },
    { name: 'Mattered', order: 2 },
    { name: 'Coca-Cola', order: 3 },
    { name: 'Adobe', order: 4 },
    { name: 'Subway', order: 5 },
    { name: 'Codecademy', order: 6 }
  ]

  for (const client of clients) {
    try {
      await environment.createEntry('client', {
        fields: {
          name: { 'en-US': client.name },
          order: { 'en-US': client.order }
        }
      })
      console.log(`✅ Created client: ${client.name}`)
    } catch (error) {
      console.log(`⚠️  Client ${client.name} already exists or error:`, error.message)
    }
  }
}

addMissingContent()


