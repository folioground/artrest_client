'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react'
import { Navigation, Pagination, A11y, Mousewheel } from 'swiper/modules'
import { ErrorBoundary } from 'react-error-boundary'
import Script from 'next/script'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// 인터페이스 정의
interface Category {
  name: string
  emoji: string
}

interface ServiceBase {
  id: string
  title: string
  description: string
  alt: string
}

interface CategoryService extends ServiceBase {
  type: 'category'
  categories: Category[]
  buttonText: string
  buttonLink: string
}

interface ImageService extends ServiceBase {
  type: 'image'
  image: string
}

type Service = CategoryService | ImageService

const services: Service[] = [
  {
    id: 'main',
    type: 'category',
    title: '이젠 직접 찾지 마세요\nARTREST가 찾아드릴게요',
    description: '예술인활동증명서만 준비해 주세요.\n클릭 한 번이면 지원사업을 찾아서 추천해 드립니다.',
    alt: '지원사업 매칭 서비스 소개',
    categories: [
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
      { name: '만화', emoji: '🎨' }
    ],
    buttonText: '내 지원사업 한번에 찾기',
    buttonLink: '/support'
  },
  {
    id: 'ai-assistant',
    type: 'image',
    title: '복잡한 서류 작성, 영수증 관리도\nARTREST에서 해결하세요',
    description: '키워드만 입력하면 AI가 맞춤형 문서를 완성합니다.\n사업비 정산부터 영수증 관리, 보고서 작성까지.\n귀찮은 행정 업무를 모두 자동화하세요.',
    image: '/service-ai.jpg',
    alt: 'AI 서류 작성 도우미 서비스 소개'
  },
  {
    id: 'nft-portfolio',
    type: 'image',
    title: '작품 하나로 전 세계를 연결하다\nARTREST 디지털 갤러리',
    description: '귀찮은 포트폴리오 관리도 디지털 갤러리에서 시작하세요.\n클릭 한 번으로 전시부터 판매까지.\n11조원의 글로벌 NFT 시장에서 당신의 가치를 높이세요.',
    image: '/service-nft.jpg',
    alt: 'NFT와 포트폴리오 관리 서비스 소개'
  },
  {
    id: 'community',
    type: 'image',
    title: '예술가의 첫걸음부터 성공까지,\nARTREST 커뮤니티',
    description: '혼자가 아닙니다. 서로의 노하우를 공유하며 함께 성장하세요.\n지원사업 합격 비결부터 NFT 판매 전략까지.\n특별한 커뮤니티에서 창작과 커리어를 한 단계 더 높여보세요.',
    image: '/service-community.jpg',
    alt: 'ARTREST 커뮤니티 서비스 소개'
  }
]

// 커스텀 훅: 미디어 쿼리 감지

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
  </div>
)

const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div role="alert" className="p-4 text-center">
    <h2 className="text-xl font-bold mb-4">문제가 발생했습니다</h2>
    <p className="mb-4">{error.message}</p>
    <button onClick={resetErrorBoundary} className="px-4 py-2 bg-gray-900 text-white rounded-lg">
      다시 시도하기
    </button>
  </div>
)

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    const updateMatch = (e: MediaQueryListEvent | MediaQueryList) => {
      setMatches(e.matches)
    }
    setMatches(media.matches)

    media.addEventListener('change', updateMatch)
    return () => media.removeEventListener('change', updateMatch)
  }, [query])

  return matches
}

const navigationStyles = `
  .swiper {
    width: 100%;
    height: 100vh;
  }

  @media (min-width: 769px) {
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
      right: 52px;
      border-right: 3.5px solid #666;
      border-bottom: 3.5px solid #666;
    }

    .swiper-button-prev {
      left: 52px;
      border-left: 3.5px solid #666;
      border-top: 3.5px solid #666;
    }
  }

  @media (max-width: 768px) {
    .swiper {
      height: 100vh !important;
    }
    
    .swiper-slide {
      height: auto !important;
    }

    .swiper-pagination {
      right: 10px !important;
      left: auto !important;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    display: none;
  }

  .swiper-pagination-bullet {
    background: #666;
    opacity: 0.5;
    margin: 0 !important;
    transition: all 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    background: #000;
    opacity: 1;
    transform: scale(1.2);
  }
`

// ... (ErrorFallback 및 LoadingSpinner 컴포넌트는 그대로 유지)

export default function Service() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const isMobile = useMediaQuery('(max-width: 768px)')

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) return <LoadingSpinner />

  const swiperParams: SwiperProps = {
    modules: [Navigation, Pagination, A11y, Mousewheel],
    spaceBetween: 0,
    slidesPerView: 1,
    direction: isMobile ? 'vertical' : 'horizontal',
    mousewheel: isMobile,
    loop: true,
    navigation: !isMobile ? {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    } : false,
    pagination: {
      clickable: true,
      type: 'bullets',
    },
    onSlideChange: (swiper) => setCurrentSlide(swiper.activeIndex)
  }

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => setCurrentSlide(0)}
    >
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
            },
          })
        }}
      />

      <style jsx global>{navigationStyles}</style>

      <div className="h-screen w-full">
        <Swiper {...swiperParams}>
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <section className="min-h-screen py-16 md:py-24 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-12">
                  <div className="w-full md:w-5/12 text-center md:text-left">
                    <h2 className="text-[28px] leading-[1.4] font-bold text-gray-900 mb-6 whitespace-pre-line">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 whitespace-pre-line">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="w-full md:w-6/12">
                    {service.type === 'category' ? (
                      <div className="flex flex-col justify-center h-full pt-8 md:pt-20">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {service.categories.map((category) => (
                            <button
                              key={category.name}
                              className="flex items-center justify-center px-4 py-3 rounded-xl bg-gray-50 text-gray-700 hover:bg-gray-100 transition-all duration-300"
                            >
                              <span>{category.name}</span>
                              <span className="ml-2">{category.emoji}</span>
                            </button>
                          ))}
                        </div>
                        <div className="mt-8 text-center md:text-right">
                          <Link href={service.buttonLink}>
                            <button className="px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-300">
                              {service.buttonText}
                            </button>
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <div className="relative aspect-[4/3] bg-gray-50 rounded-2xl overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority={service.id === 'ai-assistant'}
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </section>
            </SwiperSlide>
          ))}
          
          {!isMobile && (
            <>
              <div className="swiper-button-prev" aria-label="이전 서비스" />
              <div className="swiper-button-next" aria-label="다음 서비스" />
            </>
          )}
        </Swiper>
      </div>
    </ErrorBoundary>
  )
}