import About from "./components/About";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Interests from "./components/Interests";
import image from "./assets/image/Rectangle 90.png";

function App() {
  return (
    <div className="App">
      <img width="300px" src={image} alt="" />
      <div className="texts">
        <Info />
        <About />
        <Interests />
      </div>
        <Footer />
    </div>
  );
}

export default App;
