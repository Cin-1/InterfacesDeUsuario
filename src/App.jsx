import { Box } from "@mui/material";
import "./App.css";
import { Footer } from "./components/footer";
import SearchAppBar from "./components/navbar";
import SimpleContainer from "./components/presentacion";
import FotosDeComida from "./components/localYMenu";
import Ubicacion from "./components/mapa";
function App() {
  return (
    <>
      <SearchAppBar />
      <SimpleContainer></SimpleContainer>
      <FotosDeComida></FotosDeComida>
      <Ubicacion></Ubicacion>
      <Footer></Footer>
    </>
  );
}

export default App;
