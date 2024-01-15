import { Box } from '@chakra-ui/react'
import Hero from './Hero'
import FeatureCards from './FeatureCards'
import VideoBackgroundSection from './VideoBackgroundSection'

import React from 'react'


const Home = () => {
    const heroImage = '/heroImage.jpg';
    const tradingVideo = '/analysis_-_31251 (720p).mp4';
  return (
    <Box>
        <Hero
        title='JSAX Trade'
        description="UNLOCK THE POWER OF DATA-DRIVEN INSIGHTS BUILT FOR TRADERS BY TRADERS."
        backgroundImage={heroImage}
        />
        <VideoBackgroundSection videoSrc={tradingVideo}>
          <FeatureCards />
        </VideoBackgroundSection>

    </Box>
  )
}

export default Home