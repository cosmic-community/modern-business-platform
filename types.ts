// Base Cosmic object interface
export interface CosmicObject {
  id: string
  slug: string
  title: string
  content?: string
  metadata: Record<string, any>
  type: string
  created_at: string
  modified_at: string
}

// Homepage content type
export interface Homepage extends CosmicObject {
  type: 'homepage'
  metadata: {
    hero_headline?: string
    hero_subheading?: string
    hero_cta_text?: string
    hero_cta_link?: string
    hero_image?: {
      url: string
      imgix_url: string
    }
    about_headline?: string
    about_content?: string
    about_image?: {
      url: string
      imgix_url: string
    }
    features_headline?: string
    features_description?: string
    stats?: Array<{
      number: string
      label: string
    }>
  }
}

// Feature type
export interface Feature extends CosmicObject {
  type: 'features'
  metadata: {
    icon?: {
      url: string
      imgix_url: string
    }
    title?: string
    description?: string
    order?: number
  }
}

// Contact Info type
export interface ContactInfo extends CosmicObject {
  type: 'contact-info'
  metadata: {
    email?: string
    phone?: string
    address?: string
    social_links?: {
      facebook?: string
      twitter?: string
      instagram?: string
      linkedin?: string
    }
    footer_text?: string
  }
}

// API response types
export interface CosmicResponse<T> {
  objects: T[]
  total: number
  limit?: number
  skip?: number
}

// Type guards
export function isHomepage(obj: CosmicObject): obj is Homepage {
  return obj.type === 'homepage'
}

export function isFeature(obj: CosmicObject): obj is Feature {
  return obj.type === 'features'
}

export function isContactInfo(obj: CosmicObject): obj is ContactInfo {
  return obj.type === 'contact-info'
}