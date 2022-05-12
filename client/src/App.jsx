import logo from "./logo.svg";
import "./App.css";
import Accommodations from "./components/accommodations";
import AccommodationAverage from "./components/AccommodationAverage";
import FilterByWithWhom from "./components/filterByWithWhom";

function App() {
  return (
    <div className="App">
      <AccommodationAverage />

      <Accommodations />
    </div>
  );
}

export default App;
