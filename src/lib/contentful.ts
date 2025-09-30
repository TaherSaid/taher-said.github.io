import { createClient } from "contentful";

// Check if environment variables are set
const isContentfulConfigured =
  process.env.NEXT_CONTENTFUL_SPACE_ID &&
  process.env.NEXT_CONTENTFUL_ACCESS_TOKEN;

if (!isContentfulConfigured) {
  console.warn(
    "⚠️  Contentful environment variables not set. Components will show error state."
  );
}

const client = createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID || "dummy-space-id",
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN || "dummy-access-token",
});

export default client;

// Content Types
export interface HeroSection {
  title: string;
  subtitle: string;
  profileImage?: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  ctaText: string;
  ctaLink: string;
  ctaBadge?: number;
}

export interface Client {
  name: string;
  logo: {
    fields: {
      file: {
        url: string;
      };
    };
  };
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Skill {
  category: string;
  order: number;
  skillName: string[];
}

export interface ProjectItem {
  name: string;
  description: string;
  technologies: {
    fields: {
      name: string;
      technologyDescription: any;
      technologyLogo: {
        fields: {
          file: {
            url: string;
          };
        };
      };
    };
  }[];
  demo: {
    fields: {
      title?: string;
      description?: string;
      file: {
        url: string;
      };
    };
  };
  coverImage?: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  link?: string;
  featured?: boolean;
  slug: string;
}
export interface Project {
  id: string;
  fields: ProjectItem;
}

export interface WorkExperience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  specialization?: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  updatedAt?: string;
  readTime: number;
  tags: string[];
  featured: boolean;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  interests: string[];
  languages: Record<string, string>;
}

// Fetch functions
// export async function getHeroSection(): Promise<HeroSection> {
//   if (!isContentfulConfigured) {
//     throw new Error('Contentful is not configured. Please set up your environment variables.')
//   }

//   try {
//     const response = await client.getEntry('hero-section')
//     return response.fields as HeroSection
//   } catch (error) {
//     console.error('Error fetching hero section:', error)
//     throw error
//   }
// }

// export async function getClients(): Promise<Client[]> {
//   if (!isContentfulConfigured) {
//     throw new Error('Contentful is not configured. Please set up your environment variables.')
//   }

//   const response = await client.getEntries({
//     content_type: 'client',
//   })
//   return response.items.map(item => t)
// }

// export async function getServices(): Promise<Service[]> {
//   if (!isContentfulConfigured) {
//     throw new Error('Contentful is not configured. Please set up your environment variables.')
//   }

//   const response = await client.getEntries({
//     content_type: 'service'
//   })
//   return response.items.map(item => item.fields as Service)
// }

export async function getSkills(): Promise<Skill[]> {
  if (!isContentfulConfigured) {
    throw new Error(
      "Contentful is not configured. Please set up your environment variables."
    );
  }

  const response = await client.getEntries({
    content_type: "skillCategory",
  });
  const skills: Skill[] = response.items.map(
    (item) => item.fields as unknown as Skill
  );

  return skills;
}

export async function getEducation(): Promise<Education[]> {
  if (!isContentfulConfigured) {
    throw new Error(
      "Contentful is not configured. Please set up your environment variables."
    );
  }

  const response = await client.getEntries({
    content_type: "education",
  });
  console.log("response => ", response);
  const education: Education[] = response.items.map(
    (item) => item.fields as unknown as Education
  );
  console.log("education => ", education);
  return education;
}

export async function getWorkExperience(): Promise<WorkExperience[]> {
  if (!isContentfulConfigured) {
    throw new Error(
      "Contentful is not configured. Please set up your environment variables."
    );
  }

  const response = await client.getEntries({
    content_type: "workExperience",
  });
  const workExperience: WorkExperience[] = response.items.map(
    (item) => item.fields as unknown as WorkExperience
  );
  return workExperience;
}

export async function getProjects(limit?: number) {
  try {
    const query: Record<string, any> = {
      content_type: "project",
      order: "-sys.createdAt", // newest first (optional)
    };

    if (limit) {
      query.limit = limit;
    }

    const response = await client.getEntries(query);

    if (!response.items.length) {
      console.warn("⚠️ No projects found in Contentful");
      return [];
    }

    return response.items.map((item) => ({
      id: item.sys.id,
      fields: item.fields,
    }));
  } catch (err) {
    console.error("❌ Error fetching projects:", err);
    throw new Error("Failed to fetch projects from Contentful");
  }
}

export async function getProject(slug: string) {
  if (!isContentfulConfigured) {
    throw new Error(
      "Contentful is not configured. Please set up your environment variables."
    );
  }
  const response = await client.getEntries({
    content_type: "project",
    "fields.slug": slug,
    limit: 1,
  });

  const entry = response.includes?.Entry?.map((item) => item.fields);
  const assets = response.includes?.Asset?.map((item) => item.fields);

  const res =  {
    item: response.items[0].fields as unknown as ProjectItem[],
    entry,
    assets,
  }

  console.log("projects => ", res);
  return res;
}

// export async function getFeaturedProjects(): Promise<Project[]> {
//   const response = await client.getEntries({
//     content_type: 'project',
//     'fields.featured': true,
//     order: 'fields.order',
//     limit: 3
//   })
//   return response.items.map(item => item.fields as Project)
// }

// export async function getBlogPosts(): Promise<BlogPost[]> {
//   const response = await client.getEntries({
//     content_type: 'blogPost',
//     order: '-fields.publishedAt'
//   })
//   return response.items.map(item => item.fields as BlogPost)
// }

// export async function getFeaturedBlogPosts(): Promise<BlogPost[]> {
//   const response = await client.getEntries({
//     content_type: 'blogPost',
//     'fields.featured': true,
//     order: '-fields.publishedAt',
//     limit: 3
//   })
//   return response.items.map(item => item.fields as BlogPost)
// }

// export async function getBlogPost(slug: string): Promise<BlogPost | null> {
//   const response = await client.getEntries({
//     content_type: 'blogPost',
//     'fields.slug': slug,
//     limit: 1
//   })

//   if (response.items.length === 0) {
//     return null
//   }

//   return response.items[0].fields as BlogPost
// }

// export async function getContactInfo(): Promise<ContactInfo> {
//   const response = await client.getEntry('contact-info')
//   return response.fields as ContactInfo
// }

// export async function getPersonalInfo(): Promise<PersonalInfo> {
//   const response = await client.getEntry('personal-info')
//   return response.fields as PersonalInfo
// }
