import Component, { PageEl } from "@/frontend/components/qecomps/Component"
import type { GetServerSideProps, GetServerSidePropsContext } from "next"
import Navbar from "@/frontend/components/navbar"
import CollectionsSection from "@/frontend/components/CollectionsSection"
import BestSeller from "@/frontend/components/bestseller"
import Footer from "@/frontend/components/footersection"
import Layout from "@/frontend/components/Layout"
import Collections from "@/frontend/components/Collections"
import collections, { allProducts } from "@/frontend/data/collections"
import ProductsGrid from "@/frontend/components/ProductsGrid"
export default (p) => Component(p, Page)

const Page: PageEl = (props: {} & { [key: string]: any }, refresh, getProps, onLoad, onConnected, dies, isFront, z) => {
  return (
    <Layout>
      <>
        <h1 className="contact-heading">
          {" "}
          Shop{" "}
        </h1>
        

        <div style={{ paddingRight: 50, paddingLeft: 50 }}>
          <ProductsGrid products={allProducts} />
        </div>

        <style jsx>{`
          .input-group.with-icon {
            position: relative;
          }

          .input-group.with-icon .input-icon {
            position: absolute;
            right: 12px;
            top: 50%;
            transform: translateY(-50%);
            width: 20px;
            height: 20px;
            pointer-events: none;
          }

          .contact-heading {
            font-size: 32px;
            margin-bottom: 40px;
            color: #232222;
            text-align: center;
            width: 100%;
            padding-top: 160px;
          }

          
        `}</style>
      </>
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
