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

const Page: PageEl = (
  props: {} & { [key: string]: any },
  refresh,
  getProps,
  onLoad,
  onConnected,
  dies,
  isFront,
  z
) => {
  const isIndex = z.path === z.root || z.path === z.root + "/en"
  const carouselRef = useRef<HTMLDivElement>(null)

  const router = useRouter()

  return (
    <Layout isIndex={isIndex}>
      <div
        dir="ltr"
        className="max-w-3xl mx-auto px-4 py-10 pt-60 text-gray-800"
      >
        <h1 className="text-4xl font-bold mb-8">Legal Notice</h1>

        <div className="space-y-6 text-base leading-7">
          <p>
            This Legal Notice outlines key information for customers purchasing
            from Asma Bozorgi ("Seller").
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
              <br />
              <strong>Location:</strong> United States
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. Products & Prices</h2>
            <p>
              Product details, including price, taxes, and shipping costs, are
              provided on product pages and confirmed during checkout.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. Orders & Payments</h2>
            <p>
              Orders are placed electronically. Payment must be completed in
              full to initiate order processing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. Shipping</h2>
            <p>
              We ship domestically within the U.S. using insured carriers.
              Shipping timelines are provided at checkout.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. Returns</h2>
            <p>
              Customers may return eligible items within 7 days of delivery.
              Custom or engraved items are not eligible unless defective.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">6. Governing Law</h2>
            <p>
              This agreement is governed by the laws of the State of California,
              USA.
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
