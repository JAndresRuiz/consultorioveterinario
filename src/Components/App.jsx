import { Header } from "./Header";
import { Formulario } from "./Formulario";
import { Historico } from "./Historico";
//import "../Styles/App.css";

function App() {
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex" >
        <Formulario />
        <Historico />
      </div>
    </div>
  );
}

export default App;
