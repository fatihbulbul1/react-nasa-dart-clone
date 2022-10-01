import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Satallite from "./components/Satallite";
import css from "./index.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <Footer />
      <Satallite />
    </div>
  );
}

export default App;
