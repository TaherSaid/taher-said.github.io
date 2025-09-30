const { createClient } = require('contentful')
require('dotenv').config({ path: '.env.local' })

const client = createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
})

async function testContentful() {
  console.log('🔍 Testing Contentful connection...')
  console.log('Space ID:', process.env.NEXT_CONTENTFUL_SPACE_ID ? '✅ Set' : '❌ Missing')
  console.log('Access Token:', process.env.NEXT_CONTENTFUL_ACCESS_TOKEN ? '✅ Set' : '❌ Missing')
  
  try {
    // Test basic connection
    console.log('\n📡 Testing connection...')
    const space = await client.getSpace(process.env.NEXT_CONTENTFUL_SPACE_ID)
    console.log('✅ Connected to space:', space.name)
    
    // Test getting all content types
    console.log('\n📋 Available content types:')
    const contentTypes = await client.getContentTypes()
    contentTypes.items.forEach(type => {
      console.log(`  - ${type.name} (${type.sys.id})`)
    })
    
    // Test getting all entries
    console.log('\n📄 Available entries:')
    const entries = await client.getEntries()
    entries.items.forEach(entry => {
      console.log(`  - ${entry.sys.contentType.sys.id}: ${entry.fields.title || entry.fields.name || entry.sys.id}`)
    })
    
    console.log('\n✅ Contentful connection successful!')
    console.log(`📊 Found ${contentTypes.items.length} content types and ${entries.items.length} entries`)
    
  } catch (error) {
    console.error('\n❌ Contentful connection failed:', error.message)
    if (error.message.includes('AccessTokenInvalid')) {
      console.log('\n💡 This usually means your access token is invalid or expired.')
      console.log('   Please check your Contentful API keys.')
    } else if (error.message.includes('SpaceNotFound')) {
      console.log('\n💡 This usually means your space ID is incorrect.')
      console.log('   Please check your Contentful space ID.')
    }
  }
}

testContentful()

