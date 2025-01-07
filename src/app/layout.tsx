import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Metadata } from 'next'

// Inter 폰트 설정
const inter = Inter({ subsets: ['latin'] })

// 메타데이터 타입 정의
export const metadata: Metadata = {
  title: 'ARTREST. | Rest in Art, Grow in Forest',
  description: '1%의 영감을 위한 99%의 노력을 해결합니다.',
  openGraph: {
    title: 'ARTREST.',
    description: 'Rest in Art, Grow in Forest',
    url: 'https://artrest.art',
    siteName: 'ARTREST.',
    type: 'website',
  },
}

// RootLayout props 타입 정의
interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}