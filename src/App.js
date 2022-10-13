import logo from "./logo.svg";
import "./App.css";
import router from "./AuthRoutes";
import { RouterProvider } from "react-router-dom";
import RoutesComponent from "./RoutesComponent";

function App() {
  return (
    <div className="App">
      <RoutesComponent />
    </div>
  );
}

export default App;
