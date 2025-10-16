import { Homepage } from '@/types'

interface HeroProps {
  homepage: Homepage
}

export default function Hero({ homepage }: HeroProps) {
  const { metadata } = homepage

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {metadata?.hero_headline || 'Build Your Dream Website'}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              {metadata?.hero_subheading || 'Create stunning, responsive websites with our powerful platform.'}
            </p>
            {metadata?.hero_cta_text && metadata?.hero_cta_link && (
              <a
                href={metadata.hero_cta_link}
                className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                {metadata.hero_cta_text}
              </a>
            )}
          </div>
          
          <div className="animate-fade-in">
            {metadata?.hero_image && (
              <img
                src={`${metadata.hero_image.imgix_url}?w=1200&h=800&fit=crop&auto=format,compress`}
                alt="Hero"
                width="600"
                height="400"
                className="rounded-lg shadow-2xl"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}