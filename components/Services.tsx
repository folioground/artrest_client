export default function Services() {
    return (
      <section id="service" className="py-20 px-4"> 
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            서비스
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* 서비스 1: 브랜딩 */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">브랜딩</h3>
              <p className="text-gray-400">
                기업의 정체성을 담아내는 디자인 솔루션을 제공합니다. 로고부터 브랜드 가이드라인까지 일관된 브랜드 경험을 설계합니다.
              </p>
            </div>
  
            {/* 서비스 2: 웹사이트 */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">웹사이트</h3>
              <p className="text-gray-400">
                최신 기술과 트렌드를 반영한 반응형 웹사이트를 제작합니다. SEO 최적화와 사용자 경험을 고려한 디자인을 제공합니다.
              </p>
            </div>
  
            {/* 서비스 3: 마케팅 */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">마케팅</h3>
              <p className="text-gray-400">
                브랜드 가치를 효과적으로 전달하는 마케팅 전략을 수립합니다. 온라인 광고부터 콘텐츠 제작까지 통합 마케팅을 지원합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  