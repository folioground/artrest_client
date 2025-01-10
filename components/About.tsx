'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function About() {
 const ref = useRef<HTMLDivElement>(null)
 const [isVisible, setIsVisible] = useState(false)

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

   if (ref.current) {
     observer.observe(ref.current)
   }

   return () => observer.disconnect()
 }, [])

 return (
   <section id="about" className="min-h-screen py-32 px-4 bg-white">
     <div ref={ref} className="max-w-7xl mx-auto">
       {/* 메인 텍스트 */}
       <div 
         className={`
           text-center mb-32 transition-all duration-1000 ease-out
           ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
         `}
       >
         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
           복잡한 지원사업, 번거로운 포트폴리오까지 한 번에 관리하세요.
         </h2>
         <p className="text-lg md:text-xl text-gray-600">
           ARTREST로 쉽고 편리하게, 예술의 모든 어려움을 해결합니다.
         </p>
       </div>

       {/* 첫 번째 섹션 */}
       <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-32">
         <Image
           src="/image1.jpg"
           alt="Rest In Art"
           width={450}
           height={600}
           className="rounded-lg"
         />
         <div className="md:w-1/2">
           <span className="text-sm font-bold text-gray-500">Rest In Art</span>
           <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-4">
             1%의 영감을 위한 99%의 노력
           </h3>
           <p className="text-gray-600 leading-relaxed">
             1,321개의 지원사업을 일일이 검색하지 마세요. 복잡한 서류작성에 더 이상 좌절하지 마세요. 
             예술가는 오직 예술에만 집중하세요. AI 기술로 구현된 맞춤형 지원사업 매칭, 
             서류작성, 보조금 관리까지. 모든 행정적 부담은 ARTREST가 해결하겠습니다.
           </p>
         </div>
       </div>

       {/* 두 번째 섹션 */}
       <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12">
         <Image
           src="/image2.jpg"
           alt="Grow in Forest"
           width={450}
           height={600}
           className="rounded-lg"
         />
         <div className="md:w-1/2">
           <span className="text-sm font-bold text-gray-500">Grow in Forest</span>
           <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-4">
             예술가의 꿈을 위한 유일한 플랫폼
           </h3>
           <p className="text-gray-600 leading-relaxed">
             예술가의 연 평균 소득은 456만원에 불과합니다. 하지만 이제는 다릅니다. 
             11조 6천억 원 규모의 글로벌 NFT 시장이 당신을 기다립니다. 
             전통적인 갤러리의 높은 진입장벽은 잊으세요. 포트폴리오 관리부터 작품 판매까지, 
             디지털 숲에서의 새로운 꿈을 ARTREST와 함께 펼쳐보세요.
           </p>
         </div>
       </div>
     </div>
   </section>
 )
}