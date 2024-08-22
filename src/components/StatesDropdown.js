import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const states = [
  { label: "California" },
  { label: "Texas" },
  { label: "New York" },
  { label: "Florida" },
  // Add more states here
];

function SearchComponent({ data, setSelectedState }) {
  const [stateSelected, setStateSelected] = useState(null);
  const statesList = data?.data?.statewise || []; // Ensure statesList is an array

  const handleStateChange = (event, newValue) => {
    setStateSelected(newValue);
  };

  const handleFilterClick = () => {
    const matchedState = data?.data?.statewise?.find((ele) =>
      ele?.state?.trim().replace(/\s+/g, '').toLowerCase() === stateSelected?.state?.trim().replace(/\s+/g, '').toLowerCase()
    );
    
    if (matchedState) {
      setSelectedState(matchedState);
    }
  };

  const handleClearClick = () => {
    setSelectedState([]);
    setStateSelected(null); // Clear the selected state
  };

  return (
    <div className="search-component">
      <Autocomplete
        options={statesList}
        getOptionLabel={(option) => option.state}
        value={stateSelected} // Set the value prop to the selected state
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
            minWidth: "auto", // Input width
          },
          "& .MuiAutocomplete-listbox": {
            minWidth: "auto", // Dropdown width
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
