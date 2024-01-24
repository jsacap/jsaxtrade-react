import { Box } from '@chakra-ui/react'
import Hero from './Hero'
import Features from './Features'
import EarlyAccess from './EarlyAccess';


const Home = () => {
    const heroImage = '/heroImage.jpg';
    const bgVideo = 'home/bgvideo.mp4'
  return (
    
    <Box>      
        <Hero
        title='JSAX Trade'
        description="UNLOCK THE POWER OF DATA-DRIVEN INSIGHTS BUILT FOR TRADERS BY TRADERS."
        background={bgVideo}
        backgroundType='video'
        />
        <Features />
        <EarlyAccess />
            


    </Box>
  )
}

export default Home