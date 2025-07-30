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
        <h1 className="heading">!Comming soon</h1> 
        <p className="sub-heading">...Under Development</p>

        <style jsx>{`
          

          .heading {
            font-size: 32px;
            font-weight: 600;
            color: #232222;
            text-align: center;
            width: 100%;
            padding-top: 260px;
          }

          .sub-heading {
            font-size: 18px;
            font-weight: 300;
            margin-bottom: 160px;
            color: #232222;
            text-align: center;
            width: 100%;
            padding-top: 18px;
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
