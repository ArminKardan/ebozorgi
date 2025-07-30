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

  const router = useRouter()

  return (
    <Layout isIndex={isIndex}>
      <div dir="ltr" className="max-w-3xl mx-auto px-4 py-10 pt-60 text-gray-800">
        <h1 className="text-4xl font-bold mb-8">
          Legal Notice
        </h1>

        <div className="space-y-6 text-base leading-7">
          <p>
            This Distance Sales Agreement is made between the Customer ("Buyer")
            and Bozorgi Jewelry ("Seller").
          </p>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              1. Seller Information
            </h2>
            <p>
              <strong>Name:</strong> Asma Bozorgi
              <br />
              <strong>Email:</strong>{" "}
              <a
                href="mailto:bozorgijewelryinfo@yahoo.com"
                className="text-blue-600 underline"
              >
                bozorgijewelryinfo@yahoo.com
              </a>
              <br />
              <strong>Phone:</strong> +1 (202) 908-8993
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              2. Product Information
            </h2>
            <p>
              Details of the goods or services, including price, taxes, delivery
              costs, and payment methods, are listed on the product pages and
              confirmed during checkout.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. Order & Payment</h2>
            <p>
              The Buyer confirms the order electronically and agrees to pay the
              total amount including any applicable shipping charges.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. Delivery</h2>
            <p>
              Products will be shipped to the address provided by the Buyer
              within the period specified at checkout. Delays due to unforeseen
              circumstances will be communicated.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              5. Right of Withdrawal
            </h2>
            <p>
              The Buyer has the right to withdraw from the contract within 14
              days of receiving the product without giving any reason. To
              initiate a return, contact:{" "}
              <a
                href="mailto:bozorgijewelryinfo@yahoo.com"
                className="text-blue-600 underline"
              >
                bozorgijewelryinfo@yahoo.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              6. Exceptions to Withdrawal
            </h2>
            <p>
              Custom-made or personalized items are not eligible for return
              unless faulty.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              7. Dispute Resolution
            </h2>
            <p>
              This agreement is governed by applicable consumer protection laws.
              Any disputes may be resolved through alternative dispute
              resolution or competent courts.
            </p>
          </section>
        </div>
      </div>
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
