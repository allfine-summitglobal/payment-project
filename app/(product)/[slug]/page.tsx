interface PageProps {
  params: {
    slug: string
  }
}

export default function ProductPage({ params }: PageProps) {
  console.log('params.slug', params.slug)

  return (
    <>
     detail
    </>
  )
}
