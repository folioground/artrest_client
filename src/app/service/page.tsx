import type { Metadata } from 'next'
import Services from '../../../components/Services'

export const metadata: Metadata = {
  title: 'ARTREST | 예술가를 위한 종합 플랫폼',
  description: '지원사업 매칭부터 AI 서류작성, NFT 갤러리, 커뮤니티까지 - 예술가의 모든 것을 한 곳에서 관리하세요.',
  openGraph: {
    title: 'ARTREST 서비스 소개',
    description: '예술가를 위한 원스톱 플랫폼 ARTREST - AI 기반 지원사업 매칭, 서류 작성, NFT 갤러리, 커뮤니티',
    url: 'https://artrest.art/service',
    siteName: 'ARTREST',
    type: 'website',
    images: [
      {
        url: '/og-service-image.jpg', // Open Graph 이미지 추가 필요
        width: 1200,
        height: 630,
        alt: 'ARTREST 서비스 소개'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARTREST | 예술가를 위한 종합 플랫폼',
    description: '지원사업 매칭부터 AI 서류작성, NFT 갤러리, 커뮤니티까지 - 예술가의 모든 것을 한 곳에서 관리하세요.',
    images: ['/og-service-image.jpg']
  }
}

export default function ServicePage() {
  return <Services />
}