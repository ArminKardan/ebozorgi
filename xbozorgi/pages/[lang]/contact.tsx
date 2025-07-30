import Component, { PageEl } from "@/frontend/components/qecomps/Component"
import type { GetServerSideProps, GetServerSidePropsContext } from "next"
import Navbar from "@/frontend/components/navbar"
import CollectionsSection from "@/frontend/components/CollectionsSection"
import BestSeller from "@/frontend/components/bestseller"
import Footer from "@/frontend/components/footersection"
import PhoneIcon from "@mui/icons-material/Phone"
import Layout from "@/frontend/components/Layout"
export default (p) => Component(p, Page)

const Page: PageEl = (props: {} & { [key: string]: any }, refresh, getProps, onLoad, onConnected, dies, isFront, z) => {
  return (
    <Layout>
      <h1 style={{ paddingTop: 160 }} className="contact-heading">
        Contact With Us Today
      </h1>
      <w-cc className="contact-container">
        <c-cc className="contact-media">
          <img
            src="https://cdn.ituring.ir/qeupload/mxjpqoAYwanzTCMcfYXx/27fm0wrfzmwt5bsuvtlzyf.png"
            alt="social media"
          />

          <p><a href="tel:+4733378901"></a> Phone</p>
        </c-cc>
        <c-cc className="contact-media">
          <img
            src="https://cdn.ituring.ir/qepal/whatsapp.webp"
            alt="social media"
          />

          <p>Whatsapp</p>
        </c-cc>
        <c-cc className="contact-media">
          <img
            src="https://cdn.ituring.ir/qepal/telegram2.png"
            alt="social media"
          />

          <p>Telegram</p>
        </c-cc>
        <c-cc className="contact-media">
          <img
            src="https://cdn.ituring.ir/qepal/insta.svg"
            alt="social media"
          />

          <p>Instagram</p>
        </c-cc>

      </w-cc>

      <style jsx>{`
        .contact-heading {
          text-align: center;
          font-size: 32px;
        }

        img {
          width: 75px;
          height: 75px;
          cursor: pointer;
        }

        .contact-container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 3%;
        }

        .contact-media {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 6%;
        }

        @media screen and (max-width: 700px) {
          img {
          width: 50px;
          height: 50px;
          cursor: pointer;
        }
          }
      `}</style>
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
