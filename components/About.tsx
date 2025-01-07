'use client'

import { useEffect, useRef, RefCallback } from 'react'

export default function About() {
  // ref 타입을 더 구체적으로 지정
  const textRefs = useRef<Array<HTMLDivElement | null>>([])

  // ref callback의 타입을 명시적으로 지정
  const setRef: RefCallback<HTMLDivElement> = (element: HTMLDivElement | null) => {
    if (element) {
      const index = Number(element.dataset.index)
      textRefs.current[index] = element
    }
  }

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

    textRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="min-h-screen py-20 px-4 bg-black">
      <div className="max-w-3xl mx-auto space-y-32">
        {/* 첫 번째 텍스트 블록 */}
        <div 
          ref={setRef}
          data-index="0"
          className="text-center opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <h1 className="text-2xl md:text-4xl font-bold mb-6">
            "예술가의 모든 순간이 작품이 되는 곳"
          </h1>
        </div>

        {/* 두 번째 텍스트 블록 */}
        <div 
          ref={setRef}
          data-index="1"
          className="text-center opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-300"
        >
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            창작에만 몰입하세요.<br />
            복잡한 나머지는 ARTREST가 해결합니다.
          </p>
        </div>

        {/* 세 번째 텍스트 블록 */}
        <div 
          ref={setRef}
          data-index="2"
          className="text-center opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-500"
        >
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            지원사업 매칭부터 서류 작성, 작품 이력과 포트폴리오까지.<br />
            예술가의 성장을 위한 모든 과정을 한 곳에서.<br />
            ARTREST와 함께 당신의 예술이 꽃피는 숲을 만들어갑니다.
          </p>
        </div>

       {/* 서비스 소개 섹션 */}
       <div 
         ref={setRef}
         data-index="3"
         className="text-center opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-700"
       >
         <div className="grid md:grid-cols-3 gap-8 mt-20">
           <div className="bg-gray-900/50 p-8 rounded-lg">
             <h3 className="text-xl font-bold mb-4">지원사업 관리</h3>
             <div className="text-gray-400 text-left space-y-2">
               <p className="whitespace-nowrap">• AI 기반 맞춤형 지원사업 추천</p>
               <p className="whitespace-nowrap">• AI 서류 작성 도우미</p>
               <p className="whitespace-nowrap">• 실시간 진행상태 관리</p>
               <p className="whitespace-nowrap">• 24시간 챗봇 지원</p>
             </div>
           </div>

           <div className="bg-gray-900/50 p-8 rounded-lg">
             <h3 className="text-xl font-bold mb-4">포트폴리오 & NFT</h3>
             <div className="text-gray-400 text-left space-y-2">
               <p className="whitespace-nowrap">• 디지털 갤러리 포트폴리오</p>
               <p className="whitespace-nowrap">• 맞춤형 레이아웃 제공</p>
               <p className="whitespace-nowrap">• OpenSea 연동 NFT 발행</p>
               <p className="whitespace-nowrap">• NFT 작품 거래 지원</p>
             </div>
           </div>

           <div className="bg-gray-900/50 p-8 rounded-lg">
             <h3 className="text-xl font-bold mb-4">커뮤니티</h3>
             <div className="text-gray-400 text-left space-y-2">
             <p className="whitespace-nowrap">• 예술가 네트워크</p>
               <p className="whitespace-nowrap">• 멘토링 프로그램</p>
               <p className="whitespace-nowrap">• 정보 공유 포럼</p>
               <p className="whitespace-nowrap">• 큐레이터/갤러리 매칭</p>
             </div>
           </div>
         </div>
       </div>
     </div>
   </section>
 )
}