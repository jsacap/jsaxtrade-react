import { Box } from '@chakra-ui/react'
import Hero from './Hero'
import Features from './Features'
import EarlyAccess from './EarlyAccess';


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
        <Features />
        <EarlyAccess />
            


    </Box>
  )
}

export default Home