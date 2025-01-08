'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'

const categories = [
 { name: '문학', emoji: '📚' },
 { name: '일반미술', emoji: '🎨' },
 { name: '디자인', emoji: '💻' },
 { name: '공예', emoji: '🏺' },
 { name: '전통미술', emoji: '🖼️' },
 { name: '사진', emoji: '📷' },
 { name: '건축', emoji: '🏛️' },
 { name: '일반음악', emoji: '🎵' },
 { name: '대중음악', emoji: '🎸' },
 { name: '국악', emoji: '🥁' },
 { name: '무용', emoji: '💃' },
 { name: '연극', emoji: '🎭' },
 { name: '영화', emoji: '🎬' },
 { name: '방송', emoji: '📺' },
 { name: '공연', emoji: '🎪' },
 { name: '만화', emoji: '🎨' },
]

export default function Service() {
 const [isVisible, setIsVisible] = useState(false)
 const componentRef = useRef(null)

 useEffect(() => {
   const observer = new IntersectionObserver(
     ([entry]) => {
       if (entry.isIntersecting) {
         setIsVisible(true)
       } else {
         setIsVisible(false)
       }
     },
     { threshold: 0.1 }
   )

   if (componentRef.current) {
     observer.observe(componentRef.current)
   }

   return () => observer.disconnect()
 }, [])

 return (
   <section ref={componentRef} className="min-h-screen py-20 px-4 md:px-8 bg-white">
     <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between">
       {/* 왼쪽 텍스트 영역 */}
       <div 
         className={`
           w-full md:w-5/12 mb-12 md:mb-0 text-center md:text-left
           transition-all duration-1000 ease-out
           ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
         `}
       >
         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
           <span className="block">이젠 직접 찾지 마세요</span>
           <span className="block mt-2">ARTREST가 찾아드릴게요</span>
         </h2>
         <p className="text-lg text-gray-600 mb-2">
           예술인활동증명서만 준비해 주세요.
         </p>
         <p className="text-lg text-gray-600">
           단 3분만에 지원할 수 있는 사업을 찾아서 추천해 드립니다.
         </p>
       </div>

       {/* 오른쪽 카테고리 영역 */}
       <div 
         className={`
           w-full md:w-6/12
           transition-all duration-1000 ease-out delay-300
           ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
         `}
       >
         <div className="flex flex-wrap gap-3 justify-center md:justify-start">
           {categories.map((category) => (
             <button
               key={category.name}
               className="inline-flex items-center px-4 py-2 rounded-full bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors"
             >
               <span>{category.name}</span>
               <span className="ml-1">{category.emoji}</span>
             </button>
           ))}
         </div>
         {/* 대상자 확인하기 버튼 */}
         <div className="mt-8 text-center md:text-right">
           <Link href="/support">
             <button className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
               내 지원사업 한번에 찾기
             </button>
           </Link>
         </div>
       </div>
     </div>
   </section>
 )
}