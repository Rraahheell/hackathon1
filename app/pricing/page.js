import BigCompanies from '@/components/BigCampanies'
import FreeTrial from '@/components/FreeTrail'
import Navbar from '@/components/Navbar'
import Hero from '@/sections/pricing/Hero'
import PricingFAQs from '@/sections/pricing/PricingFAQs'

import React from 'react'

const Pricing = () => {
  return (
    <div className='contact-us'>
        <Navbar />
        <Hero />
        <FreeTrial />
        <PricingFAQs />
        <BigCompanies />
    </div>
  )
}

export default Pricing