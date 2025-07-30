import Component, { PageEl } from "@/frontend/components/qecomps/Component"
import collections from "@/frontend/data/collection.json"
import Router from "next/router"

const BestSellers: PageEl = (props, refresh, getProps, onLoad, onConnected, dies, isFront, z) => {
  const collection = collections.find(c => c.category === "kinn-classics")
  const products = collection ? collection.products : []

  return (
    <div style={{ direction: "ltr" }}>
      <section className="px-0 py-0">
        <div className="mx-auto max-w-full px-0">
          <div className="w-full flex items-center justify-between mb-6 md:mb-10 px-2 md:px-6 mt-6">
            <h2 className="text-2xl md:text-4xl font-sans text-left">
              {collection?.title || "Collection"}
            </h2>
            <a
              onClick={() => Router.push(z.root + "/fa/shop2")}
              className="text-sm md:text-base underline underline-offset-2 hover:text-gray-700 transition text-right cursor-pointer"
            >
              SHOP THE COLLECTION
            </a>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-4 gap-1 px-2 md:px-6">
            {products.map((product, index) => (
              <div key={index} className="relative group overflow-hidden bg-white">
                <a
                  onClick={() => Router.push(z.root + "/fa/shop2")}
                  className="cursor-pointer"
                >
                  <div className="relative w-full h-[400px]">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                    />
                    <img
                      src={product.hoverImage}
                      alt={product.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                    />
                  </div>
                  <div className="p-3">
                    <div className="text-sm font-medium">{product.title}</div>
                    <div className="text-xs mt-1 text-gray-700">{product.price}</div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Mobile Grid */}
          <div className="md:hidden grid grid-cols-2 gap-1 px-2 pb-6">
            {products.map((product, index) => (
              <div key={index} className="w-full overflow-hidden bg-white">
                <a
                  onClick={() => Router.push(z.root + "/fa/shop2")}
                  className="cursor-pointer"
                >
                  <div className="relative h-[240px] overflow-hidden group">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                    />
                    <img
                      src={product.hoverImage}
                      alt={product.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                    />
                  </div>
                  <div className="p-2">
                    <div className="text-xs font-medium">{product.title}</div>
                    <div className="text-[11px] text-gray-600 mt-1">{product.price}</div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default (p) => Component(p, BestSellers)