import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const { query } = useRouter()
  const [product, setProduct] = useState<TProduct>()

  useEffect(() => {
    window
      .fetch(`/api/avo/${query.id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
  }, [])

  return (
    <section>
      <h1>{product?.name}</h1>
    </section>
  )
}

export default ProductPage
