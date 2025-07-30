import Component, { PageEl } from "@/frontend/components/qecomps/Component"
import type { GetServerSideProps, GetServerSidePropsContext } from "next"
import Navbar from "@/frontend/components/navbar"
import CollectionsSection from "@/frontend/components/CollectionsSection"
import BestSeller from "@/frontend/components/bestseller"
import Footer from "@/frontend/components/footersection"
import Layout from "@/frontend/components/Layout"
import { useEffect, useRef, useState } from "react"
export default (p) => Component(p, Page)

const Page: PageEl = (props: {} & { [key: string]: any }, refresh, getProps, onLoad, onConnected, dies, isFront, z) => {
  const [scrollY, setScrollY] = useState(0)
  const mainRef = useRef<HTMLDivElement>(null)

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollY(e.currentTarget.scrollTop)
  }
  
  return (
    <div
      ref={mainRef}
      onScroll={handleScroll}
      style={{
        height: "100vh",
        overflowY: "auto",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          padding: "8px",
          background: "#111",
          color: "#fff",
        }}
      >
        ScrollTop: {Math.round(scrollY)}px
      </div>
      <div style={{ height: "2000px" }}>{/* Your content */}</div>
    </div>
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
