import React from 'react'
import { Link } from 'react-router-dom'

const PRODUCT=[
  {
    id:'p1',
    title:'product 1'

  },
  {
    id:'p2',
    title:'product 2'

  },
  {
    id:'p3',
    title:'product 3'

  },


]

const Product = () => {


  return (
    <div>
      <h1>product page</h1>
      <ul>
      {PRODUCT.map((product)=>(
        <li key={product.id}>
          <Link to={`/product/${product.id}`}>{product.title}</Link>
        </li>
      ))}

      </ul>
    </div>
  )
}

export default Product
