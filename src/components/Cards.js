import React, { useEffect } from "react";

function Cards({ displayData,selectedState }) {
  
  return selectedState?.length === 0 ? (
    <div class="flex-container">
      <div className="card">
        <h5>Active</h5>
        <h6>{displayData?.data?.total?.active}</h6>
      </div>
      <div className="card">
        <h5>Confirmed</h5>
        <h6>{displayData?.data?.total?.confirmed}</h6>
      </div>
      <div className="card">
        <h5>Recovered</h5>
        <h6>{displayData?.data?.total?.recovered}</h6>
      </div>
      <div className="card">
        <h5>Deaths</h5>
        <h6>{displayData?.data?.total?.deaths}</h6>
      </div>
    </div>
  ):
  (
    <div class="flex-container">
      <div className="card">
        <h5>Active State</h5>
        <h6>{selectedState.active}</h6>
      </div>
      <div className="card">
        <h5>Confirmed</h5>
        <h6>{selectedState?.confirmed}</h6>
      </div>
      <div className="card">
        <h5>Recovered</h5>
        <h6>{selectedState?.recovered}</h6>
      </div>
      <div className="card">
        <h5>Deaths</h5>
        <h6>{selectedState?.deaths}</h6>
      </div>
    </div>
  )
  
}

export default Cards;
