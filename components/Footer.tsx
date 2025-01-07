export default function Footer() {
    return (
      <footer className="py-12 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ARTREST.</h3>
              <p className="text-gray-400">Rest in Art, Grow in Forest</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">브랜드</h4>
              <ul className="space-y-2 text-gray-400">
                <li>소개</li>
                <li>철학</li>
                <li>연혁</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">서비스</h4>
              <ul className="space-y-2 text-gray-400">
                <li>브랜딩</li>
                <li>디자인</li>
                <li>마케팅</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">문의</h4>
              <ul className="space-y-2 text-gray-400">
                <li>연락처</li>
                <li>위치</li>
                <li>채용정보</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} ARTREST. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }