import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

const ProductItems = () => {
    const params= useParams()

  return (
    <div>
      <h1>Product items</h1>
      <p>{params.productId}</p>
      <Link to='..' relative='path'>Back</Link>
    </div>
  )
}

export default ProductItems
