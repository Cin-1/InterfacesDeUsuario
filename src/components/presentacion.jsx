  import * as React from "react";
  import Box from "@mui/material/Box";
  import tostadoImage from '../images/tostadoP.jpg'

  export default function SimpleContainer() {
    return (
      <Box sx={{ bgcolor: "#556cd6", textAlign: "center", fontSize: "17px", fontWeight: "600"}}>
        
        <p>
          En "Tostados del Mundo" nos especializamos en ofrecer una experiencia
          culinaria única en Argentina con nuestros famosos tostados de jamón y
          queso. Nuestra cafetería es un lugar acogedor y moderno, diseñado para
          que te sientas como en casa desde el momento en que entras. Con una
          decoración que mezcla elementos rústicos y contemporáneos, creamos un
          ambiente perfecto para disfrutar de una comida rápida pero deliciosa, un
          café relajado o una charla amena con amigos y familiares.
        </p>
        <p>
          La historia de "Tostados del Mundo" comienza en Suiza, donde descubrimos
          una pequeña cafetería familiar que llevaba generaciones perfeccionando
          la receta del tostado de jamón y queso. Inspirados por su dedicación a
          la calidad y a los ingredientes artesanales, decidimos traer esta
          tradición a Argentina. Nuestro fundador, un apasionado de la gastronomía
          y los viajes, adaptó la receta original suiza para combinarla con los
          sabores y productos locales, creando así una fusión única que ha
          encantado a nuestros clientes desde el primer día.
        </p>
        <p>
          En "Tostados del Mundo" nuestra filosofía se centra en la calidad, la
          autenticidad y la satisfacción del cliente. Nos enorgullece utilizar
          solo los mejores ingredientes, seleccionados con cuidado para garantizar
          que cada tostado sea una obra maestra culinaria. Creemos que la comida
          debe ser un placer y un momento para compartir, por eso nos esforzamos
          en crear un ambiente cálido y amigable donde todos se sientan
          bienvenidos. Ven y descubre cómo una simple combinación de jamón y queso
          puede convertirse en una experiencia gastronómica inolvidable.
        </p>
        <Box sx={{ textAlign: "center", fontSize: "30px", fontWeight: "999" }}>
          ¡Te esperamos para que conozcas la especialidad de la casa!
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", bgcolor: "#556cd6", height:"500px"}}>
        <Box sx={{ width: "50%", overflow: "hidden" }}>
            <img
              src={tostadoImage}
              alt="Tostados del mundo"
              width="100%"
              height="100%"
            style={{ objectFit: "cover" }}
            />
        </Box>
          <iframe
          src="https://www.youtube.com/embed/Q7lnjV4XNbY?si=J4iZXO8JNQgKiw2I" title="Video de tostado" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
          width="50%"
          height="100%"
        />
    </Box>
  </Box>
    );
  }
