import React, { useState } from 'react';

const slides = [
  {
    src: 'https://web2.fireboldweb.com/wp-content/uploads/2024/10/011020241727790567benelli-180s-abs-gris-foto1.png',
    alt: 'Moto 1',
  },
  {
    src: 'https://web2.fireboldweb.com/wp-content/uploads/2022/06/kawasaki-z1000.png',
    alt: 'Moto 2',
  },
  {
    src: 'https://www.carroya.com/noticias/sites/default/files/motos_nuevas_bogota_carroya_.webp',
    alt: 'Moto 3',
  },
];

export default function Carousel() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((active - 1 + slides.length) % slides.length);
  const next = () => setActive((active + 1) % slides.length);

  return (
    <div id="carouselMotoStyle" className="carousel slide mt-4">
      {/* Indicators */}
      <div className="carousel-indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={i === active ? 'active' : ''}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        {slides.map((slide, i) => (
          <div key={i} className={`carousel-item ${i === active ? 'active' : ''}`}>
            <img src={slide.src} className="d-block w-100" alt={slide.alt} />
          </div>
        ))}
      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" onClick={prev}>
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" onClick={next}>
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
}
