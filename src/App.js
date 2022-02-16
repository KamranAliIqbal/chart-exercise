import { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import { UserData } from "./Data";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["red", "blue", "green", "purple", "black"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="App">
      <div style={{ width: 900 }}>
        <BarChart chartData={userData} />
      </div>
      <div style={{ width: 900 }}>
        <LineChart chartData={userData} />
      </div>
    </div>
  );
}

export default App;
