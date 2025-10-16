export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">
              ModernBiz
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a 
                href="#home" 
                className="text-gray-700 hover:text-primary transition-colors duration-200"
              >
                Home
              </a>
              <a 
                href="#features" 
                className="text-gray-700 hover:text-primary transition-colors duration-200"
              >
                Features
              </a>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-primary transition-colors duration-200"
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-primary transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}