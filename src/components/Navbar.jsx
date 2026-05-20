import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center text-white" to="/">
          <img
            src="logo for MotoStyle with initials MS.webp"
            alt="Logo MotoStyle"
            className="rounded-circle me-2"
            style={{ width: 35, height: 35, objectFit: 'cover' }}
          />
          MotoStyle
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse ${open ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {isHome ? (
                <a className="nav-link text-white" href="#inicio" onClick={() => setOpen(false)}>
                  Inicio
                </a>
              ) : (
                <Link className="nav-link text-white" to="/" onClick={() => setOpen(false)}>
                  Inicio
                </Link>
              )}
            </li>

            {isHome && [
              { label: 'Servicios', href: '#servicios' },
              { label: 'Nosotros',  href: '#nosotros'  },
              { label: 'Mision y Vision',  href: '#mision'  },
            ].map(({ label, href }) => (
              <li className="nav-item" key={label}>
                <a
                  className="nav-link text-white"
                  href={href}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}

            <li className="nav-item">
              <Link
                className={`nav-link text-white ${!isHome ? 'active fw-bold' : ''}`}
                to="/tienda"
                onClick={() => setOpen(false)}
              >
                <i className="bi bi-shop me-1" />
                Tienda
              </Link>
            </li>

          

          </ul>
        </div>
      </div>
    </nav>
  );
}
