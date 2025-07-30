import React, { useState } from "react";
import { useRouter } from "next/router";
import collections from "@/frontend/data/collection.json";

const Collections = () => {
  const router = useRouter();

  const tennisCollection = collections.find(c => c.category === "tennis");
  const products = tennisCollection?.products || [];

  // آرایه نگهدارنده انتخاب variant هر محصول
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>(Array(products.length).fill(0));

  const handleVariantClick = (productIndex: number, variantIndex: number) => {
    setSelectedIndexes(prev => {
      const updated = [...prev];
      updated[productIndex] = variantIndex;
      return updated;
    });
  };

  return (
    <div style={{ direction: "ltr" }}>
      <section className="px-0 py-0">
        <div className="mx-auto max-w-screen-xl px-6">
          <div className="flex items-center justify-between mb-6 md:mb-10 mt-6">
            <h2 className="text-2xl md:text-4xl font-sans text-left">
              {tennisCollection?.title || "Collection"}
            </h2>
            <button
              onClick={() => router.push("/fa/shop2")}
              className="ml-auto text-sm md:text-base underline underline-offset-2 hover:text-gray-700 transition text-right"
            >
              SHOP THE COLLECTION
            </button>
          </div>

          <div className={products.length > 4 ? "overflow-x-auto no-scrollbar" : ""}>
            <div
              className={
                products.length > 4
                  ? "flex flex-nowrap gap-2 snap-x snap-mandatory"
                  : "grid grid-cols-2 md:grid-cols-4 gap-1"
              }
            >
              {products.map((product, productIndex) => {
                const hasVariants = Array.isArray(product.variants) && product.variants.length > 0;
                const selectedIndex = selectedIndexes[productIndex] ?? 0;

                const mainImg = hasVariants
                  ? product.variants[selectedIndex].image
                  : product.image;
                const hoverImg = hasVariants
                  ? product.variants[selectedIndex].hoverImage
                  : product.hoverImage;

                return (
                  <div
                    key={productIndex}
                    className={`relative bg-white product-card overflow-hidden ${
                      products.length > 4 ? "snap-start min-w-[250px] md:min-w-[300px]" : ""
                    }`}
                  >
                    <a onClick={() => router.push("/fa/shop2")} target="_blank" rel="noopener noreferrer">
                      <div className="relative h-[240px] md:h-[400px] overflow-hidden group">
                        <img
                          src={mainImg}
                          alt={product.title}
                          className="img-main w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                        />
                        <img
                          src={hoverImg}
                          alt={product.title}
                          className="img-hover absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                        />
                      </div>
                      <div className="p-3">
                        <div className="text-sm font-medium">{product.title}</div>
                        <div className="text-xs mt-1 text-gray-700">{product.price}</div>
                      </div>
                    </a>

                    {hasVariants && (
                      <div className="flex gap-2 px-3 pb-3">
                        {product.variants.map((variant, i) => (
                          <button
                            key={i}
                            title={variant.color}
                            onClick={(e) => {
                              e.preventDefault();
                              handleVariantClick(productIndex, i);
                            }}
                            className={`w-5 h-5 rounded-sm border ${
                              variant.color === "yellow"
                                ? "bg-yellow-400"
                                : variant.color === "white"
                                ? "bg-white border-gray-300"
                                : variant.color === "green"
                                ? "bg-green-500"
                                : "bg-gray-300"
                            } ${selectedIndexes[productIndex] === i ? "ring-2 ring-black" : ""}`}
                          ></button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <style jsx>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </section>
    </div>
  );
};

export default Collections as any;
