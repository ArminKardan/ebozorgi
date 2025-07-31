import Router from "next/router"
import Component, { PageEl } from "@/frontend/components/qecomps/Component"
import { useEffect, useState, useRef } from "react"
import SearchIcon from "@mui/icons-material/Search"
import PersonSharpIcon from "@mui/icons-material/PersonSharp"
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"
import MenuIcon from "@mui/icons-material/Menu"
const Navbar: PageEl = (
  props,
  refresh,
  getProps,
  onLoad,
  onConnected,
  dies,
  isFront,
  z
) => {
  const mobileTopics = [
    { label: "About", path: "/about" },
    { label: "BRIDAL", path: "/shop2" },
    { label: "CUSTOME", path: "/shop2" },
    { label: "NECKLACES", path: "/shop2" },
    { label: "RINGS", path: "/shop2" },
    { label: "BRACELETS", path: "/shop2" },
    { label: "EARRINGS", path: "/shop2" },
    { label: "FEATURED", path: "/shop2" },
  ]


  const toggleMenu = () => {
    props.menuOpen = !props.menuOpen
    props.isMobile = !props.isMobile
    if (!props.menuOpen) {
      props.isMobileShopOpen = false
    }
    refresh()
  }

  return (
    <>

      <header
        className={`navbar ${props.isScrolled ? "scrolled" : ""}`}
        style={{
          backgroundColor: props.bgColor,
          transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        {props.isSearchOpen && (
          <div className="search-overlay">
            <div className="search-box">
              <button
                style={{ color: "white" }}
                className="close-search"
                onClick={() => {
                  props.isSearchOpen = false
                  refresh()
                }}
              >
                ✕
              </button>
              <input
                style={{ direction: "ltr" }}
                type="text"
                placeholder="Search..."
                className="search-input"
              />
            </div>
          </div>
        )}

        <div className="nav-left">
          <ShoppingBagIcon
            onClick={() => Router.push(z.root + "/shop2")}
            fontSize="large"
          />

          <div className="gapp">
            <PersonSharpIcon
              fontSize="large"
            />


          </div>
        </div>

        <div className="nav-right">
          <ul className="nav-menu">
            <li onClick={() => Router.push(z.root + "/about")}>ABOUT</li>
            <li onClick={() => Router.push(z.root + "/shop2")}>BRIDAL</li>
            <li onClick={() => Router.push(z.root + "/shop2")}>CUSTOME</li>
            <li onClick={() => Router.push(z.root + "/shop2")}>NECKLACES</li>
            <li onClick={() => Router.push(z.root + "/shop2")}>RINGS</li>
            <li onClick={() => Router.push(z.root + "/shop2")}>BRACELETS</li>
            <li onClick={() => Router.push(z.root + "/shop2")}>EARRINGS</li>
            <li onClick={() => Router.push(z.root + "/shop2")}>FEATURED</li>
          </ul>

          <div className="nav-center">
            <a onClick={() => Router.push(z.root)}>
              {props.isScrolled? <img src="/kinnpic/ab-black.webp" style={{ height: 50 }} /> : <img src="/kinnpic/ab-white.webp" style={{ height: 50 }} />}
            </a>
          </div>

          <div className="mobile-left-icon" onClick={toggleMenu}>


            {props.menuOpen ? (
              <span className="close-icon">✕</span>
            ) : (
              <MenuIcon fontSize="large" />
            )}
          </div>
        </div>
      </header>

      {props.menuOpen && props.isMobile && (
        <div className="mobile-menu-wrapper">
          <div
            className={`mobile-menu main-menu ${props.isMobileShopOpen ? "slide-left" : "slide-in"
              }`}
          >
            {mobileTopics.map(({ label, path }) => (
              <div
                key={label}
                className="menu-item"
                onClick={() => {
                  Router.push(z.root + path)
                  refresh()
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 8%;
          background-color: transparent;
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
          z-index: 1000;
          color: black;
        }

        .navbar.scrolled {
          background-color: white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* optional */
        }

        /* Default (transparent bg, white text) */
        .navbar {
          color: white;
        }

        .nav-menu li {
          color: white;
        }

        /* When scrolled (white bg, black text) */
        .navbar.scrolled {
          color: black;
        }

        .navbar.scrolled .nav-menu li {
          color: black;
        }

        .mobile-menu-wrapper {
          position: fixed;
          top: 80px;
          left: 0;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          background-color: white;
          z-index: 999;
        }

        .mobile-menu {
          position: absolute;
          padding-top: 140px;
          width: 100%;
          height: 100%;
          padding: 24px;
          background: transparent;
          display: flex;
          flex-direction: column;
          justify-content: start;
          align-items: end;
          gap: 25px;
          transition: transform 0.3s ease-in-out;
        }

        /* Main Menu Animations */
        .main-menu.slide-in {
          transform: translateX(0%);
        }
        .main-menu.slide-left {
          transform: translateX(-100%);
        }

        .search-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: rgba(12 12 12 / 0.35);
          z-index: 2000;
          padding: 40px 8%;
          animation: slideDown 0.3s ease forwards;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        @keyframes slideDown {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0%);
          }
        }

        .search-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .search-input {
          flex: 1;
          padding: 12px 16px;
          font-size: 16px;
        }

        .close-search {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #000000;
        }

        .nav-left,
        .nav-right {
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .gapp {
          display: flex;
          align-items: center;
          gap: 1px;
        }

        .nav-left img {
          width: 24px;
          height: 24px;
          cursor: pointer;
          transition: opacity 0.3s;
        }

        .nav-left img:hover {
          transform: scale(1.1);
        }

        .nav-center .logo {
          padding-right: 18px;
          min-width: 75px;
          height: 75px;
          object-fit: contain;
        }

        .logo:hover {
          cursor: pointer;
        }

        .nav-menu {
          display: flex;
          gap: 32px;
          list-style: none;
          color: #0c0c0c;
          font-size: 14px;
          padding: 32px;
        }

        .nav-menu li {
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .nav-menu li:hover {
          border-bottom: 2px solid;
        }

        .about-item img {
          width: 10px;
          height: 10px;
        }

        .shop-item {
          position: relative;
          cursor: pointer;
        }

        .mobile-left-icon {
          display: none;
          margin-left: 10px;
          font-size: large;
          cursor: pointer;
        }

        .mobile-left-icon img,
        .close-icon {
          width: 24px;
          height: 24px;
        }

        .close-icon {
          font-size: 24px;
        }

        @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0%);
          }
        }

        .menu-item {
          font-size: 18px;
          color: #1b1c1d;
          cursor: pointer;
        }

        @media (max-width: 950px) {
          .navbar {
            background-color: transparent;
          }

          .nav-menu {
            display: none;
          }

          .nav-center {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

          .mobile-left-icon {
            display: flex;
            gap: 18px;
          }

          
        }
      `}</style>
    </>
  )
}

export default (p) => Component(p, Navbar)
