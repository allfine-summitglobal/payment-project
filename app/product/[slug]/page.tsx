import { Card, Button, InputNumber, Select, Divider } from 'antd'
import { ArrowLeftOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

interface PageProps {
  params: {
    slug: string
  }
}

// Mock data voucher berdasarkan slug
const getVoucherData = (slug: string) => {
  const voucherData: {[key: string]: any} = {
    'mobile-legends-bang-bang': {
      title: 'Mobile Legends: Bang Bang',
      subTitle: 'Moonton',
      logoUrl: 'https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/MOBILE-LEGENDS_11zon-(2)-7c8d-original.webp',
      description: 'Top up diamond Mobile Legends dengan proses cepat dan aman',
      vouchers: [
        { id: 1, amount: '86 Diamond', price: 20000, discount: 0 },
        { id: 2, amount: '172 Diamond', price: 40000, discount: 5 },
        { id: 3, amount: '257 Diamond', price: 60000, discount: 10 },
        { id: 4, amount: '344 Diamond', price: 80000, discount: 15 },
        { id: 5, amount: '429 Diamond', price: 100000, discount: 20 }
      ]
    },
    'netflix': {
      title: 'Netflix Premium',
      subTitle: 'Streaming Service',
      logoUrl: 'https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/Netflix baru-4612-original.jpg',
      description: 'Akun Netflix Premium dengan kualitas 4K dan akses unlimited',
      vouchers: [
        { id: 1, amount: '1 Bulan', price: 65000, discount: 0 },
        { id: 2, amount: '3 Bulan', price: 180000, discount: 8 },
        { id: 3, amount: '6 Bulan', price: 350000, discount: 15 },
        { id: 4, amount: '12 Bulan', price: 650000, discount: 25 }
      ]
    }
  }
  
  return voucherData[slug] || {
    title: 'Produk Tidak Ditemukan',
    subTitle: '',
    logoUrl: '',
    description: 'Produk yang Anda cari tidak tersedia',
    vouchers: []
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = getVoucherData(params.slug)
  
  return {
    title: `${product.title} - Beli Voucher Online`,
    description: `${product.description} Harga terbaik, proses cepat dan aman. ${product.subTitle}`,
    keywords: [product.title, product.subTitle, "voucher", "top up", "game online"],
    openGraph: {
      title: `${product.title} - Payment Project`,
      description: product.description,
      images: [product.logoUrl],
      type: "product"
    },
    alternates: {
      canonical: `/product/${params.slug}`
    }
  }
}

export default function ProductPage({ params }: PageProps) {
  const product = getVoucherData(params.slug)

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.title,
    "description": product.description,
    "image": product.logoUrl,
    "brand": {
      "@type": "Brand",
      "name": product.subTitle
    },
    "offers": product.vouchers.map((voucher: any) => ({
      "@type": "Offer",
      "name": voucher.amount,
      "price": voucher.price * (1 - voucher.discount / 100),
      "priceCurrency": "IDR",
      "availability": "https://schema.org/InStock"
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-4xl mx-auto">
        {/* Header */}
          <div className="mb-6">
          <Link href="/">
            <Button icon={<ArrowLeftOutlined />} className="mb-4">
              Kembali
            </Button>
          </Link>
        </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Info */}
          <Card className="h-fit">
            <div className="text-center">
              {product.logoUrl ? (
                <div className="relative h-48 w-full mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={product.logoUrl}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="h-48 w-full mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">No Image</span>
                </div>
              )}
              <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
              <p className="text-gray-600 mb-4">{product.subTitle}</p>
              <p className="text-sm text-gray-500">{product.description}</p>
            </div>
          </Card>

          {/* Purchase Form */}
          <Card title="Pilih Voucher" className="h-fit">
            <div className="space-y-4">
              {product.vouchers.map((voucher: any) => (
                <div key={voucher.id} className="border rounded-lg p-4 hover:border-blue-500 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">{voucher.amount}</h3>
                      {voucher.discount > 0 && (
                        <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
                          Diskon {voucher.discount}%
                        </span>
                      )}
                    </div>
                    <div className="text-right">
                      {voucher.discount > 0 && (
                        <div className="text-sm text-gray-400 line-through">
                          Rp {voucher.price.toLocaleString()}
                        </div>
                      )}
                      <div className="font-bold text-blue-600">
                        Rp {(voucher.price * (1 - voucher.discount / 100)).toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <Divider />

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">User ID / Email</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border rounded-lg"
                    placeholder="Masukkan User ID atau Email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Jumlah</label>
                  <InputNumber min={1} defaultValue={1} className="w-full" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Metode Pembayaran</label>
                  <Select 
                    className="w-full"
                    placeholder="Pilih metode pembayaran"
                    options={[
                      { value: 'dana', label: 'DANA' },
                      { value: 'gopay', label: 'GoPay' },
                      { value: 'ovo', label: 'OVO' },
                      { value: 'bank', label: 'Transfer Bank' }
                    ]}
                  />
                </div>

                <Button 
                  type="primary" 
                  size="large" 
                  className="w-full"
                  icon={<ShoppingCartOutlined />}
                >
                  Beli Sekarang
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}
