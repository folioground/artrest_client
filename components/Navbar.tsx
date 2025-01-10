'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  const handleKakaoChat = () => {
    window.open('http://pf.kakao.com/_sxlLjn/chat', '_blank')
  }

  return (
    <>
      <nav className="fixed w-full z-50 bg-white/100 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* 로고 */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/A_logo_top.svg"
                  alt="ARTREST"
                  width={20}
                  height={20}
                  className="h-6 w-auto"
                />
              </Link>
            </div>

            {/* 데스크톱 메뉴 */}
            <div className="hidden md:flex items-center space-x-8">
              <a 
                href="#about" 
                onClick={(e) => handleScroll(e, 'about')}
                className="text-gray-600 hover:text-black transition-colors cursor-pointer"
              >
                About
              </a>
              <Link 
                href="/support" 
                className="text-gray-600 hover:text-black transition-colors"
              >
                지원사업
              </Link>
              <Link 
                href="/portfolio" 
                className="text-gray-600 hover:text-black transition-colors"
              >
                포트폴리오
              </Link>
              <Link 
                href="/community" 
                className="text-gray-600 hover:text-black transition-colors"
              >
                커뮤니티
              </Link>
              <button 
                onClick={handleKakaoChat}
                className="bg-[#FFE812] text-black px-6 py-2 rounded-full hover:bg-[#F2DC00] transition-colors flex items-center space-x-2"
              >
                <div className="w-5 h-5 relative">
                  <Image 
                    src="/kakao-chat.svg"
                    alt="카카오톡 채팅"
                    fill
                    className="object-contain"
                  />
                </div>
                <span>문의하기</span>
              </button>
            </div>

            {/* 모바일 메뉴 버튼 */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-black"
                aria-label="메뉴 열기"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 모바일 사이드 메뉴 */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* 배경 오버레이 */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* 사이드 메뉴 */}
          <div className="fixed right-0 top-0 bottom-0 w-64 bg-white shadow-lg">
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <span className="text-gray-900 font-bold">메뉴</span>
              <button 
                onClick={() => setIsOpen(false)}
                aria-label="메뉴 닫기"
              >
                <X size={24} className="text-gray-600" />
              </button>
            </div>

            <div className="flex flex-col p-4">
              <a 
                href="#about"
                onClick={(e) => handleScroll(e, 'about')}
                className="py-3 text-gray-600 hover:text-black transition-colors"
              >
                About
              </a>
              <Link 
                href="/support"
                className="py-3 text-gray-600 hover:text-black transition-colors"
                onClick={() => setIsOpen(false)}
              >
                지원사업
              </Link>
              <Link 
                href="/portfolio"
                className="py-3 text-gray-600 hover:text-black transition-colors"
                onClick={() => setIsOpen(false)}
              >
                포트폴리오
              </Link>
              <Link 
                href="/community"
                className="py-3 text-gray-600 hover:text-black transition-colors"
                onClick={() => setIsOpen(false)}
              >
                커뮤니티
              </Link>
              <button
                onClick={() => {
                  handleKakaoChat()
                  setIsOpen(false)
                }}
                className="py-3 flex items-center space-x-2 text-[#3A1D1D] hover:text-[#FFE812] transition-colors"
              >
                <div className="w-5 h-5 relative">
                  <Image 
                    src="/kakao-chat.svg"
                    alt="카카오톡 채팅"
                    fill
                    className="object-contain"
                  />
                </div>
                <span>카카오톡 문의</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}