import React from 'react'
import Hero from '../Hero/Hero'
import Popular from '../Popular/Popular'
import Offers from '../Offer/Offers'
import Flex from '../Grid/Grid'
import ImageSlider from '../Brands/Brand'
import brand1 from '../assets/brand1.jpg'
import brand2 from '../assets/brand2.png'
import brand3 from '../assets/brand3.jpg'
import Perfume from '../Perfumes/Perfumes'
import Inter from '../Inter/Inter'

const Home = () => {
  const Image = [brand1,brand2,brand3]; 

  return (
    <div>
        <Hero />
        <Popular />
        <Flex />
        <ImageSlider images={Image} />
        <Perfume />
        <Offers />
        <Inter />
    </div>
  )
}

export default Home
