import "./index.css";
import { useEffect } from "react";
import Cards from "./components/Cards";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import StatesDropdown from "./components/StatesDropdown";
import Shimmer from "./components/Shimmer";
import { useDispatch, useSelector } from "react-redux";
import { fetchCovidData } from "./redux/covidSlice";
import Container from '@material-ui/core/Container';
import AreaSelector from "./components/AreaSelector";

function App() {
  const dispatch = useDispatch();
  const reduxData = useSelector((state) => state.covid.data);
  const status = useSelector((state) => state.covid.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCovidData());
    }
  }, [dispatch, status]);


  return reduxData === null ? <Shimmer /> : (
    <div className="App">
      <div className="container">
        <div className="heading">
          <h1>Covid19 India DashBoard</h1>
        </div>
        <StatesDropdown />
      </div>
      <div className="sub-container">
        <div className="first-row">
          <Cards />
          <LineChart />
          <PieChart />
        </div>
        <div className="charts">
          <Container maxWidth="md">
            <AreaSelector />
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;
