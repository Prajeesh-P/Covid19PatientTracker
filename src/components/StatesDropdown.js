import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useDispatch,useSelector } from "react-redux";
import { setSelectedState } from "../redux/covidSlice";


function SearchComponent() {
  const [stateSelected, setStateSelected] = useState(null);
  const reduxData = useSelector((state) => state.covid.data);
  const statesList = reduxData?.data?.statewise || []; 
  const dispatch = useDispatch();

  const handleStateChange = (event, newValue) => {
    setStateSelected(newValue);
  };

  const handleFilterClick = () => {
    const matchedState = statesList.find((ele) =>
      ele?.state?.trim().replace(/\s+/g, "").toLowerCase() ===
      stateSelected?.state?.trim().replace(/\s+/g, "").toLowerCase()
    );

    if (matchedState) {
      dispatch(setSelectedState(matchedState));
    }
  };

  const handleClearClick = () => {
    dispatch(setSelectedState(null)); 
    setStateSelected(null);
  };

  return (
    <div className="search-component">
      <Autocomplete
        options={statesList}
        getOptionLabel={(option) => option.state}
        value={stateSelected} 
        onChange={handleStateChange}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search for a State"
            variant="outlined"
          />
        )}
        sx={{
          margin: "24px 5px",
          backgroundColor: "#fff",
          borderRadius: "5px",
          width: "300px",
          "& .MuiAutocomplete-inputRoot": {
            minWidth: "auto", 
          },
          "& .MuiAutocomplete-listbox": {
            minWidth: "auto", 
          },
        }}
      />
      <button
        style={{
          width: "100px",
          backgroundColor: "#5ab9f0",
          fontWeight: 600,
          color: "black",
        }}
        onClick={handleFilterClick}
      >
        Filter
      </button>
      <button
        style={{
          width: "100px",
          backgroundColor: "#5ab9f0",
          fontWeight: 600,
          color: "black",
        }}
        onClick={handleClearClick}
      >
        Clear
      </button>
    </div>
  );
}

export default SearchComponent;
