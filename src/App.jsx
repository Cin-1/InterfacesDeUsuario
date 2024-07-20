import { Box } from "@mui/material";
import "./App.css";
import { Footer } from "./components/footer";
import SearchAppBar from "./components/navbar";
import SimpleContainer from "./components/presentacion";
import FotosDeComida from "./components/localYMenu";
import Ubicacion from "./components/mapa";
import { Horario } from "./components/contacto";

function App() {
  return (
    <>
      <SearchAppBar />
      <SimpleContainer></SimpleContainer>
      <FotosDeComida></FotosDeComida>
      <Horario></Horario>
      <Ubicacion></Ubicacion>
      
      <Footer></Footer>
    </>
  );
}

export default App;
