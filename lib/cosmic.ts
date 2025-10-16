import { createBucketClient } from '@cosmicjs/sdk'
import { Feature } from './types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Helper function for error handling
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

// Fetch homepage content
export async function getHomepage() {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'homepage',
        slug: 'homepage-content'
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.object
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch homepage content')
  }
}

// Fetch all features
export async function getFeatures() {
  try {
    const response = await cosmic.objects
      .find({ type: 'features' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    // Manual sorting by order field with explicit types
    return response.objects.sort((a: Feature, b: Feature) => {
      const orderA = a.metadata?.order || 0
      const orderB = b.metadata?.order || 0
      return orderA - orderB
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch features')
  }
}

// Fetch contact info
export async function getContactInfo() {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'contact-info',
        slug: 'contact-information'
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.object
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch contact info')
  }
}