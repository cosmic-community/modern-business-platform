import { ContactInfo } from '@/types'

interface FooterProps {
  contactInfo: ContactInfo
}

export default function Footer({ contactInfo }: FooterProps) {
  const { metadata } = contactInfo

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {metadata?.footer_text && (
            <p className="text-gray-400">
              {metadata.footer_text}
            </p>
          )}
        </div>
      </div>
    </footer>
  )
}