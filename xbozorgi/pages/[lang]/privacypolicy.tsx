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
          personal information when you visit our website or purchase our gold
          jewelry.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          1. Information We Collect
        </h2>
        <ul className="list-disc pl-6 mb-6">
          <li>
            Contact information (name, email, phone number, shipping address)
          </li>
          <li>
            Billing and payment details (processed securely via third-party
            providers like Stripe or PayPal)
          </li>
          <li>Purchase history and preferences</li>
          <li>Cookies and tracking data (e.g. Google Analytics)</li>
          <li>Device information (browser type, IP address, geolocation)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 mb-6">
          <li>To process and deliver your orders</li>
          <li>To send you order updates and customer support</li>
          <li>To personalize your shopping experience</li>
          <li>
            To comply with U.S. laws (including fraud prevention and
            recordkeeping)
          </li>
          <li>To analyze website traffic and improve our services</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          3. Sharing Your Data
        </h2>
        <p className="mb-4">
          We do not sell your personal information. We may share your data with:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Payment processors (e.g. Stripe, PayPal)</li>
          <li>Shipping and logistics companies (e.g. FedEx, UPS)</li>
          <li>
            Analytics and marketing tools (e.g. Google Analytics, Meta Pixel)
          </li>
          <li>Authorities, when required by law or fraud investigation</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          4. Your Rights (Under CCPA)
        </h2>
        <p>You have the right to:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Request access to your personal data</li>
          <li>Request deletion of your data</li>
          <li>
            Opt-out of the sale of personal information (we don’t sell your
            data)
          </li>
          <li>Non-discrimination for exercising your rights</li>
        </ul>
        <p>
          To submit a request, email us at{" "}
          <strong>privacy@[yoursite].com</strong>.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          5. Cookies & Tracking
        </h2>
        <p className="mb-6">
          We use cookies and similar technologies to analyze site usage and
          provide a better shopping experience. You can control cookie settings
          via your browser. For more, visit{" "}
          <a
            className="text-blue-600 underline"
            href="https://www.allaboutcookies.org"
            target="_blank"
          >
            allaboutcookies.org
          </a>
          .
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">6. Data Security</h2>
        <p className="mb-6">
          We implement industry-standard encryption and firewalls to protect
          your data. However, no system is entirely secure.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          7. Children's Privacy
        </h2>
        <p className="mb-6">
          Our site is not intended for children under the age of 13. We do not
          knowingly collect information from children.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          8. Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy periodically. Changes will be posted
          here with an updated “Last Modified” date.
        </p>

        <p className="mt-8 text-sm text-gray-500">
          Last Modified: July 26, 2025
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
