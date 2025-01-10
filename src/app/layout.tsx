import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
 title: {
   default: '예술인을 위한 올인원 플랫폼 | ARTREST',
   template: '%s | ARTREST'
 },
 description: '1,321개의 정부지원사업부터 공모전, NFT 포트폴리오 관리까지 예술인을 위한 모든 기회를 한곳에서. AI가 맞춤형 지원사업과 공모전을 추천해드립니다.',
 keywords: ['예술인', '공모전', '지원사업', '정부지원사업', '보조금', '포트폴리오', 'NFT', '갤러리', '예술인커뮤니티'],
 authors: [{ name: 'ARTREST' }],
 creator: 'ARTREST',
 publisher: 'ARTREST',
 openGraph: {
   title: '예술인을 위한 올인원 플랫폼 | ARTREST',
   description: '1,321개의 정부지원사업부터 공모전, NFT 포트폴리오 관리까지 예술인을 위한 모든 기회를 한곳에서.',
   url: 'https://artrest.art',
   siteName: 'ARTREST',
   type: 'website',
   locale: 'ko_KR',
   images: [
     {
       url: 'https://artrest.art/og-image.jpg',
       width: 1200,
       height: 630,
       alt: 'ARTREST - 예술인을 위한 올인원 플랫폼'
     }
   ]
 },
 twitter: {
   card: 'summary_large_image',
   title: '예술인을 위한 올인원 플랫폼 | ARTREST',
   description: '1,321개의 정부지원사업부터 공모전, NFT 포트폴리오 관리까지 예술인을 위한 모든 기회를 한곳에서.',
   images: ['https://artrest.art/og-image.jpg'],
 },
 viewport: {
   width: 'device-width',
   initialScale: 1,
   maximumScale: 1,
 },
 robots: {
   index: true,
   follow: true,
   googleBot: {
     index: true,
     follow: true,
     'max-image-preview': 'large',
     'max-snippet': -1,
   },
 },
 verification: {
   google: 'O-qW5dvnMfw6do3IlX2NDSIuBoBlmffWmimHWBQvWcc'
 },
}

interface RootLayoutProps {
 children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
 return (
   <html lang="ko">
     <head>
       <link rel="canonical" href="https://artrest.art" />
     </head>
     <body className={inter.className}>
       <Navbar />
       <main>{children}</main>
       <Footer />
     </body>
   </html>
 )
}