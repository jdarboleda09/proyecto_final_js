import React from 'react';

export default function WhoWeAre() {
  return (
    <>
      {/* ¿Quiénes Somos? */}
      <section id="nosotros" className="container my-5">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <img
              src="logo for MotoStyle with initials MS.webp"
              className="img-fluid rounded shadow"
              alt="Moto Style"
            />
          </div>
          <div className="col-12 col-md-6">
            <h1 className="mb-2 text-white">¿Quiénes Somos?</h1>
            <div className="accent-line" style={{ margin: '0 0 1.2rem' }} />
            <p className="text-white fs-5">
              En Moto Style nos especializamos en el acondicionamiento y
              mantenimiento profesional de motocicletas, ofreciendo un servicio
              confiable y rápido para cada cliente.
            </p>
            <p className="text-white fs-5">
              Nuestro objetivo es garantizar el mejor desempeño de tu moto con
              soluciones integrales y atención personalizada.
            </p>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section id='mision' className="container my-5">
        <h1 className="text-center mb-2 text-white">Misión y Visión</h1>
        <div className="accent-line" />
        <div className="row g-4 mt-2">

          {/* Misión */}
          <div className="col-12 col-md-6">
            <div className="card card-modern p-4 h-100">
              <div className="d-flex align-items-center mb-3 gap-3">
                <div className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                  style={{
                    width: 56, height: 56,
                    background: 'rgba(230,57,70,0.15)',
                    border: '2px solid rgba(230,57,70,0.4)'
                  }}>
                  <i className="bi bi-bullseye fs-4" style={{ color: 'var(--accent)' }} />
                </div>
                <h3 className="mb-0 text-white">Misión</h3>
              </div>
              <p className="text-white fs-5 mb-0">
                Brindar a los motociclistas un servicio de mantenimiento, reparación
                y personalización confiable, ágil y de alta calidad, ofreciendo
                repuestos originales y atención personalizada que garanticen el mejor
                rendimiento de cada moto y la tranquilidad de quienes la conducen.
              </p>
            </div>
          </div>

          {/* Visión */}
          <div className="col-12 col-md-6">
            <div className="card card-modern p-4 h-100">
              <div className="d-flex align-items-center mb-3 gap-3">
                <div className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                  style={{
                    width: 56, height: 56,
                    background: 'rgba(230,57,70,0.15)',
                    border: '2px solid rgba(230,57,70,0.4)'
                  }}>
                  <i className="bi bi-eye fs-4" style={{ color: 'var(--accent)' }} />
                </div>
                <h3 className="mb-0 text-white">Visión</h3>
              </div>
              <p className="text-white fs-5 mb-0">
                Ser el taller de referencia en la región para los motociclistas que
                exigen calidad, confianza y un servicio verdaderamente personalizado,
                expandiendo nuestra oferta con los mejores repuestos y accesorios del
                mercado.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}