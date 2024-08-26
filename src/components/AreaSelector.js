import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import MapChart from './MapChart';

const AreaSelector = () => {
    const [content, setContent] = useState("");
    return (
        <React.Fragment>
            <div style={{ backgroundColor: 'black'}}>
                <MapChart setTooltipContent={setContent} />
                <ReactTooltip>{content}</ReactTooltip>
            </div>
        </React.Fragment>
    );
}

export default AreaSelector;