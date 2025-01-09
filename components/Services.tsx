'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules'
import Script from 'next/script'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const categories = [
  { name: '문학', emoji: '📚' },
  { name: '미술일반', emoji: '🎨' },
  { name: '디자인·공예', emoji: '💻' },
  { name: '전통미술', emoji: '🖼️' },
  { name: '사진', emoji: '📷' },
  { name: '건축', emoji: '🏛️' },
  { name: '음악일반', emoji: '🎵' },
  { name: '대중음악', emoji: '🎸' },
  { name: '국악', emoji: '🥁' },
  { name: '무용', emoji: '💃' },
  { name: '연극', emoji: '🎭' },
  { name: '영화', emoji: '🎬' },
  { name: '방송', emoji: '📺' },
  { name: '공연', emoji: '🎪' },
  { name: '만화', emoji: '🎨' },
]

const additionalServices = [
  {
    id: 'ai-assistant',
    title: '복잡한 서류 작성, 영수증 관리도\nARTREST에서 해결하세요',
    description: '키워드만 입력하면 AI가 맞춤형 문서를 완성합니다.\n사업비 정산부터 영수증 관리, 보고서 작성까지.\n귀찮은 행정 업무를 모두 자동화하세요.',
    image: '/service-ai.jpg',
    alt: 'AI 서류 작성 도우미 서비스 소개'
  },
  {
    id: 'nft-portfolio',
    title: '작품 하나로 전 세계를 연결하다\nARTREST 디지털 갤러리',
    description: '귀찮은 포트폴리오 관리도 디지털 갤러리에서 시작하세요.\n클릭 한 번으로 전시부터 판매까지.\n11조원의 글로벌 NFT 시장에서 당신의 가치를 높이세요.',
    image: '/service-nft.jpg',
    alt: 'NFT와 포트폴리오 관리 서비스 소개'
  },
  {
    id: 'community',
    title: '예술가의 첫걸음부터 성공까지,\nARTREST 커뮤니티',
    description: '혼자가 아닙니다. 서로의 노하우를 공유하며 함께 성장하세요.\n지원사업 합격 비결부터 NFT 판매 전략까지.\n특별한 커뮤니티에서 창작과 커리어를 한 단계 더 높여보세요.',
    image: '/service-community.jpg',
    alt: 'ARTREST 커뮤니티 서비스 소개'
  }
]

const navigationStyles = `
  .swiper-container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .swiper-button-next,
  .swiper-button-prev {
    position: absolute;
    top: 45%;
    transform: translateY(-50%) rotate(-45deg);
    width: 20px;
    height: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 10;
  }

  .swiper-button-next {
    right: 52px; /* 화살표 위치 */
    border-right: 3.5px solid #666;
    border-bottom: 3.5px solid #666;
  }

  .swiper-button-prev {
    left: 52px; /* 화살표 위치 */
    border-left: 3.5px solid #666;
    border-top: 3.5px solid #666;
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    border-color: #000;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    display: none;
  }

  .swiper-pagination {
    position: absolute !important;
    bottom: 140px !important; /* 위로 올림 */
  }

  .swiper-pagination-bullet {
    background: #666;
    opacity: 0.5;
    transition: all 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    background: #000;
    opacity: 1;
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    .swiper-button-next,
    .swiper-button-prev {
      width: 16px;
      height: 16px;
    }
    .swiper-button-next {
      right: 24px;
    }
    .swiper-button-prev {
      left: 24px;
    }
    .swiper-pagination {
      bottom: 180px !important;
    }
  }
`

export default function Service() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const swiperRef = useRef<SwiperType | null>(null)

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(currentSlide)
    }
  }, [currentSlide])

  return (
    <>
      <Script
        id="schema-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "ARTREST 서비스",
            "description": "예술가를 위한 원스톱 플랫폼 ARTREST",
            "provider": {
              "@type": "Organization",
              "name": "ARTREST",
              "url": "https://artrest.art"
            }
          })
        }}
      />

      <style jsx global>{navigationStyles}</style>

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true} // loop 활성화
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        onSlideChange={(swiper) => {
          setCurrentSlide(swiper.activeIndex)
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        pagination={{ 
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}" aria-label="슬라이드 ${index + 1}로 이동"></span>`
          }
        }}
        className="min-h-[calc(100vh-4rem)] bg-white"
      >
        {/* 첫 번째 슬라이드: 지원사업 매칭 */}
        <SwiperSlide>
          <section className="min-h-[calc(100vh-4rem)] py-16 md:py-24 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-12">
              <div className="w-full md:w-5/12 text-center md:text-left transform transition-all duration-700 ease-out">
                <h2 className="text-[28px] leading-[1.4] font-bold text-gray-900 mb-6">
                  <span className="block">이젠 직접 찾지 마세요</span>
                  <span className="block">ARTREST가 찾아드릴게요</span>
                </h2>
                <p className="text-lg text-gray-600 whitespace-pre-line">
                  예술인활동증명서만 준비해 주세요.<br></br>
                  클릭 한 번이면 지원사업을 찾아서 추천해 드립니다.
                </p>
              </div>

              <div className="w-full md:w-6/12 transform transition-all duration-700 ease-out delay-300">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      className="flex items-center justify-center px-4 py-3 rounded-xl bg-gray-50 text-gray-700 hover:bg-gray-100 hover:scale-105 transform transition-all duration-300"
                    >
                      <span>{category.name}</span>
                      <span className="ml-2">{category.emoji}</span>
                    </button>
                  ))}
                </div>
                <div className="mt-12 text-center md:text-right">
                  <Link href="/support">
                    <button className="px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transform hover:scale-105 transition-all duration-300">
                      내 지원사업 한번에 찾기
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>

        {/* 추가 서비스 슬라이드들 */}
        {additionalServices.map((service) => (
          <SwiperSlide key={service.id}>
            <section className="min-h-[calc(100vh-4rem)] py-16 md:py-24 px-4 md:px-8 bg-white">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-12">
                <div className="w-full md:w-5/12 text-center md:text-left transform transition-all duration-700 ease-out">
                  <h2 className="text-[28px] leading-[1.4] font-bold text-gray-900 mb-6 whitespace-pre-line">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 whitespace-pre-line">
                    {service.description}
                  </p>
                </div>
                <div className="w-full md:w-6/12 transform transition-all duration-700 ease-out delay-300">
                  <div className="relative aspect-[4/3] bg-gray-50 rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-500">
                    {service.image && (
                      <Image
                        src={service.image}
                        alt={service.alt}
                        fill
                        priority
                        className="object-cover"
                      />
                    )}
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev" aria-label="이전 서비스" />
        <div className="swiper-button-next" aria-label="다음 서비스" />
      </Swiper>
    </>
  )
}