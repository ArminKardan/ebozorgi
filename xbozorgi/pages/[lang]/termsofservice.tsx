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
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

        <p className="mb-6">
          Welcome to our website. By accessing or using our services, you agree
          to be bound by these Terms of Service. If you do not agree to all the
          terms, you may not use this website.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">1. General</h2>
        <p>
          This website is operated by [Your Business Name]. Throughout the site,
          the terms “we”, “us”, and “our” refer to the Company. These terms
          apply to all users of the site, including browsers, vendors,
          customers, merchants, and contributors of content.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">2. Eligibility</h2>
        <p>
          By using this website, you represent that you are at least 18 years
          old or the age of majority in your state, and legally capable of
          entering into binding contracts.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          3. Product Information & Pricing
        </h2>
        <p>
          We strive to ensure that all product details, images, and pricing are
          accurate. However, we do not guarantee that all content is error-free.
          Prices for our products are subject to change without notice,
          especially due to fluctuations in gold market value.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">4. Orders & Payment</h2>
        <p>
          All orders are subject to acceptance and availability. We reserve the
          right to cancel or limit any order. Payments are securely processed
          through third-party gateways such as Stripe or PayPal.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          5. Shipping & Delivery
        </h2>
        <p>
          We ship within the United States and internationally through trusted
          carriers. Delivery times are estimated and not guaranteed. We are not
          liable for delays caused by customs, weather, or courier service
          disruptions.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          6. Returns & Exchanges
        </h2>
        <p>
          Due to the nature of fine jewelry and precious metals, all sales are
          final. We only accept returns if the item arrives damaged or
          defective. Claims must be made within 3 business days of delivery.
          Please contact support@[yourdomain].com with photos and order number.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          7. Intellectual Property
        </h2>
        <p>
          All content on this website including product designs, images, logos,
          and text is the intellectual property of [Your Business Name] and may
          not be used without written permission.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">8. Prohibited Uses</h2>
        <p>
          You may not use the site for any unlawful purpose, to solicit others
          to perform illegal acts, to infringe on our intellectual property, or
          to transmit malware, phishing, or spam.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          9. Limitation of Liability
        </h2>
        <p>
          We are not liable for any indirect, incidental, or consequential
          damages that result from your use of our products or website. Our
          maximum liability is limited to the amount paid for the product.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">10. Governing Law</h2>
        <p>
          These Terms are governed by and construed in accordance with the laws
          of the State of [e.g. California], without regard to conflict of law
          principles.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          11. Changes to Terms
        </h2>
        <p>
          We reserve the right to update these Terms at any time. Changes will
          be posted on this page, and your continued use of the site constitutes
          acceptance.
        </p>

        <p className="mt-8 text-sm text-gray-500">
          Last updated: July 26, 2025
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
