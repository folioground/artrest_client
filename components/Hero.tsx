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
    <section className="relative h-screen flex items-center justify-center">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.jpg" // public 폴더에 배경 이미지를 넣어주세요
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* 배경 오버레이 */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* 컨텐츠 */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-end text-right">
          {/* 메인 슬로건 */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            예술이 쉬워지는 곳,
            <br />
            <span className="mt-3 inline-block">아트레스트.</span>
          </h1>

          {/* 버튼 */}
          
          <div className="mt-8">
            <Link
              href="/support"
              className="inline-block bg-black/40 text-white px-8 py-4 rounded-lg backdrop-blur-sm
                        hover:bg-zinc-800/50 transition-all duration-300"
            >
              내가 놓친 지원사업 한번에 찾기
            </Link>
          </div>
        </div>
      </div>

      {/* 스크롤 화살표 */}
      <button 
        onClick={handleScroll}
        className="absolute bottom-8 z-10 animate-bounce opacity-50 hover:opacity-100 transition-opacity"
      >
        <ChevronDown size={32} className="text-white" />
      </button>
    </section>
  )
}