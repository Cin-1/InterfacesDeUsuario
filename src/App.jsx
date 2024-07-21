import "./App.css";
import { Footer } from "./components/footer";
import { Galery } from "./components/galery";
import { HeroBanner } from "./components/heroBanner";
import { Map } from "./components/map";
import { NavBar } from "./components/navBar";
import { Schedule } from "./components/schedule";

function App() {
  return (
    <>
      <NavBar />
      <HeroBanner />
      <Galery />
      <Schedule />
      <Map />
      <Footer />
    </>
  );
}

export default App;
