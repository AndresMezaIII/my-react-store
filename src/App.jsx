//app.jsx is the parent of everything else being used
//components should begin with a capital letter
import "./App.css";
import Navbar from "./components/Navbar";
import Catalog from "./pages/Catalog";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Catalog></Catalog>
      <Footer></Footer>
    </div>
  );
}

export default App;
