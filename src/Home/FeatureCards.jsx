import React from 'react'

const FeatureCards = () => {
  return (
    <div className="container text-center">
      <p className="section-subtitle text-dark">Why use JSAX Trade</p>
      <h2 className="section-title mb-6">Features</h2>
      <div className='row'>
        <div className="col-md-6 col-lg-3">
          <div className="feature-card">
            <div className="body">
              <img src="icons/journal.svg" alt="journal" className="icon" />
              <h6 className="title">Daily Markups</h6>
              <p className="subtitle">
                Track daily pre and post market analyses along key historical trading statistics.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="feature-card">
            <div className="body">
              <img src="icons/upload.svg" alt="upload" className="icon" />
              <h6 className="title">Feed Your Data</h6>
              <p className="subtitle">
                Manually input or upload your MT4/MT5 trading data and let our models analyze your data.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="feature-card">
            <div className="body">
              <img src="icons/chess.svg" alt="chess" className="icon" />
              <h6 className="title">Build Your Trading Plan</h6>
              <p className="subtitle">
                Get assistance in strategy development using the trade plan builder to build a bulletproof playbook.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="feature-card">
            <div className="body">
              <img src="icons/barchart.svg" alt="barchart" className="icon" />
              <h6 className="title">Trade Insights</h6>
              <p className="subtitle">
                Gain valuable insights from your trading data and reports once our AI has enough data to analyze your trades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default FeatureCards