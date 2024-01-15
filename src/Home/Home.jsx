import { Box } from '@chakra-ui/react'
import Hero from './Hero'

import React from 'react'


const Home = () => {
    const heroImage = '/heroImage.jpg'
  return (
    <Box>
        <Hero
        title='JSAX Trade'
        description="UNLOCK THE POWER OF DATA-DRIVEN INSIGHTS BUILT FOR TRADERS BY TRADERS."
        backgroundImage={heroImage}
        />
    </Box>
  )
}

export default Home