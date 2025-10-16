import { getHomepage, getFeatures, getContactInfo } from '@/lib/cosmic'
import { Homepage, Feature, ContactInfo } from '@/types'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Stats from '@/components/Stats'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const revalidate = 60 // Revalidate every 60 seconds

export default async function Home() {
  // Fetch all data in parallel
  const [homepage, features, contactInfo] = await Promise.all([
    getHomepage(),
    getFeatures(),
    getContactInfo(),
  ])

  const homepageData = homepage as Homepage | null
  const featuresData = features as Feature[]
  const contactData = contactInfo as ContactInfo | null

  return (
    <main className="min-h-screen">
      <Header />
      
      {homepageData && (
        <>
          <Hero homepage={homepageData} />
          
          {homepageData.metadata?.stats && (
            <Stats stats={homepageData.metadata.stats} />
          )}
          
          <Features 
            headline={homepageData.metadata?.features_headline}
            description={homepageData.metadata?.features_description}
            features={featuresData}
          />
          
          <About homepage={homepageData} />
        </>
      )}
      
      {contactData && <Contact contactInfo={contactData} />}
      
      {contactData && <Footer contactInfo={contactData} />}
    </main>
  )
}