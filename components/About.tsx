import { Homepage } from '@/types'

interface AboutProps {
  homepage: Homepage
}

export default function About({ homepage }: AboutProps) {
  const { metadata } = homepage

  if (!metadata?.about_headline && !metadata?.about_content) {
    return null
  }

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in order-2 md:order-1">
            {metadata?.about_image && (
              <img
                src={`${metadata.about_image.imgix_url}?w=1200&h=800&fit=crop&auto=format,compress`}
                alt="About"
                width="600"
                height="400"
                className="rounded-lg shadow-2xl"
              />
            )}
          </div>
          
          <div className="animate-slide-up order-1 md:order-2">
            {metadata?.about_headline && (
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {metadata.about_headline}
              </h2>
            )}
            {metadata?.about_content && (
              <div 
                className="prose prose-lg text-gray-600"
                dangerouslySetInnerHTML={{ __html: metadata.about_content }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}