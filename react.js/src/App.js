import "./App.css";
import Navbar from "./components/NavBar";
import ILC from "./components/ItemListContainer";

function App() {
  const StoreName = "Boutique";

  return (
    <div className="App">
      <header>
        <navbar>
          <Navbar />
        </navbar>
        <ILC greeting={StoreName} />
      </header>
    </div>
  );
}

export default App;
