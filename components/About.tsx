export default function About() {
    return (
      <section id="brand" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">브랜드 소개</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">This project was a rebranding of an expensive jewelry brand.</h3>
              <p className="text-gray-400">
                The brand needed a branding that emphasized its antique and classic jewelry.
                ARTREST.는 예술적 가치와 클래식한 감성을 현대적으로 재해석하여 제시합니다.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">고객을 위한 가치</h3>
              <p className="text-gray-400">
                1%의 영감을 위한 99%의 노력으로 최상의 결과물을 제공합니다.
                우리는 예술과 자연이 조화를 이루는 공간에서 새로운 영감을 발견합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
