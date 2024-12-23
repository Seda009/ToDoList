import logo from "./logo.svg";
import "./App.css";
import MenuBar from "./components/projects";
import ToDoCont from "./components/ToDoCont";
import InputForms from "./components/inputForms";

function App() {
  return (
    <div className="App">
      <div className="return">
        {/* <MenuBar></MenuBar> */}
        <InputForms></InputForms>
        <ToDoCont />
      </div>
    </div>
  );
}

export default App;
