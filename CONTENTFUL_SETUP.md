# Contentful CMS Integration Setup Guide

This guide will help you set up Contentful CMS for your portfolio website, allowing you to manage all content through their platform.

## 🚀 Quick Start

### 1. Create a Contentful Account

1. Go to [contentful.com](https://contentful.com)
2. Sign up for a free account
3. Create a new space for your portfolio

### 2. Get Your API Keys

1. In your Contentful space, go to **Settings** → **API keys**
2. Create a new API key or use the default one
3. Copy the following values:
   - **Space ID**
   - **Content Delivery API - access token**

### 3. Get Management Token

1. Go to **Settings** → **API keys**
2. Click on **Content management tokens**
3. Create a new token with full access
4. Copy the **Management token**

### 4. Set Up Environment Variables

1. Create a `.env.local` file in your project root
2. Add the following variables:

```env
# Contentful Configuration
CONTENTFUL_SPACE_ID=your_space_id_here
CONTENTFUL_ACCESS_TOKEN=your_content_delivery_token_here
CONTENTFUL_MANAGEMENT_TOKEN=your_management_token_here

# Next.js Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 5. Run the Setup Script

```bash
node scripts/setup-contentful.js
```

This script will:
- Create all necessary content types in Contentful
- Add sample content to get you started
- Set up the content structure

## 📋 Content Types Created

The setup script creates the following content types:

### 1. Hero Section
- **Title**: Main headline
- **Subtitle**: Supporting text
- **Profile Image**: Your profile photo
- **CTA Text**: Button text
- **CTA Link**: Button destination
- **CTA Badge**: Optional badge number

### 2. Client
- **Name**: Client company name
- **Logo**: Client logo image
- **Order**: Display order

### 3. Service
- **Title**: Service name
- **Description**: Service description
- **Icon**: Icon name (Monitor, Smartphone, Palette, Code)
- **Order**: Display order

### 4. Skill Category
- **Category**: Skill category name
- **Skills**: Array of skills
- **Order**: Display order

### 5. Project
- **Name**: Project name
- **Description**: Project description
- **Technologies**: Array of technologies used
- **Image**: Project image
- **Link**: Project URL
- **Featured**: Whether to show on homepage
- **Order**: Display order

### 6. Work Experience
- **Title**: Job title
- **Company**: Company name
- **Period**: Employment period
- **Location**: Job location
- **Description**: Array of job responsibilities

### 7. Education
- **Degree**: Degree name
- **Institution**: School/university name
- **Period**: Study period
- **Specialization**: Field of study

### 8. Blog Post
- **Title**: Post title
- **Slug**: URL slug
- **Excerpt**: Post summary
- **Content**: Rich text content
- **Published At**: Publication date
- **Updated At**: Last update date
- **Read Time**: Reading time in minutes
- **Tags**: Array of tags
- **Featured**: Whether to show on homepage

### 9. Contact Info
- **Email**: Contact email
- **Phone**: Phone number
- **Location**: Physical location
- **GitHub**: GitHub profile URL
- **LinkedIn**: LinkedIn profile URL

### 10. Personal Info
- **Name**: Your full name
- **Title**: Professional title
- **Bio**: Personal bio
- **Interests**: Array of interests
- **Languages**: Object with language proficiency

## 🔧 Manual Setup (Alternative)

If you prefer to set up content types manually:

### 1. Create Content Types

1. Go to **Content model** in your Contentful space
2. Click **Add content type**
3. Create each content type with the fields listed above

### 2. Add Sample Content

1. Go to **Content** in your Contentful space
2. Click **Add entry** for each content type
3. Fill in the sample data

## 📝 Sample Content

### Hero Section
```json
{
  "title": "Building digital products, brands, and experience.",
  "subtitle": "Full Stack Developer passionate about creating innovative web solutions",
  "ctaText": "Latest Shots",
  "ctaLink": "/projects",
  "ctaBadge": 3
}
```

### Services
```json
[
  {
    "title": "UX & UI",
    "description": "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
    "icon": "Monitor"
  },
  {
    "title": "Web & Mobile App",
    "description": "Transforming ideas into exceptional web and mobile app experiences.",
    "icon": "Smartphone"
  },
  {
    "title": "Design & Creative",
    "description": "Crafting visually stunning designs that connect with your audience.",
    "icon": "Palette"
  },
  {
    "title": "Development",
    "description": "Bringing your vision to life with the latest technology and design trends.",
    "icon": "Code"
  }
]
```

## 🔄 Updating Content

### Through Contentful Web App
1. Log in to your Contentful space
2. Go to **Content**
3. Click on any entry to edit
4. Make your changes
5. Click **Publish**

### Through API
You can also update content programmatically using the Contentful Management API.

## 🚀 Deployment

### Vercel Deployment
1. Add your environment variables to Vercel
2. Deploy your Next.js app
3. Content will be fetched from Contentful

### Environment Variables for Production
Make sure to add these to your production environment:
- `CONTENTFUL_SPACE_ID`
- `CONTENTFUL_ACCESS_TOKEN`

## 🔍 Troubleshooting

### Common Issues

1. **"Cannot read property 'fields' of undefined"**
   - Check if your environment variables are set correctly
   - Verify that content exists in Contentful

2. **"Access token is invalid"**
   - Regenerate your access token in Contentful
   - Update your environment variables

3. **"Space ID not found"**
   - Verify your space ID in Contentful settings
   - Check that you're using the correct space

### Debug Mode
Add this to your `.env.local` for debugging:
```env
CONTENTFUL_DEBUG=true
```

## 📚 Additional Resources

- [Contentful Documentation](https://www.contentful.com/developers/docs/)
- [Contentful Management API](https://www.contentful.com/developers/docs/references/content-management-api/)
- [Contentful Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/)

## 🎉 Next Steps

1. **Customize Content**: Update the sample content with your information
2. **Add Images**: Upload your profile photo and project images
3. **Create Blog Posts**: Start writing blog posts in Contentful
4. **Style Customization**: Modify the components to match your brand
5. **SEO Optimization**: Add meta tags and structured data

Your portfolio is now fully integrated with Contentful! 🚀


