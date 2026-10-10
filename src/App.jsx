//app.jsx is the parent of everything else being used
//components should begin with a capital letter
import "./App.css";
import Navbar from "./components/Navbar";
import Catalog from "./pages/Catalog";

function App() {
  return (
    <div>
      <h1>Hello from React!</h1>
      <Navbar></Navbar>
      <Catalog></Catalog>
    </div>
  );
}

export default App;
