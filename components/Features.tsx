import { Feature } from '@/types'

interface FeaturesProps {
  headline?: string
  description?: string
  features: Feature[]
}

export default function Features({ headline, description, features }: FeaturesProps) {
  if (!features || features.length === 0) {
    return null
  }

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {headline || 'Amazing Features'}
          </h2>
          {description && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 animate-fade-in"
            >
              {feature.metadata?.icon && (
                <div className="mb-6">
                  <img
                    src={`${feature.metadata.icon.imgix_url}?w=160&h=160&fit=crop&auto=format,compress`}
                    alt={feature.metadata?.title || feature.title}
                    width="80"
                    height="80"
                    className="rounded-lg"
                  />
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.metadata?.title || feature.title}
              </h3>
              {feature.metadata?.description && (
                <p className="text-gray-600">
                  {feature.metadata.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}