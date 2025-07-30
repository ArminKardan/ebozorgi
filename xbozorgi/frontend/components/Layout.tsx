// components/Layout.tsx
import React, { useState, useRef } from "react"
import Navbar from "@/frontend/components/navbar"
import Footer from "@/frontend/components/footersection"
import LoginModal from "@/frontend/components/LoginModal"

const Layout: React.FC<{ children: React.ReactNode; isIndex?: boolean }> = ({
  children,
  isIndex = false, // default fallback
}) => {
  const [scrollY, setScrollY] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [showLogin, setShowLogin] = useState(false)
  const toggleLogin = () => setShowLogin((prev) => !prev)

  const isScrolled = isIndex ? scrollY > 50 : true
  const bgColor = isIndex ? (scrollY > 50 ? "white" : "transparent") : "white"

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollY(e.currentTarget.scrollTop)
  }

  return (
    <div
      ref={containerRef}
      onScroll={isIndex ? handleScroll : undefined}
      style={{
        height: "100vh",
        overflowY: "auto",
        padding: 0,
        backgroundColor: "white",
        direction: "rtl",
      }}
    >
      {/* pass scrollY (or a boolean) down as a prop */}
      <Navbar
        bgColor={bgColor}
        isScrolled={isScrolled}
        showLogin={showLogin}
        toggleLogin={toggleLogin}
      />
      <div style={{ paddingTop: 0 }}>
        {/* offset so content isn’t under sticky nav */}
        {children}
      </div>
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}

      <Footer />
    </div>
  )
}

export default Layout
