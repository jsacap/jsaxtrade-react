import React from 'react'

const EarlyAccess = () => {
    const bgImage = 'home/officeSydney2.png'
  return (
    <div className="early-access" style={{ backgroundImage: `url(${bgImage})` }}>
    <div className="container">
        <div className="row align-items-center">
            <div className="col-md-6">
                {/* Left Column - Form */}
                <form>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Email" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className="col-md-6">
                {/* Right Column - Heading and Description */}
                <h2>Heading Here</h2>
                <p>Your description goes here...</p>
            </div>
            </div>
        </div>
        </div>


  )
}

export default EarlyAccess