'use client'

import { Tabs, Button } from 'antd'
import { useState } from 'react'
import CardProduct from '../CardProduct'

interface Product {
  title: string
  subTitle: string
  slug: string
  logoUrl: string
  redirectLink: string | null
}

interface ProductCategory {
  createdDate: string
  updatedDate: string
  name: string
  products: Product[]
}

interface TabProductProps {
  data: ProductCategory[]
}

export default function TabProduct({ data }: TabProductProps) {
  const [showAllProducts, setShowAllProducts] = useState<{[key: string]: boolean}>({})

  const toggleShowAll = (categoryIndex: string) => {
    setShowAllProducts(prev => ({
      ...prev,
      [categoryIndex]: !prev[categoryIndex]
    }))
  }

  const items = data.map((category, index) => {
    const categoryKey = index.toString()
    const isShowingAll = showAllProducts[categoryKey]
    const hasMoreThan20 = category.products.length > 20
    const displayedProducts = isShowingAll ? category.products : category.products.slice(0, 20)

    return {
      key: categoryKey,
      label: category.name,
      children: (
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4">
            {displayedProducts.map((product, index) => (
              <div
                key={product.slug || index.toString()}
              >
                <CardProduct
                  product={product}
                />
              </div>
            ))}
          </div>
          {hasMoreThan20 && (
            <div className="text-center mt-4 pb-4">
              <Button 
                type="primary" 
                onClick={() => toggleShowAll(categoryKey)}
              >
                {isShowingAll ? 'Sembunyikan' : `Lihat Semua (${category.products.length} produk)`}
              </Button>
            </div>
          )}
        </div>
      )
    }
  })

  return (
    <Tabs 
      items={items} 
      defaultActiveKey="0"
      className="w-full"
    />
  )
}
