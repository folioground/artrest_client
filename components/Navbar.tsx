'use client'
import Link from 'next/link'

export default function Navbar() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              ARTREST.
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#brand" 
              onClick={(e) => handleScroll(e, 'brand')}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              BRAND
            </a>
            <a 
              href="#service"
              onClick={(e) => handleScroll(e, 'service')}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              SERVICE
            </a>
            <Link 
              href="/contact" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              CONTACT
            </Link>
            <Link 
              href="/inquiry" 
              className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              문의하기
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}