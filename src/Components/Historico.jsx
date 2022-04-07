import { Paciente } from "./Paciente";
import "../Styles/Historico.css"

const Historico = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5">
      <h2 className="font-black text-3xl text-center">Lista de pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus{" "}
        <span className="text-indigo-600 font-bold">pacientes y citas</span>
      </p>
      <div className="md:h-screen overflow-y-scroll" id="Historico" >
        <Paciente />
        <Paciente />
        <Paciente />
        <Paciente />
        <Paciente />
        <Paciente />
        <Paciente />
      </div>
    </div>
  );
};

export { Historico };
