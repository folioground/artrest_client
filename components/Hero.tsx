'use client'

import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

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
        {/* A 로고만 크게 표시 */}
        <div className="mb-4">
          <Image 
            src="/A_logo.svg" 
            alt="ARTREST Logo" 
            width={500}
            height={500}
            className="mx-auto" // 크기를 w-24 h-24에서 w-48 h-48로 증가
          />
        </div>
        {/* 지원사업 버튼 */}
        <div className="mt-12">
          <Link 
            href="/support" 
            className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors"
          >
            내 지원사업 한번에 찾기
          </Link>
        </div>
      </div>

      {/* 스크롤 화살표 */}
      <button 
        onClick={handleScroll}
        className="absolute bottom-8 animate-bounce opacity-50 hover:opacity-100 transition-opacity"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  )
}
