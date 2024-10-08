import React from "react";
import { useSelector } from "react-redux";

function Cards() {
  const reduxData = useSelector((state) => state.covid.data);
  const selectedState = useSelector((state) => state.covid.selectedState);

  return selectedState === null ? (
    <div class="flex-container">
      <div className="card">
        <h5>Active</h5>
        <h6>{reduxData?.data?.total?.active}</h6>
      </div>
      <div className="card">
        <h5>Confirmed</h5>
        <h6>{reduxData?.data?.total?.confirmed}</h6>
      </div>
      <div className="card">
        <h5>Recovered</h5>
        <h6>{reduxData?.data?.total?.recovered}</h6>
      </div>
      <div className="card">
        <h5>Deaths</h5>
        <h6>{reduxData?.data?.total?.deaths}</h6>
      </div>
    </div>
  ):
  (
    <div class="flex-container">
      <div className="card">
        <h5>Active State</h5>
        <h6>{selectedState?.active}</h6>
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
