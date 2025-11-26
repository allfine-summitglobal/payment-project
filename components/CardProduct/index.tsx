"use client"

import { Card } from 'antd'
import Image from 'next/image'
import {_} from 'lodash'
import {useResponsiveTruncate} from "@/app/hooks/truncate";
import Link from "next/link";

interface Product {
  title: string
  subTitle: string
  slug: string
  logoUrl: string
  redirectLink: string | null
}

interface CardProductProps {
  product: Product
}

export default function CardProduct({ product }: CardProductProps) {
  return (
    <Link href={`/${product.slug}`}>
      <Card
        hoverable
        variant={'outlined'}
        className="rounded-2xl overflow-hidden bg-white shadow-md border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        styles={{ body: { padding: 0 } }}
      >
        {/* Image Container */}
        <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100">
          {/* Main Image */}
          <Image
            src={product.logoUrl}
            alt={product.title}
            fill
            className="object-cover z-[3]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Bottom Gradient Overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent z-[3]" />
        </div>

        {/* Info Section */}
        <div className="bg-white p-4 text-center">
          <div className="line-clamp-1 text-black text-base font-bold mb-1 tracking-wide">
            {product.title}
          </div>
          <div className="line-clamp-1 text-gray-600 text-sm font-medium">
            {product.subTitle}
          </div>
        </div>
      </Card>
    </Link>
  )
}