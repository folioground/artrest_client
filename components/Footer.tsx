'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook } from 'lucide-react'


export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* 소셜 미디어 섹션 */}
        <div className="flex gap-4 mb-12 pt-8">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
            <Instagram size={24} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
            <Facebook size={24} />
          </a>
          <a href="https://blog.naver.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
            <Image src="/naver-icon.svg" alt="Naver Blog" width={24} height={24} />
          </a>
        </div>

        {/* 로고 섹션 */}
        <div className="mb-8">
          <Image src="/A_logo_top.svg" alt="ARTREST" width={140} height={32} />
        </div>

        {/* 회사 정보 섹션 */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-2">
            <p className="text-gray-900 font-small">폴리오그라운드</p>
            <p className="text-gray-600">대표 금성윤</p>
            <p className="text-gray-600">서울특별시 영등포구 버드나루로7길</p>
            <p className="text-gray-600">사업자등록번호: 000-00-00000</p>
          </div>
          
          <div className="space-y-2">
            <div className="space-x-4">
              <Link href="/company" className="text-gray-600 hover:text-gray-900">회사소개</Link>
              <span className="text-gray-600">고객센터</span>
            </div>
            <div>
              <span className="text-gray-600">제휴/광고 문의: </span>
              <a href="mailto:folioground@gmail.com" className="text-gray-600 hover:text-gray-900">
                folioground@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* 이용약관 및 정책 섹션 */}
        <div className="flex flex-wrap items-center justify-between border-t border-gray-200 pt-8">
          <div className="space-x-6">
            <Link href="/terms" className="text-gray-500 hover:text-gray-700">이용약관</Link>
            <Link href="/privacy" className="text-gray-500 hover:text-gray-700">개인정보처리방침</Link>
            <Link href="/business" className="text-gray-500 hover:text-gray-700">사업자정보확인</Link>
          </div>
          
          <p className="text-gray-500 mt-4 md:mt-0">
            © 2025 ARTREST. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}