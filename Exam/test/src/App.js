import './App.css';
import { Footer } from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
import { display } from "./Components/CardShow";
function App() {
  return (
    <>
      <Navbar />
      <display/>
      <Footer/>
      </>
  );
}

export default App;
