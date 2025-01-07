'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-black">
      <div className="text-center space-y-8">
        <div className="mb-4">
          <Image 
            src="/A_logo.svg" 
            alt="ARTREST Logo" 
            width={500}
            height={500}
            className="mx-auto"
          />
        </div>
        
        <p className="text-xl md:text-2xl text-gray-300">Rest in Art, Grow in Forest</p>
        
        <div className="mt-12">
          <Link 
            href="/support" 
            className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors"
          >
            내 지원사업 한번에 찾기
          </Link>
        </div>
      </div>

      <button 
        onClick={handleScroll}
        className="absolute bottom-8 animate-bounce opacity-50 hover:opacity-100 transition-opacity"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  )
}