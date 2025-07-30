import Component, { PageEl } from "@/frontend/components/qecomps/Component"
import type { GetServerSideProps, GetServerSidePropsContext } from "next"
import Navbar from "@/frontend/components/navbar"
import CollectionsSection from "@/frontend/components/CollectionsSection"
import BestSeller from "@/frontend/components/bestseller"
import Footer from "@/frontend/components/footersection"
export default (p) => Component(p, Page)

const Page: PageEl = (props: {} & { [key: string]: any }, refresh, getProps, onLoad, onConnected, dies, isFront, z) => {
  return (
    <div
      style={{ direction: z.lang.dir, padding: 0, backgroundColor: "white" }}
    >
      <Navbar />

      <div className="hero-section">
        <img
          src="https://cdn.ituring.ir/qeupload/mxjpqoAYwanzTCMcfYXx/og9oyycfxdqaft1xjti3y5.jpeg"
          alt="Hero Banner"
          className="hero-image"
        />
      </div>
      <CollectionsSection />
      <div className="hero-section">
        <img
          src="https://cdn.ituring.ir/qeupload/mxjpqoAYwanzTCMcfYXx/85mye8di3xqa3ykxu52ic.png"
          alt="Hero Banner"
          className="hero-image"
        />
      </div>
      <BestSeller />
      <div className="footer-section">
        <img
          src="https://cdn.ituring.ir/qeupload/mxjpqoAYwanzTCMcfYXx/7dsjixutpu5bzyap20e3rv.jpeg"
          alt="Hero Banner"
          className="hero-image"
        />
      </div>
      <div style={{ direction: "ltr" }}>
        <Footer />
      </div>


      <style jsx>{`
        .hero-section {
          width: 100%;
          height: 100%;
          overflow: hidden;
          position: relative;
        }
        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .footer-section {
          width: 100%;
          height: 620px;
          overflow: hidden;
          position: relative;
        }

        .footer-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        @media (max-width: 200px) {
          .footer-image {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  var session = await ((await import('@/backend/SSRVerify.ts')).SSRVerify)(context, false, [])

  
  
  

  let obj = await Prosper(
    {
      props: {
        
        
        
        session,
        title: "test title",
        description: "test description",
        
      },
    },
    context
  )

  return obj
}
