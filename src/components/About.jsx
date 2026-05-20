import React from 'react';

export default function About() {
  return (
    <div id="inicio" className="container mt-5">
      <h1 className="text-center mb-2 text-white">Acerca de</h1>
      <div className="accent-line" />
      <div className="row justify-content-center mb-5 mt-3">
        <div className="col-md-5 mb-3 text-center text-md-start text-white fs-5">
          Moto Style es una empresa dedicada al acondicionamiento, mantenimiento y
          personalización de motocicletas, comprometida con brindar un servicio
          confiable y de alta calidad. Combinamos experiencia técnica con atención
          rápida para garantizar que cada moto reciba el cuidado adecuado y un
          rendimiento óptimo.
        </div>
        <div className="col-md-5 mb-3 text-center text-md-start text-white fs-5">
          Nos destacamos por ofrecer soluciones integrales para cada motociclista:
          mecánica rápida, repuestos de calidad y una atención personalizada que
          busca siempre la satisfacción del cliente. En Moto Style trabajamos con
          pasión por las motos y la confianza de quienes las conducen.
        </div>
      </div>
    </div>
  );
}
