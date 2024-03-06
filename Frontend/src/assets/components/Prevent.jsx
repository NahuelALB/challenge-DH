import React from 'react';
//Importar imagenes
import banner from '../img/banner.jpg';

function Prevent() {
  return (
    <>
      <header className="preventa">
        <h2>Búsqueda y selección</h2>
        <p className="text-center h5">
          Encontramos talento para tu empresa, en todos los cargos
          administrativos, profesionales y técnicos.
        </p>
        <div>
          <img src={banner} alt="Recursos Humanos" />
        </div>
      </header>
    </>
  );
}

export default Prevent;
