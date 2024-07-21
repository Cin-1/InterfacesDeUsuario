import { Layout } from "./components/layout";
import { Footer } from "./components/footer";
import { Galery } from "./components/galery";
import { HeroBanner } from "./components/heroBanner";
import { PageContainer } from "./components/container";
import { Map } from "./components/map";
import { NavBar } from "./components/navBar";
import { Schedule } from "./components/schedule";

function App() {
  return (
    <>
      <Layout>
        <NavBar />
        <PageContainer>
          <HeroBanner />
          <Galery />
          <Schedule />
          <Map />
        </PageContainer>
        <Footer />
      </Layout>
    </>
  );
}

export default App;
