import { Footer } from "./components/footer";
import { Galery } from "./components/galery";
import { HeroBanner } from "./components/heroBanner";
import { PageContainer } from "./components/layout";
import { Map } from "./components/map";
import { NavBar } from "./components/navBar";
import { Schedule } from "./components/schedule";

function App() {
  return (
    <>
      <NavBar />
      <PageContainer>
        <HeroBanner />
        <Galery />
        <Schedule />
        <Map />
      </PageContainer>
      <Footer />
    </>
  );
}

export default App;
