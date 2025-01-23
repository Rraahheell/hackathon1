import Navbar from '@/components/Navbar'
import ShopPage from '@/sections/shop/ShopPage'
import ShowProducts from '@/sections/shop/ShowProduct'
import React from 'react'

const ProductPage = () => {
  return (
    <div>
      <Navbar />
      <ShowProducts />
      <ShopPage />
    </div>
  )
}

export default ProductPage
