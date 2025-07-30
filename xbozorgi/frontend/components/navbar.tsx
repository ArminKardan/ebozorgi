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
              <svg
                width="96"
                height="41"
                viewBox="0 0 96 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0.557796C0 0.642006 0.0157895 0.715691 0.031579 0.715691C0.194737 0.715691 1.44211 0.952534 1.60526 1.01043C2.26316 1.2578 3.05263 1.94727 3.32632 2.51569C3.81579 3.51569 4.09474 5.44727 4.21053 8.58411C4.27895 10.4367 4.27895 30.342 4.21053 32.242C4.09474 35.4525 3.80526 37.4104 3.3 38.3736C3.06316 38.8262 2.53684 39.3315 2.04211 39.5736C1.63158 39.7788 0.836842 39.9999 0.305263 40.0578C0.0105263 40.0894 0 40.0946 0 40.2473V40.3999H6.28947H12.5789V40.2473C12.5789 40.0999 12.5737 40.0946 11.9842 39.9525C10.4684 39.5894 9.79474 39.1052 9.26316 38.0052C8.67368 36.7788 8.5 35.442 8.41579 31.4525C8.34737 28.2157 8.37895 21.1683 8.46316 20.8052C8.55263 20.421 8.67368 20.2052 8.98947 19.8631C9.67369 19.1262 11.1053 18.3736 12.2474 18.1578C12.9158 18.0315 14.2632 18.0841 15.1368 18.2631C17.5947 18.7788 18.9421 19.921 19.7316 22.1631C19.9842 22.8683 20.2263 23.8525 20.5211 25.321C20.8421 26.9104 20.9895 27.9052 21.2368 30.0841C21.5632 32.9946 21.8316 34.6788 22.2158 36.2052C22.6789 38.0473 23.2895 39.4262 23.9737 40.1841L24.1684 40.3999H37.2421H50.3158V40.2683C50.3158 40.1262 50.3421 40.1367 49.6684 39.9999C48.8316 39.8367 47.7737 39.3631 47.3316 38.9578C46.6947 38.3788 46.3895 37.2315 46.2632 34.9367C46.1947 33.7157 46.1947 24.3157 46.2632 23.1631C46.4316 20.342 46.9947 18.0999 47.9263 16.542C49.4895 13.9315 52.3211 12.4262 55.2 12.6631C56.6368 12.7841 57.6842 13.2052 58.5421 14.021C59.2789 14.7262 59.7105 15.5788 59.9421 16.7894C60.179 18.0104 60.1842 18.3367 60.1842 27.321C60.1842 35.2525 60.179 35.8894 60.0895 36.442C59.9211 37.4999 59.6158 38.3788 59.2526 38.8367C58.8421 39.3525 57.8211 39.7894 56.2789 40.1157C56.1895 40.1315 56.1579 40.1788 56.1579 40.2683V40.3999H67.0053H77.8474L77.8316 40.2578C77.8158 40.1262 77.7895 40.1157 77.3421 40.0262C76.379 39.842 75.2947 39.3631 74.8474 38.9315C74.1632 38.2631 73.8947 37.0262 73.7842 34.0841C73.7105 32.1473 73.7526 23.5736 73.8421 22.5841C73.9158 21.721 74.1105 20.4315 74.2947 19.6262C75.1947 15.5894 77.9263 12.9841 81.5789 12.6631C82.2632 12.6052 83.1895 12.6683 83.8263 12.821C85.3158 13.1736 86.4737 14.0999 87.0789 15.421C87.3 15.8999 87.3947 16.242 87.5263 16.9946C87.7263 18.1788 87.7421 19.121 87.7263 27.8473C87.7053 35.5052 87.6947 36.2525 87.6158 36.6631C87.3842 37.7946 87.1 38.4999 86.7105 38.921C86.2474 39.4157 85.2684 39.821 83.8053 40.1157C83.7158 40.1315 83.6842 40.1736 83.6842 40.2683V40.3999H89.7105H95.7368V40.2683C95.7368 40.1946 95.7053 40.1262 95.6737 40.1157C95.6368 40.1104 95.3474 40.0367 95.0263 39.9631C94.6263 39.8631 94.2632 39.7315 93.8474 39.5262C92.8421 39.0262 92.4842 38.5736 92.1895 37.4525C91.9263 36.4578 91.9316 36.6578 91.8947 26.7946C91.8579 16.6946 91.8737 17.1999 91.5737 15.9104C90.9053 13.042 89.2 11.4262 86.2632 10.8894C85.879 10.821 85.4737 10.7999 84.5 10.7999C83.4158 10.7999 83.1421 10.8157 82.5632 10.9157C80.8158 11.2315 79.4105 11.7631 78.1789 12.5894C76.2842 13.8578 75.0053 15.442 74.1263 17.6104C73.8211 18.3683 73.7263 18.3788 73.7632 17.6525C73.779 17.3525 73.8158 15.8841 73.8474 14.3841C73.9 11.9104 73.8947 11.6473 73.8211 11.5315L73.7368 11.3999H69.9474H66.1579V11.5262C66.1579 11.642 66.1842 11.6578 66.4632 11.6894C67.5737 11.821 68.2368 12.0631 68.7158 12.5315C69.2684 13.0736 69.4421 13.7157 69.5316 15.5841C69.6105 17.2999 69.5684 36.2841 69.479 36.9788C69.2316 38.9841 68.5737 39.6631 66.9421 39.5999C66.4632 39.5841 66.3526 39.5631 66.0421 39.4157C65.6158 39.2157 65.2211 38.842 65.0263 38.4473C64.8421 38.0894 64.6053 37.1525 64.5316 36.4788C64.4947 36.1894 64.4579 35.8788 64.4368 35.7946C64.4211 35.7052 64.3895 31.5999 64.3737 26.6631C64.3316 17.0736 64.3421 17.4262 64.0737 16.1104C63.4368 12.9683 61.4368 11.1841 58.1474 10.8262C57.4158 10.742 56.2895 10.7578 55.5263 10.8473C52.0526 11.2788 49.1947 13.0473 47.4632 15.8367C47.1579 16.321 46.6526 17.3578 46.4737 17.8631C46.4053 18.0473 46.3211 18.1894 46.2842 18.1894C46.1947 18.1894 46.1947 18.1894 46.2632 15.6104C46.2895 14.5525 46.3158 13.2052 46.3211 12.6157C46.3316 11.6315 46.3211 11.5367 46.2316 11.4683C46.1579 11.4157 45.4316 11.3999 42.3842 11.3999H38.6316V11.5262C38.6316 11.642 38.6579 11.6578 38.9368 11.6894C39.5316 11.7578 40.2316 11.921 40.5105 12.0578C40.6684 12.1367 40.9368 12.3315 41.1053 12.4894C41.6368 12.9788 41.8316 13.5262 41.9526 14.8367C42.0368 15.7578 42.0842 34.9841 42.0053 36.2525C41.9105 37.6946 41.6842 38.3894 41.1053 38.9841C40.7632 39.3315 40.3895 39.5367 39.9 39.642C38.2947 39.9788 36.9684 39.1525 36.6053 37.5894C36.3474 36.4683 36.3526 36.7999 36.3211 23.7788L36.2895 11.5999L36.1632 11.4999C36.0474 11.4052 35.9053 11.3999 32.3368 11.3999H28.6316V11.5525C28.6316 11.6999 28.6474 11.7104 28.8842 11.7367C29.7105 11.8315 30.1368 11.9262 30.4579 12.0841C31.1105 12.4052 31.6263 13.0999 31.8421 13.9578C31.9105 14.2262 31.9632 14.6946 32 15.3683C32.0684 16.7052 32.0684 36.1578 32 36.7683C31.8 38.5157 31.1316 39.4262 30.0053 39.4946C29.2 39.542 28.7947 39.2262 28.0947 38.0315C27.7158 37.3788 27.5211 36.9262 27.1789 35.8999C26.6316 34.2262 26.3474 32.9841 25.8158 29.8631C24.6421 23.021 24.1316 21.5315 22.3421 19.7367C20.9895 18.3788 19.4316 17.6473 17.0263 17.2473C16.2684 17.121 14.9789 16.9788 14.3842 16.9631C14.1474 16.9578 13.9579 16.9473 13.9632 16.9473C13.9684 16.942 14.4211 16.7315 14.9632 16.4841C16.2579 15.8841 16.8421 15.5631 17.9158 14.8367C20.5053 13.0841 21.8263 11.842 23.0211 10.0315C23.9789 8.57885 24.8474 6.82622 25.5263 4.95253C25.9421 3.7999 26.2 3.22622 26.5105 2.742C27.2263 1.64727 28.1211 0.984112 29.1579 0.784111C29.6158 0.694637 29.6316 0.684113 29.6316 0.542007V0.399902H25H20.3684V0.531479C20.3684 0.605164 20.3842 0.663059 20.4105 0.663059C20.6684 0.668324 21.5158 0.836742 21.7474 0.926216C22.3526 1.15253 22.9474 1.72095 23.2895 2.3999C23.4316 2.68411 23.6526 3.3578 23.7474 3.79464C23.8526 4.29464 23.8368 6.00517 23.7211 6.54727C23.3053 8.47359 22.1895 10.3683 20.4211 12.142C19.2368 13.3315 18.2368 14.0999 16.6105 15.0683C15.2684 15.8683 14 16.4683 12.5895 16.9736C12.0684 17.1631 9.68421 17.8894 8.80526 18.1315L8.42105 18.2367L8.41053 15.621C8.38421 8.82095 8.46842 6.65253 8.81579 4.58411C9.25263 2.02095 10 1.15253 12.0842 0.784111C12.5684 0.699902 12.5789 0.694637 12.5789 0.547268V0.399902H6.28947H0V0.557796Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M33.0539 1.98401C32.4276 2.08928 31.8276 2.48928 31.475 3.04191C31.0487 3.69454 30.9802 4.62086 31.3066 5.31559C31.5223 5.77875 31.7381 6.04717 32.1223 6.32612C32.6855 6.74717 33.4381 6.87349 34.1013 6.66823C34.5434 6.53138 34.8223 6.35244 35.1487 6.01033C36.0539 5.05244 36.0539 3.56823 35.1487 2.67349C34.8223 2.35244 34.6592 2.24717 34.2645 2.0998C33.9066 1.96823 33.4329 1.92086 33.0539 1.98401Z"
                  fill="currentColor"
                ></path>
              </svg>
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
            className={`mobile-menu main-menu ${
              props.isMobileShopOpen ? "slide-left" : "slide-in"
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
