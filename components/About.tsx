// components/About.tsx
'use client'

import { useEffect, useRef } from 'react'

export default function About() {
 const textRef = useRef<HTMLDivElement>(null)

 useEffect(() => {
   const observer = new IntersectionObserver(
     (entries) => {
       entries.forEach((entry) => {
         if (entry.isIntersecting) {
           entry.target.classList.add('opacity-100', 'translate-y-0')
         }
       })
     },
     {
       threshold: 0.1,
     }
   )

   if (textRef.current) {
     observer.observe(textRef.current)
   }

   return () => observer.disconnect()
 }, [])

 return (
   <section id="about" className="min-h-[45vh] py-32 px-4 bg-white">
     <div className="max-w-4xl mx-auto">
       <div 
         ref={textRef}
         className="text-center opacity-0 translate-y-10 transition-all duration-1000 ease-out"
       >
         <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-6">
           <span className="md:inline block">복잡한 지원사업, 번거로운 포트폴리오까지</span>
           <span className="md:inline block mt-2 md:mt-0"> 한 번에 관리하세요.</span>
         </h2>
         <p className="text-lg md:text-xl text-gray-600">
           <span className="md:inline block">ARTREST로 쉽고 편리하게, </span>
           <span className="md:inline block mt-1 md:mt-0">예술의 모든 어려움을 해결합니다.</span>
         </p>
       </div>
     </div>
   </section>
 )
}