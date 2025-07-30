import Component, { PageEl } from "@/frontend/components/qecomps/Component"
import type { GetServerSideProps, GetServerSidePropsContext } from "next"
import Layout from "@/frontend/components/Layout"

export default (p) => Component(p, Page)

const Page: PageEl = (props: {} & { [key: string]: any }, refresh, getProps, onLoad, onConnected, dies, isFront, z) => {
  return (
    <Layout>
      <div
        className="max-w-3xl mx-auto px-4 py-12 text-gray-800 leading-7 pt-52"
        style={{ direction: "ltr" }}
      >
        <h1 className="text-3xl font-bold mb-6">Shipping & Return Policy</h1>

        <h2 className="text-xl font-semibold mt-8 mb-2">Shipping Policy</h2>
        <p className="mb-4">
          We offer <strong>free insured shipping</strong> on all orders within the United States. All packages are securely packed and insured for their full value.
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Processing Time:</strong> 1–3 business days</li>
          <li><strong>Delivery Time:</strong> 2–5 business days (Standard)</li>
          <li><strong>Carriers:</strong> UPS, FedEx, or USPS</li>
          <li><strong>Signature Required:</strong> Yes</li>
          <li><strong>International Shipping:</strong> Currently unavailable</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">Return Policy</h2>
        <p className="mb-4">
          If you are not satisfied with your purchase, you may request a return within <strong>7 days</strong> of delivery.
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Items must be in original, unused condition with packaging.</li>
          <li>Custom, engraved, or made-to-order jewelry is non-returnable.</li>
          <li>Returns must be approved in advance by contacting our team.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">How to Return</h2>
        <ol className="list-decimal pl-6 mb-6">
          <li>Email <strong>support@[yourdomain].com</strong> with your order number and reason.</li>
          <li>We’ll send you a prepaid return label.</li>
          <li>After inspection, a refund will be issued within 5–7 business days.</li>
        </ol>

        <h2 className="text-xl font-semibold mt-8 mb-2">Exchanges</h2>
        <p className="mb-6">
          We do not offer exchanges. Please return the item and place a new order.
        </p>

        <p className="mt-8 text-sm text-gray-500">
          Last Modified: July 27, 2025
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
        title: "Shipping & Return Policy",
        description: "Learn about our shipping and return policy for all gold jewelry purchases in the U.S.",
      },
    },
    context
  )

  return obj
}
