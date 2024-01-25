import React from 'react'
import ContactForm from './ContactForm'

const EarlyAccess = () => {
    const bgImage = '/heroImage.jpg'
  return (
    <div className="early-access" style={{ backgroundImage: `url(${bgImage})` }}>
    <div className="container mt-10">
        <div className="row align-items-center form-box">
            <div className="col-md-6">
                {/* Left Column - Form */}
                <h2>Sign Up</h2>
                <p>Sign up for early access and receive the latest updates.</p>
                
                <ContactForm />
            </div>
            <div className="col-md-6">
                {/* Right Column - Heading and Description */}
                
                <h2>Request for Early Access</h2>
                <p>
                Join our platform as an early tester and dive into the world of advanced trading analytics for free!
                <br />
                As part of our select group, you'll have the opportunity to explore all platform features and shape 
                its future with your insights and feedback. 
                <br />
                Your contribution will refine and enhance the user 
                experience for traders worldwide. By joining us early, you not only get to test cutting-edge tools
                 but also accumulate valuable data before others. Make a meaningful impact on a platform that's 
                 revolutionizing the trading world.
                </p>
                
            </div>
            </div>
        </div>
        </div>


  )
}

export default EarlyAccess