import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCovidData = createAsyncThunk(
    "covid/fetchCovidData",
    async () => {
        const apiData = await fetch(
            "https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise"
        );
        const jsonData = await apiData.json();
        return jsonData;
    }
);


const covidSlice = createSlice({
  name: "covid",
  initialState: {
    data: null,
    selectedState: null,
    status: "idle", 
  },
  reducers: {
    setSelectedState: (state, action) => {
        console.log("state",state,action);
      state.selectedState = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCovidData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCovidData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchCovidData.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setSelectedState } = covidSlice.actions;

export default covidSlice.reducer;
