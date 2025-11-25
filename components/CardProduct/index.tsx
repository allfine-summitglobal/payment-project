import { Card } from 'antd'
import Image from 'next/image'
import Link from 'next/link'

interface Product {
  title: string
  subTitle: string
  slug: string
  logoUrl: string
  redirectLink: string | null
}

interface CardProductProps {
  product: Product,
  key: string
}

const { Meta } = Card

export default function CardProduct({ product, key }: CardProductProps) {
  return (
    <Link href={`/product/${product.slug}`}>
      <Card
        hoverable
        className="w-full h-full"
        cover={
          <div className="relative w-full aspect-[3/4] overflow-hidden rounded-t-lg">
            <Image
              src={product.logoUrl}
              alt={product.title}
              fill
              className="object-cover rounded-t-lg"
              // sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              loading={"lazy"}
            />
          </div>
        }
      >
        <Meta
          title={product.title}
          description={product.subTitle}
        />
      </Card>
    </Link>
  )
}
