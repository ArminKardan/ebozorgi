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
        <h1 className="contact-heading">Search</h1>
        <div className="contact-container">
          <form className="contact-form">
            <div className="row">
              <div className="input-group full with-icon">
                <a>
                  <img
                  src="https://cdn.ituring.ir/qeupload/mxjpqoAYwanzTCMcfYXx/krrm51gvpytqpha0vrl5ff.svg"
                  alt="Search"
                  className="input-icon"
                />
                </a>
                
                <input required />
                <label>Search</label>
              </div>
            </div>
          </form>
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

          

          .contact-container {
            padding: 20px 8% 60px;
            display: flex;
            justify-content: center;
          }

          .contact-heading {
            font-size: 32px;
            font-weight: 600;
            margin-bottom: 40px;
            color: #232222;
            text-align: center;
            width: 100%;
            padding-top: 160px;
          }

          .contact-form {
            max-width: 800px;
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .row {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
          }

          .input-group {
            position: relative;
            flex: 1;
            min-width: 280px;
          }

          .input-group input,
          .input-group textarea {
            width: 100%;
            direction: ltr;
            padding: 12px 16px;
            border: 1.4px solid #232222;
            background: white;
            font-size: 16px;
            color: #131313;
          }

          .input-group label {
            position: absolute;
            left: 16px;
            top: 14px;
            color: #777;
            font-size: 16px;
            pointer-events: none;
            background: white;
            padding: 0 4px;
            transition: 0.2s ease all;
          }

          .input-group input:focus ~ label,
          .input-group input:valid ~ label,
          .input-group textarea:focus ~ label,
          .input-group textarea:valid ~ label {
            top: 4px;
            font-size: 10px;
          }

          .input-group input:focus,
          .input-group textarea:focus {
            outline: none;
            border: 2px solid #232222;
          }

          .input-group.full {
            flex: 1 1 100%;
          }

          @media (max-width: 768px) {
            .row {
              flex-direction: column;
            }

            .send-btn {
              width: 100%;
            }
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
        title: "test title",
        description: "test description",
        
      },
    },
    context
  )

  return obj
}
