import Router from "next/router"

import Component, { PageEl } from "@/frontend/components/qecomps/Component"
import { useEffect, useState, useRef } from "react"
import SearchIcon from "@mui/icons-material/Search"
import PersonSharpIcon from "@mui/icons-material/PersonSharp"
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"
import MenuIcon from "@mui/icons-material/Menu"
export default (p) => Component(p, Page)
const Page: PageEl = (props: {} & { [key: string]: any }, refresh, getProps, onLoad, onConnected, dies, isFront, z) => {
  return (
    <footer className="footer" style={{ direction: "ltr" }}>
      <div className="footer-top">
        <div className="footer-logo">
          <a onClick={() => Router.push("/en")}>
            <img src="/kinnpic/ab-black.webp" />
          </a>
        </div>

        <div className="footer-links">
          <ul>
            <li onClick={() => Router.push(z.root+"/about")}>About</li>
            <li onClick={() => Router.push(z.root + "/shop2")}>All collections</li>
            <li onClick={() => Router.push(z.root+"/contact")}>Contact</li>
            <li onClick={() => Router.push(z.root+"/shop2")}>Shop</li>
          </ul>
        </div>

        <div className="footer-legal">
          <h4>Legal</h4>
          <ul>
            <li onClick={() => Router.push(z.root+"/legal-notice")}>Legal Notice</li>
            <li onClick={() => Router.push(z.root+"/privacy-policy")}>
              Privacy Policy
            </li>
            <li onClick={() => Router.push(z.root+"/terms-of-service")}>
              Terms of Service
            </li>
            <li onClick={() => Router.push(z.root+"/shipping-and-returns")}>
              Shipping & Returns
            </li>
          </ul>
        </div>

        <div className="footer-description">
          <p>
            Our designs are more than just clothing; they reflect personality
            and taste. We create for those who see beauty in every stitch and
            every sparkle.
          </p>
        </div>
      </div>

      <div className="footer-bottom" style={{zoom:0.7}}>
       
        <a onClick={() => Router.push(z.root)}>
           <img src="/kinnpic/ab-black.webp" />
        </a>
      </div>

      <style jsx>{`
        .footer {
          background-color: #fff;
          padding: 50px 8%;
          border-top: 1px solid #eaeaea;
        }

        .footer-top {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
          justify-content: space-between;
        }

        .footer-logo {
          flex: 1;
          min-width: 200px;
        }

        .footer-end-logo {
          flex: 1;
          width: 100%;
        }

        .footer-logo img {
          width: 100px;
          margin-bottom: 8px;
          cursor: pointer;
        }

        .footer-logo p {
          font-weight: bold;
          font-size: 18px;
        }

        .footer-links,
        .footer-legal {
          flex: 1;
          min-width: 160px;
        }

        .footer-links h4,
        .footer-legal h4 {
          margin-bottom: 12px;
          font-weight: bold;
        }

        .footer-links ul,
        .footer-legal ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li,
        .footer-legal li {
          margin-bottom: 8px;
          cursor: pointer;
        }

        .footer-description {
          flex: 2;
          min-width: 250px;
        }

        .footer-description p {
          line-height: 1.6;
          color: #555;
        }

        .footer-bottom {
          border-top: 1px solid #eaeaea;
          width: 100%;
          padding-top: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          text-align: center;
        }

        @media (max-width: 768px) {
          .footer-top {
            flex-direction: column;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </footer>
  )
}
