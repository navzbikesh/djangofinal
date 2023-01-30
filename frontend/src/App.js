import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Users from "./Users";
import Card from "./Card";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Vehicles from "./Vehicles";
import Trips from "./Trips";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="row">
          <div class="column">
            <Card title="Users" imageUrl="/assets/images/Users.png"></Card>
          </div>
          <div class="column">
            <Card
              title="Vehicles"
              imageUrl="/assets/images/Vehicles.png"
            ></Card>
          </div>
          <div class="column">
            <Card title="Trips" imageUrl="/assets/images/Trips.png"></Card>
          </div>
        </div>

        <Routes>
          <Route path="/users" element={<Users />} />

          <Route path="/vehicles" element={<Vehicles />} />

          <Route path="/trips" element={<Trips />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
