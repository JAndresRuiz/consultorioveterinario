const Paciente = () => {
  return (
      <div className="mx-5 mr-3 mb-5 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold text-gray-700 uppercase">
          Nombre: <span className="font-normal normal-case">Cyrus</span>
        </p>
        <p className="font-bold text-gray-700 uppercase">
          Propietario: <span className="font-normal normal-case">Andrés</span>
        </p>
        <p className="font-bold text-gray-700 uppercase">
          Email:{" "}
          <span className="font-normal normal-case">correo@correo.com</span>
        </p>
        <p className="font-bold text-gray-700 uppercase">
          Fecha alta:{" "}
          <span className="font-normal normal-case">10/12/2022</span>
        </p>
        <p className="font-bold text-gray-700 uppercase">
          Síntomas:{" "}
          <span className="font-normal normal-case">Muy necio el perrito</span>
        </p>
      </div>
  );
};

export { Paciente };
