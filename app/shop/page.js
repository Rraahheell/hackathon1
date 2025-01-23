import BigCompanies from '@/components/BigCampanies'
import Navbar from '@/components/Navbar'
import CategoryGrid from '@/sections/shop/CategoryGrid'
import Hero from '@/sections/shop/Hero'
import ShopPage from '@/sections/shop/ShopPage'
import React from 'react'

const Shop = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <ShopPage /> */}
      <CategoryGrid />
      <BigCompanies/>
    </div>
  )
}

export default Shop
