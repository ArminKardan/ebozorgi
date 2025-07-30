import Component, { PageEl } from "@/frontend/components/qecomps/Component"
import type { GetServerSideProps, GetServerSidePropsContext } from "next"
import Layout from "@/frontend/components/Layout"
import BestSeller from "@/frontend/components/bestseller"
import { useState } from "react"

export default (p) => Component(p, Page)

const images = [
  "https://cdn.ituring.ir/qeupload/iT1R3mpqnf2rr6zpjE7K/umrwgposqahfl6t04mknrf.jpg",
  "https://cdn.ituring.ir/qeupload/iT1R3mpqnf2rr6zpjE7K/lnezhild8rnh4w4bmc0rsg.jpg",
  "https://cdn.ituring.ir/qeupload/iT1R3mpqnf2rr6zpjE7K/uglee4wb76nrl0ewsv7byf.jpg",
]

const Page: PageEl = (props: {} & { [key: string]: any }, refresh, getProps, onLoad, onConnected, dies, isFront, z) => {
  
  return (
    <Layout>
      <div
        style={{ direction: "ltr" }}
        className="flex flex-col md:flex-row justify-center items-center gap-8 p-8 pt-60"
      >
        {/* Carousel */}
        <div className="w-full md:w-[700px]">
          <div className="carousel w-full md:carousel-vertical h-[500px] md:h-[700px]">
            {images.map((img, idx) => (
              <div
                id={`item${idx}`}
                key={idx}
                className="carousel-item w-full h-full justify-center items-center"
              >
                <img
                  src={img}
                  className="object-contain max-h-full max-w-full mx-auto"
                  alt={`Image ${idx + 1}`}
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-2 mt-4 md:mt-0 md:ml-2">
            {images.map((_, idx) => (
              <a
                key={idx}
                href={`#item${idx}`}
                className="btn btn-xs md:btn-sm bg-white hover:bg-gray-400"
              >
                {idx + 1}
              </a>
            ))}
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full max-w-xl px-4 flex flex-col gap-6 text-center md:text-left">
          {/* Title */}
          <div>
            <h1 className="text-3xl font-bold mb-2 leading-snug">
              Velvet Evening Gown Velvet Evening Gown Velvet Evening Gown
            </h1>
            <h2 className="text-xl text-gray-500">
              2025 Limited Edition Collection
            </h2>
          </div>

          {/* Price */}
          <div className="text-2xl font-semibold text-gray-900">$1,299.00</div>

          

          {/* Description */}
          <p className="text-base leading-relaxed text-gray-700">
            Experience the allure of timeless elegance with our 2025 Limited
            Edition Velvet Evening Gown. Featuring a luxurious silk-lined
            interior, fine hand-embroidery, and artisanal embellishments, each
            gown is meticulously crafted to embody grace, sophistication, and
            modern couture refinement.
          </p>

          {/* Add to Cart Button */}
          <button className="w-full h-16 bg-black text-white py-3 text-sm font-semibold rounded-none hover:bg-gray-800 transition-colors duration-200">
            Add to Cart
          </button>
        </div>
      </div>
      <BestSeller />
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
