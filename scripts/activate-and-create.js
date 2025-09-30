const { createClient } = require('contentful-management')
require('dotenv').config({ path: '.env.local' })

const client = createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
})

const spaceId = process.env.CONTENTFUL_SPACE_ID
const environmentId = 'master'

async function activateAndCreate() {
  try {
    console.log('🔗 Connecting to Contentful...')
    const space = await client.getSpace(spaceId)
    const environment = await space.getEnvironment(environmentId)

    console.log('📝 Activating content types and creating entries...')

    // Get the Hero Section content type and activate it
    try {
      const contentType = await environment.getContentType('heroSection')
      console.log('✅ Found Hero Section content type')
      
      // Activate the content type
      await contentType.publish()
      console.log('✅ Activated Hero Section content type')
      
      // Now create the entry
      const entry = await environment.createEntryWithId('hero-section', 'heroSection', {
        fields: {
          title: { 'en-US': 'Building digital products, brands, and experience.' },
          subtitle: { 'en-US': 'Full Stack Developer passionate about creating innovative web solutions' },
          ctaText: { 'en-US': 'Latest Shots' },
          ctaLink: { 'en-US': '/projects' },
          ctaBadge: { 'en-US': 3 }
        }
      })
      
      // Publish the entry
      await entry.publish()
      console.log('✅ Created and published hero section entry')
      
    } catch (error) {
      console.error('❌ Error with Hero Section:', error.message)
    }

    // Create Contact Info entry if it doesn't exist
    try {
      const contactEntry = await environment.createEntryWithId('contact-info', 'contactInfo', {
        fields: {
          email: { 'en-US': 'taher.said@example.com' },
          phone: { 'en-US': '+351 123 456 789' },
          location: { 'en-US': 'Lisbon, Portugal' },
          github: { 'en-US': 'https://github.com/TaherSaid' },
          linkedin: { 'en-US': 'https://linkedin.com/in/taher-said' }
        }
      })
      await contactEntry.publish()
      console.log('✅ Created and published contact info entry')
    } catch (error) {
      console.log('⚠️  Contact info entry already exists or error:', error.message)
    }

    console.log('✅ Activation and creation completed!')
  } catch (error) {
    console.error('❌ Error:', error)
  }
}

activateAndCreate()


