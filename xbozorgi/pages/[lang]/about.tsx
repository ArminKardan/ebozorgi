import Component, { PageEl } from "@/frontend/components/qecomps/Component"
import type { GetServerSideProps, GetServerSidePropsContext } from "next"
import Navbar from "@/frontend/components/navbar"
import CollectionsSection from "@/frontend/components/CollectionsSection"
import BestSeller from "@/frontend/components/bestseller"
import Footer from "@/frontend/components/footersection"
import Layout from "@/frontend/components/Layout"
export default (p) => Component(p, Page)

const Page: PageEl = (props: {} & { [key: string]: any }, refresh, getProps, onLoad, onConnected, dies, isFront, z) => {
  return (
    <Layout>
      <>
        <div className="about-container" style={{ direction: "ltr" }}>
          <div className="about-image">
            <img
              src="\kinnpic\About_Page.webp"
              alt="About Asma Bozorgi"
            />
          </div>
          <div className="about-text">
            <h1>About</h1>
            <h2>AB Jewelry</h2>
            <p>
              Founded in 2015, Asma Bozorgi was born from a passion for detail,
              elegance, and handcrafted artistry. In our atelier, each garment
              is created with care and precision—from intricate beadwork and
              delicate hand-finishing to modern laser cuts that add a unique
              edge to every piece. Our designs are more than just clothing; they
              reflect personality and taste. We create for those who see beauty
              in every stitch and every sparkle.
            </p>
          </div>
        </div>

        <style jsx>{`
          .about-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 60px 8%;
            padding-top: 165px;
          }

          .about-image img {
            width: 60%;
            min-width: 500px;
            height: auto;
          }

          .about-text {
            padding: 8%;
            color: #1b1c1d;
          }

          .about-text h1 {
            font-size: 32px;
            margin-bottom: 10px;
          }

          .about-text h2 {
            font-size: 24px;
            margin-bottom: 20px;
            font-weight: 500;
          }

          .about-text p {
            font-size: 16px;
            line-height: 1.6;
          }

          @media (max-width: 768px) {
            .about-container {
              flex-direction: column;
              text-align: center;
              padding: 40px 5%;
              padding-top: 165px;
            }

            .about-image img {
              width: 100%;
              min-width: 300px;
              height: auto;
            }

            .about-text h1 {
              font-size: 28px;
            }

            .about-text h2 {
              font-size: 20px;
            }
          }
        `}</style>
      </>
    </Layout>
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
        title: "Bozorgi Jewelry",
        description: "test description",
        
      },
    },
    context
  )

  return obj
}
