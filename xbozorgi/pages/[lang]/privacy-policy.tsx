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
      <div
        className="max-w-3xl mx-auto px-4 py-12 text-gray-800 leading-7 pt-52"
        style={{ direction: "ltr" }}
      >
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <p className="mb-6">
          This Privacy Policy explains how we collect, use, and protect your
          personal information when you visit our website or purchase from Asma Bozorgi.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          1. Information We Collect
        </h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Name, email, phone number, and shipping address</li>
          <li>Payment details (via Stripe or PayPal)</li>
          <li>Order history and preferences</li>
          <li>Browser cookies and analytics</li>
          <li>Device information (IP, location, browser type)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">2. How We Use It</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Process and deliver your orders</li>
          <li>Customer service and order updates</li>
          <li>Personalize your experience</li>
          <li>Comply with legal obligations</li>
          <li>Improve our website via analytics</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">3. Sharing</h2>
        <p className="mb-4">We do not sell your data. We share it only with:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Payment providers</li>
          <li>Shipping carriers</li>
          <li>Analytics tools (Google, Meta)</li>
          <li>Law enforcement if legally required</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">4. Your Rights</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Request access or deletion of data</li>
          <li>Opt-out of sale (we don’t sell data)</li>
          <li>Non-discrimination for privacy rights</li>
        </ul>
        <p>
          Email us at <strong>bozorgijewelryinfo@yahoo.com</strong> to request any
          of these rights.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">5. Cookies</h2>
        <p className="mb-6">
          We use cookies for analytics and functionality. Manage cookies in your
          browser.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">6. Data Retention</h2>
        <p className="mb-6">
          We retain order and account data for as long as needed to fulfill
          orders and comply with U.S. tax law.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">7. Security</h2>
        <p className="mb-6">
          Your data is protected with industry-standard encryption, but no
          system is 100% secure.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">8. Children</h2>
        <p className="mb-6">
          Our site is not intended for users under 13. We do not knowingly
          collect data from minors.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">9. Updates</h2>
        <p>
          We may update this policy periodically. Last Modified: July 31, 2025
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
