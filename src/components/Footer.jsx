import React from 'react';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row text-center gy-3">

          <div className="col-md-4">
            <i className="bi bi-envelope me-2" />
            <a href="mailto:motostylemzl@gmail.com" className="text-white">
              motostylemzl@gmail.com
            </a>
          </div>

          <div className="col-md-4">
            <i className="bi bi-phone me-2" />
            <a href="tel:+573124567890" className="text-white">
              312 4567890
            </a>
          </div>

          <div className="col-md-4">
            <a
              href="https://web.whatsapp.com"
              target="_blank"
              rel="noreferrer"
              className="text-white me-3"
            >
              <i className="bi bi-whatsapp fs-4 footer-icon whatsapp" />
            </a>
            <a
              href="https://www.facebook.com/?locale=es_LA"
              target="_blank"
              rel="noreferrer"
              className="text-white me-3"
            >
              <i className="bi bi-facebook fs-4 footer-icon facebook" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-white"
            >
              <i className="bi bi-instagram fs-4 footer-icon instagram" />
            </a>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col text-center">
            <p className="mb-0">&copy; 2025 MotoStyle. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
