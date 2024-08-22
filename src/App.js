import logo from "./logo.svg";
import "./index.css";
import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import LineChart from "./components/LineChart";
import MyPieChart from "./components/PieChart";
import PieChart from "./components/PieChart";
import CovidMap from "./components/CovidMap";
import StatesDropdown from "./components/StatesDropdown";
import Shimmer from "./components/Shimmer";

function App() {
  const [data, setData] = useState(null);
  const [selectedState, setSelectedState] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const apiData = await fetch(
      "https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise"
    );
    const jsonData = await apiData.json();
    console.log(jsonData, data?.length);

    setData(jsonData);
  }

  useEffect(() => {
    console.log(data === null ? "Data is null" : "Data is not null");
  }, [data]);

  if (data === null) return <Shimmer />;
  return (
    <div className="App">
      <div className="container">
        <div className="heading">
          <h1>Covid19 India DashBoard</h1>
        </div>
        <StatesDropdown data={data} setSelectedState={setSelectedState} />
      </div>
      <div className="sub-container">
        <div className="first-row">
          <Cards displayData={data} selectedState={selectedState} />
          <LineChart displayData={data} selectedState={selectedState} />
          <PieChart displayData={data} selectedState={selectedState} />
        </div>
        <div className="charts">
          <CovidMap displayData={data} selectedState={selectedState} />
        </div>
      </div>
    </div>
  );
}

export default App;
