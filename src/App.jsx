import { Layout } from "./components/layout";
import { Footer } from "./components/footer";
import { Galery } from "./components/galery";
import { HeroBanner } from "./components/heroBanner";
import { PageContainer } from "./components/layout/container";
import { Map } from "./components/map";
import { NavBar } from "./components/navBar";
import { Schedule } from "./components/schedule";
import VideoContainer from "./components/video";
import { Banner } from "./components/layout/header";

function App() {
  return (
    <>
      <Layout>
        <NavBar />
        <Banner />
        <PageContainer>
          <HeroBanner />
          <Galery />
          <Schedule />
          <Map />
          <VideoContainer />
        </PageContainer>
        <Footer />
      </Layout>
    </>
  );
}

export default App;
