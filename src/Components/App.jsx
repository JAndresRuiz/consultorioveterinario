import { useState } from "react";
import { Header } from "./Header";
import { Formulario } from "./Formulario";
import { Historico } from "./Historico";
//import "../Styles/App.css";

function App() {

  const [ pacientes, setPacientes ] = useState([]);

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex" >
        <Formulario 
          pacientes={pacientes}
          setPacientes={setPacientes}
        />
        <Historico />
      </div>
    </div>
  );
}

export default App;
