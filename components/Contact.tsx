import { ContactInfo } from '@/types'

interface ContactProps {
  contactInfo: ContactInfo
}

export default function Contact({ contactInfo }: ContactProps) {
  const { metadata } = contactInfo

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600">
            We'd love to hear from you. Reach out to us today.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {metadata?.email && (
            <div className="text-center p-6 bg-white rounded-lg shadow-md animate-fade-in">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <a 
                href={`mailto:${metadata.email}`}
                className="text-primary hover:text-primary-dark transition-colors"
              >
                {metadata.email}
              </a>
            </div>
          )}
          
          {metadata?.phone && (
            <div className="text-center p-6 bg-white rounded-lg shadow-md animate-fade-in">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <a 
                href={`tel:${metadata.phone}`}
                className="text-primary hover:text-primary-dark transition-colors"
              >
                {metadata.phone}
              </a>
            </div>
          )}
          
          {metadata?.address && (
            <div className="text-center p-6 bg-white rounded-lg shadow-md animate-fade-in">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600 whitespace-pre-line">
                {metadata.address}
              </p>
            </div>
          )}
        </div>
        
        {metadata?.social_links && (
          <div className="mt-12 flex justify-center gap-6 animate-fade-in">
            {metadata.social_links.facebook && (
              <a
                href={metadata.social_links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-primary hover:text-white transition-all duration-200"
                aria-label="Facebook"
              >
                <span className="text-xl">f</span>
              </a>
            )}
            {metadata.social_links.twitter && (
              <a
                href={metadata.social_links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-primary hover:text-white transition-all duration-200"
                aria-label="Twitter"
              >
                <span className="text-xl">𝕏</span>
              </a>
            )}
            {metadata.social_links.instagram && (
              <a
                href={metadata.social_links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-primary hover:text-white transition-all duration-200"
                aria-label="Instagram"
              >
                <span className="text-xl">📷</span>
              </a>
            )}
            {metadata.social_links.linkedin && (
              <a
                href={metadata.social_links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-primary hover:text-white transition-all duration-200"
                aria-label="LinkedIn"
              >
                <span className="text-xl">in</span>
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  )
}