import React, { useState, useRef } from "react"
import { useRouter } from "next/router"


const Collections: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const router = useRouter()
  const collections = [
    {
      src: "/kinnpic/04-home-718x1005-ebd0430f-4415-4469-8370-40774088653f.webp",
      alt: "BRACELETS",
      title: "BRACELETS",
    },
    {
      src: "/kinnpic/RkvBjy0g/5x7-lowres-Gaia-Scallop-Earrings-Gold-1.webp",
      alt: "EARRINGS",
      title: "EARRINGS",
    },
    {
      src: "/kinnpic/5WDgz1QW/03-home-718x1005-3363bab3-a27e-4e75-bbcd-6b2d0b68997f.webp",
      alt: "RINGS",
      title: "RINGS",
    },
    {
      src: "/kinnpic/v44xtYQ1/kinn-14k-gold-fine-jewelry-dear-kaia-iii-necklace-1.webp",
      alt: "NECKLACES",
      title: "NECKLACES",
    },
  ]

  return (
    <div style={{ direction: "ltr" }}>
      <section className="px-0 pt-0">
        <div className="mx-auto max-w-full px-0">
          {/* DESKTOP VIEW */}
          <div className="hidden md:grid grid-cols-4 gap-1">
            {collections.map((item, index) => (
              <div key={index} className="relative group overflow-hidden">
                <a onClick={() => router.push("/fa/shop2")} target="_blank" rel="noopener noreferrer">
                  <div className="relative w-full h-[400px]">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-3">
                      <span className="text-black textarea-md text-center underline underline-offset-2 decoration-black">
                        {item.title}
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* MOBILE VIEW - Taller cards and no extra spacing */}
          <div className="md:hidden relative pt-0">
            <div
              className="flex overflow-x-auto gap-1 px-0 no-scrollbar"
              style={{ scrollSnapType: "x mandatory", scrollPadding: "0 16px" }}
            >
              {collections.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[calc(50%-8px)] snap-start"
                >
                  <a onClick={() => router.push("/fa/shop2")} target="_blank" rel="noopener noreferrer">
                    <div className="relative aspect-[4/5] overflow-hidden group">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-2">
                        <span className="text-black text-sm text-center underline underline-offset-2 decoration-black">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}

export default Collections
