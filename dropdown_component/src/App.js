import "./App.css";
import Dropdown from "./Dropdown";
import SingleDropdown from "./SingleDropdown";

function App() {
  const options = [
    "Select All",
    "Selection 1",
    "Selection 2",
    "Selection 3",
    "Selection 4",
    "Selection 5",
    "Selection 6",
    "Select None",
  ];
  const defaultOption = "Please select from the options below";
  return (
    <div className="App">
      <Dropdown options={options} defaultOption={defaultOption} />

      <SingleDropdown options={options} defaultOption={defaultOption} />
    </div>
  );
}

export default App;
