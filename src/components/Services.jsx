import React from 'react';

const services = [
  {
    icon: 'soporte-tecnico.png',
    title: 'Mecánica Rápida',
    description:
      'Mantenimiento ágil y confiable para tu moto: cambio de aceite, ajustes y revisiones básicas al instante.',
  },
  {
    icon: 'piezas-de-repuesto.png',
    title: 'Repuestos',
    description:
      'Repuestos de calidad y asesoría para elegir e instalar las mejores piezas para tu moto.',
  },
  {
    icon: 'operador.png',
    title: 'Servicio al Cliente',
    description:
      'Atención cercana y soluciones rápidas para que disfrutes un servicio claro y confiable.',
  },
];

export default function Services({ onOpenModal }) {
  return (
    <section id="servicios" className="container mt-5">
      <h1 className="text-center mb-2 text-white">Nuestros Servicios</h1>
      <div className="accent-line" />
      <div className="row justify-content-center mt-4">
        {services.map((s) => (
          <div className="col-md-4 mb-4" key={s.title}>
            <div className="card card-modern p-3 h-100 text-center">
              <img
                src={s.icon}
                className="rounded-circle border border-secondary mx-auto mb-3"
                width="120"
                alt={s.title}
              />
              <h5>{s.title}</h5>
              <p className="flex-grow-1">{s.description}</p>
              <button
                className="btn btn-primary mt-2"
                onClick={onOpenModal}
              >
                Solicitar Cita
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
