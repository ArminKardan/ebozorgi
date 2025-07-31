import Component, { PageEl } from "@/frontend/components/qecomps/Component"
import type { GetServerSideProps, GetServerSidePropsContext } from "next"
import Navbar from "@/frontend/components/navbar"
import CollectionsSection from "@/frontend/components/CollectionsSection"
import BestSeller from "@/frontend/components/bestseller"
import Footer from "@/frontend/components/footersection"
import Layout from "@/frontend/components/Layout"

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
  return (
    <Layout>
      <div
        className="max-w-3xl mx-auto px-4 py-12 text-gray-800 leading-7 pt-52"
        style={{ direction: "ltr" }}
      >
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

        <p className="mb-6">
          These Terms govern your use of bozorgijewelry.com. By purchasing from
          us, you agree to the following terms.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">1. Eligibility</h2>
        <p>You must be 18 or older to place an order.</p>

        <h2 className="text-xl font-semibold mt-8 mb-2">2. Orders</h2>
        <p>
          We reserve the right to cancel orders suspected of fraud or pricing
          errors.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          3. Pricing & Availability
        </h2>
        <p>
          Prices are in USD. Product availability is not guaranteed until
          checkout.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">4. Shipping</h2>
        <p>
          We only ship within the United States. Signature is required on all
          deliveries.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">5. Returns</h2>
        <p>
          You may return eligible items within 7 days of receipt. Custom and
          engraved jewelry is final sale.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          6. Intellectual Property
        </h2>
        <p>
          All content on our website is owned by Asma Bozorgi and may not be
          used without permission.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          7. Limitation of Liability
        </h2>
        <p>
          We are not liable for indirect or incidental damages. Our total
          liability shall not exceed the amount paid for the product.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">8. Governing Law</h2>
        <p>
          These terms are governed by the laws of California, United States.
        </p>

        <p className="mt-8 text-sm text-gray-500">
          Last Modified: July 31, 2025
        </p>
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
        title: "test title",
        description: "test description",
      },
    },
    context
  )

  return obj
}
