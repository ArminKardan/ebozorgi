import Component, { PageEl } from "@/frontend/components/qecomps/Component"
import type { GetServerSideProps, GetServerSidePropsContext } from "next"
import Navbar from "@/frontend/components/navbar"
import CollectionsSection from "@/frontend/components/CollectionsSection"
import BestSeller from "@/frontend/components/bestseller"
import Footer from "@/frontend/components/footersection"
import Collections from "@/frontend/components/Collections"
import Layout from "@/frontend/components/Layout"
import { useRef } from "react"
import { useRouter } from "next/router"

export default (p) => Component(p, Page)

const Page: PageEl = (props: {} & { [key: string]: any }, refresh, getProps, onLoad, onConnected, dies, isFront, z) => {
  const isIndex = z.path === z.root || z.path === z.root + "/en"
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollTo = (dir: "left" | "right") => {
    const el = carouselRef.current
    if (!el) return
    const step = el.clientWidth
    el.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" })
  }
  const router = useRouter()

  return (
    <Layout isIndex={isIndex}>
      <div className="relative w-full">
        <picture>
          <source
            media="(max-width: 700px)"
            srcSet="\kinnpic\mobileheader.jpg"
          />

          <img
            src="\kinnpic\desktopheader.webp"
            alt="Hero Banner"
            className="w-full h-auto object-cover"
          />
        </picture>

        <div className="hero-text-block">
          <h2 className="text-[20px] md:text-[28px] leading-snug font-light tracking-tight whitespace-nowrap">
            Introducing
            <span className="not-italic">—Courtside Tennis Collection</span>
          </h2>

          <p
            dir="ltr"
            className="text-sm md:text-base leading-relaxed font-light"
          >
            Bespoke engagement and wedding heirlooms for modern love stories —
            classic in quality, unexpected in form.
          </p>

          <a
            onClick={() => router.push("/fa/shop2")}
            className="short-underline text-sm tracking-[0.15em] pb-1 whitespace-nowrap"
          >
            SHOP THE COLLECTION
          </a>
        </div>
      </div>

      <CollectionsSection />

      <div className="hero-section">
        <img
          src="\kinnpic\bath.webp"
          alt="Hero Banner"
          className="w-full object-cover md:block h-[50rem]"
        />
        <div className="description">
          <c-cc>
            <p>LOS ANGELES</p>
            <h1 className="fancy-title">The Flagship Store</h1>
            <p>
              Welcome to the ultimate luxury experience. Choose the perfect
              solid gold gifts in person
            </p>
            <a onClick={() => router.push("/fa/shop2")}>
              <h3 className="shop-link">SHOP IN STORE</h3>
            </a>
          </c-cc>
        </div>
      </div>

      <Collections />

      <c-cc className="qoute-section">
        <div className="qoute">
          ㅤ“We believe jewelry should be something you <br-x />
          <em>
            <strong> never take off</strong>
          </em>
          <strong>. </strong>A companion to your memory,ㅤ <br-x /> made to last
          a lifetime, the kind you'll invest in <br-x /> and pass down." —
          <em>Asma Bozorgi, Founder</em>
        </div>
      </c-cc>

      <div className="hero-section">
        <img
          src="\kinnpic\ring.avif"
          alt="Hero Banner"
          className="w-full object-cover md:block h-[50rem]"
        />
        <div className="description">
          <c-cc>
            <p>LOS ANGELES</p>
            <h1 className="fancy-title">The Flagship Store</h1>
            <p>
              Welcome to the ultimate luxury experience. Choose the perfect
              solid gold gifts in person
            </p>
            <a onClick={() => router.push("/fa/shop2")}>
              <h3 className="shop-link">SHOP IN STORE</h3>
            </a>
          </c-cc>
        </div>
      </div>

      <BestSeller />
      <br-x />
      <br-x />
      <br-x />
      <br-x />
      <br-x />

      <div
        className="relative w-full h-[20rem] sm:h-[25rem] md:h-[46rem] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/kinnpic/home_Press_home_Press_2880x100_desktop.webp')",
        }}
      >
        {/* فلش چپ */}
        <button
          onClick={() => scrollTo("left")}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 hover:scale-110 transition"
          aria-label="Previous Slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white drop-shadow-lg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* آیتم‌های Carousel */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory w-full h-full"
        >
          <div className="min-w-full flex items-center justify-center snap-center">
            <p className="text-white text-2xl md:text-4xl font-sans text-center px-4">
              Elegance is not about being noticed, it’s about being remembered
            </p>
          </div>
          <div className="min-w-full flex items-center justify-center snap-center">
            <p className="text-white text-2xl md:text-4xl font-sans text-center px-4">
              Luxury is in each detail
            </p>
          </div>
          <div className="min-w-full flex items-center justify-center snap-center">
            <p className="text-white text-2xl md:text-4xl font-sans text-center px-4">
              Timeless beauty crafted in solid gold
            </p>
          </div>
        </div>

        {/* فلش راست */}
        <button
          onClick={() => scrollTo("right")}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 hover:scale-110 transition"
          aria-label="Next Slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white drop-shadow-lg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@700&display=swap");
        .hero-text-block {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          gap: 1rem;
          max-width: 50%;
          bottom: 8%;
          left: 3vw;
          color: white;
          animation: fadeIn 3s ease-in-out;
          white-space: normal !important;
        }

        .hero-text-block h2,
        .hero-text-block p,
        .hero-text-block a {
          display: block;
          width: 100%;
          white-space: normal;
        }
        .short-underline {
          position: relative;
          display: inline-block;
          text-decoration: none;
        }

        .short-underline::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          height: 1px;
          width: 25%;
          background-color: white;
          transition: width 0.3s ease;
        }

        .short-underline:hover::after {
          width: 0;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-section,
        .footer-section {
          width: 100%;
          height: 100%;
          overflow: hidden;
          position: relative;
        }

        .hero-image {
          width: 100%;
          height: "auto";
          display: block;
        }

        .qoute-section {
          margin: 30px;
          padding: 20px;
        }

        .qoute {
          font-size: 28px;
          text-align: center;
          width: 100%;
          margin: 20px auto;
          padding: 20px;
        }

        .description {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: white;
          z-index: 2;
          padding: 1rem;
        }

        .fancy-title {
          font-family: "Cinzel", serif;
          font-size: 3rem;
          font-weight: 700;
          margin: 0.5rem 0;
        }

        .shop-link {
          display: inline-block;
          font-size: 1.2rem;
          margin-top: 1rem;
          border-bottom: 2px solid currentColor;
          padding-bottom: 0.2rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .footer-image {
          width: 100%;
          height: 28rem;
          object-fit: cover;
        }

        @media (max-width: 700px) {
          .qoute-section {
            display: none;
          }

          .description p {
            display: none;
          }

          .hero-text-block {
            max-width: 85%;
          }
        }
      `}</style>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  var session = await (
    await import("@/backend/SSRVerify.ts")
  ).SSRVerify(context, false, [])


  let obj = await Prosper(
    {
      props: {
        
        session,
        title: "Bozorgi Jewelry",
        description: "test description",
      },
    },
    context
  )

  return obj
}
