import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup
} from "react-simple-maps";
import ReactTooltip from "react-tooltip";

import india from '../topojsons/india.json';
import StateChart from "./StateChart";

const MapChart = ({ setTooltipContent, setStateName, setShowDistrict }) => {
    const curr_SelectedState = useSelector((state)=> state?.covid.selectedState);
    const reduxData = useSelector((state)=> state?.covid.data);
    return curr_SelectedState === null ? (
        <div style={{ position: 'relative', width: '100%', height: '500px',display:'flex',alignItems:'center',justifyContent:"center" }}>
            <ComposableMap data-tip="" projection="geoMercator" width={150} height={150} projectionConfig={{ scale: 220 }}>
                <ZoomableGroup zoom={1} center={[80, 22]}>
                    <Geographies geography={india}>
                        {({ geographies }) =>
                            geographies.map(geo => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    style={{
                                        default: {
                                            fill: "#D6D6DA",
                                            outline: "none"
                                        },
                                        hover: {
                                            fill: "#D6D6DA",
                                            outline: "none"
                                        },
                                        pressed: {
                                            fill: "#D6D6DA",
                                            outline: "none"
                                        }
                                    }}
                                />
                            ))
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    padding: '5px',
                    borderRadius: '8px',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                    textAlign: 'center',
                }}
            >
                <strong>Cases: {curr_SelectedState === null ? reduxData?.data?.total?.active:curr_SelectedState?.active}</strong>
            </div>
        </div>
    )
    :
    (
        <div style={{ height: '500px', backgroundColor: 'black',alignItems:"center" }}>
                <Container maxWidth="md" style={{ border: '1px solid black', backgroundColor: 'black' }}>
                    <StateChart selectedState={curr_SelectedState?.state} />
                    <Typography>{curr_SelectedState?.state}</Typography>
                </Container>
            </div>
    );
};

export default MapChart;