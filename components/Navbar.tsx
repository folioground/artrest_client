'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

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

  const handleComingSoon = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowPopup(true)
  }

  return (
    <>
      <nav className="fixed w-full z-50 bg-white/100 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* 로고 */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <img 
                  src="/A_logo_top.svg"
                  alt="ARTREST"
                  className="h-6 w-auto"
                />
              </a>
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
              <a 
                href="#" 
                onClick={handleComingSoon}
                className="text-gray-600 hover:text-black transition-colors"
              >
                지원사업
              </a>
              <a 
                href="#" 
                onClick={handleComingSoon}
                className="text-gray-600 hover:text-black transition-colors"
              >
                포트폴리오
              </a>
              <a 
                href="#" 
                onClick={handleComingSoon}
                className="text-gray-600 hover:text-black transition-colors"
              >
                커뮤니티
              </a>
              <button 
                onClick={handleKakaoChat}
                className="bg-[#FFE812] text-black px-6 py-2 rounded-full hover:bg-[#F2DC00] transition-colors flex items-center space-x-2"
              >
                <div className="w-5 h-5 relative">
                  <img 
                    src="/kakao-chat.svg"
                    alt="카카오톡 채팅"
                    className="w-full h-full object-contain"
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
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
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
              <a 
                href="#"
                onClick={handleComingSoon}
                className="py-3 text-gray-600 hover:text-black transition-colors"
              >
                지원사업
              </a>
              <a 
                href="#"
                onClick={handleComingSoon}
                className="py-3 text-gray-600 hover:text-black transition-colors"
              >
                포트폴리오
              </a>
              <a 
                href="#"
                onClick={handleComingSoon}
                className="py-3 text-gray-600 hover:text-black transition-colors"
              >
                커뮤니티
              </a>
              <button
                onClick={() => {
                  handleKakaoChat()
                  setIsOpen(false)
                }}
                className="py-3 flex items-center space-x-2 text-[#3A1D1D] hover:text-[#FFE812] transition-colors"
              >
                <div className="w-5 h-5 relative">
                  <img 
                    src="/kakao-chat.svg"
                    alt="카카오톡 채팅"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span>문의하기</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 준비중 팝업 */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowPopup(false)}
          />
          <div className="relative bg-white rounded-lg p-6 max-w-sm mx-4">
            <h3 className="text-lg font-semibold mb-2">서비스 준비중</h3>
            <p className="text-gray-600 mb-4">
              해당 서비스는 현재 준비중입니다.<br></br>서비스에 대해 궁금하신 점은 문의하기를 눌러주세요.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="w-full bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors"
            >
              확인
            </button>
          </div>
        </div>
      )}
    </>
  )
}