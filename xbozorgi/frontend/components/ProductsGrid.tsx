import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"

interface Variant {
  color: string
  image: string
  hoverImage: string
}

interface Product {
  title: string
  price: string
  link: string
  image?: string
  hoverImage?: string
  variants?: Variant[]
}

interface Props {
  products: Product[]
}

const ProductsGrid: React.FC<Props> = ({ products }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {products.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    </div>
  )
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0)
  const hasVariants = product.variants && product.variants.length > 0
  const currentVariant = hasVariants ? product.variants![selectedVariantIndex] : null
  const mainImage = hasVariants ? currentVariant!.image : product.image!
  const hoverImage = hasVariants ? currentVariant!.hoverImage : product.hoverImage!
  const router = useRouter()

  return (
    <div className="border border-gray-200 bg-white rounded-none overflow-hidden transition-all duration-200">
      <a onClick={() => router.push("/fa/shop")} target="_blank" rel="noopener noreferrer">
        <div className="relative w-full h-[240px] md:h-[340px] overflow-hidden group">
          <img
            src={mainImage}
            alt={product.title}
            className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
          />
          <img
            src={hoverImage}
            alt={product.title}
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </div>

        <div className="p-3 text-left" dir="ltr">
          <div className="text-base font-medium text-gray-900 break-words leading-snug">
            {product.title}
          </div>
          <div className="text-sm mt-1 text-gray-600">{product.price}</div>
        </div>
      </a>

      {hasVariants && (
        <div className="flex gap-2 px-3 pb-3 mt-1 justify-start" dir="ltr">
          {product.variants!.map((variant, idx) => (
            <button
              key={idx}
              title={variant.color}
              onClick={(e) => {
                e.preventDefault()
                setSelectedVariantIndex(idx)
              }}
              className={`w-6 h-6 border rounded-sm transition duration-150 ${
                selectedVariantIndex === idx
                  ? "ring-1 ring-black border-black"
                  : "border-gray-300 hover:ring-1 hover:ring-gray-400"
              }`}
              style={{
                backgroundColor: variant.color,
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductsGrid
