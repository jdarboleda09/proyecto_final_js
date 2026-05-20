import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const productos = [
  // Repuestos
  {
    id: 1, categoria: 'repuestos',
    nombre: 'Kit de cadena y piñones',
    descripcion: 'Kit completo de transmisión para motos 125–250cc. Alta durabilidad.',
    precio: 120000,
    icon: 'bi-gear-wide-connected',
  },
  {
    id: 2, categoria: 'repuestos',
    nombre: 'Filtro de aire deportivo',
    descripcion: 'Filtro de alto flujo reutilizable, aumenta el rendimiento del motor.',
    precio: 85000,
    icon: 'bi-wind',
  },
  {
    id: 3, categoria: 'repuestos',
    nombre: 'Pastillas de freno delanteras',
    descripcion: 'Pastillas semimetálicas de alto rendimiento para frenado preciso.',
    precio: 65000,
    icon: 'bi-circle',
  },
  {
    id: 4, categoria: 'repuestos',
    nombre: 'Batería 12V 7Ah',
    descripcion: 'Batería sellada de larga vida para motos de mediano y alto cilindraje.',
    precio: 140000,
    icon: 'bi-battery-charging',
  },
  {
    id: 5, categoria: 'repuestos',
    nombre: 'Juego de bujías NGK',
    descripcion: 'Pack x4 bujías iridium para mejor encendido y menor consumo.',
    precio: 48000,
    icon: 'bi-lightning-charge',
  },
  {
    id: 6, categoria: 'repuestos',
    nombre: 'Aceite motor 10W40 sintético',
    descripcion: 'Aceite de alto rendimiento para motos 4T. Presentación 1 litro.',
    precio: 38000,
    icon: 'bi-droplet-half',
  },
  // Accesorios
  {
    id: 7, categoria: 'accesorios',
    nombre: 'Casco integral sport',
    descripcion: 'Certificación DOT/ECE. Visera antirayos UV, interior extraíble.',
    precio: 320000,
    icon: 'bi-shield-fill-check',
  },
  {
    id: 8, categoria: 'accesorios',
    nombre: 'Guantes de cuero moto',
    descripcion: 'Guantes reforzados con protección en nudillos y palma antideslizante.',
    precio: 95000,
    icon: 'bi-hand-index-thumb',
  },
  {
    id: 9, categoria: 'accesorios',
    nombre: 'Mochila porta herramientas',
    descripcion: 'Bolso lateral compacto con organizador interior para herramientas esenciales.',
    precio: 75000,
    icon: 'bi-bag-fill',
  },
  {
    id: 10, categoria: 'accesorios',
    nombre: 'Candado antirrobo disco',
    descripcion: 'Candado de disco con alarma 110 dB, acero endurecido.',
    precio: 110000,
    icon: 'bi-lock-fill',
  },
  {
    id: 11, categoria: 'accesorios',
    nombre: 'Soporte celular manillar',
    descripcion: 'Soporte universal con rotación 360°, compatible con celulares de 4"–7".',
    precio: 42000,
    icon: 'bi-phone-fill',
  },
  {
    id: 12, categoria: 'accesorios',
    nombre: 'Chaqueta reflectiva',
    descripcion: 'Chaqueta impermeable con franjas reflectivas y protecciones removibles.',
    precio: 280000,
    icon: 'bi-person-fill',
  },
];

const CATEGORIAS = [
  { key: 'todos',      label: 'Todos',      icon: 'bi-grid-fill'           },
  { key: 'repuestos',  label: 'Repuestos',  icon: 'bi-gear-wide-connected' },
  { key: 'accesorios', label: 'Accesorios', icon: 'bi-shield-fill-check'   },
];

function formatCOP(n) {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(n);
}

export default function Store() {
  const [categoria, setCategoria] = useState('todos');
  const [busqueda, setBusqueda] = useState('');
  const [carrito, setCarrito] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const visibles = productos.filter(p =>
    (categoria === 'todos' || p.categoria === categoria) &&
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const agregarAlCarrito = (producto) => {
    setCarrito(prev => {
      const existe = prev.find(i => i.id === producto.id);
      if (existe) return prev.map(i => i.id === producto.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...producto, qty: 1 }];
    });
  };

  const quitarDelCarrito = (id) => {
    setCarrito(prev => prev.filter(i => i.id !== id));
  };

  const totalCarrito = carrito.reduce((acc, i) => acc + i.precio * i.qty, 0);
  const cantidadCarrito = carrito.reduce((acc, i) => acc + i.qty, 0);

  return (
    <div>
      {/* ── Hero de la tienda ── */}
      <div className="store-hero py-5 text-white text-center">
        <div className="container">
          <h1 className="display-5 fw-bold mb-1">
            <i className="bi bi-shop me-2" style={{ color: 'var(--accent)' }} />
            Tienda MotoStyle
          </h1>
          <p className="fs-5 text-white-50 mb-0">
            Repuestos de calidad y accesorios para tu moto
          </p>
        </div>
      </div>

      <div className="container py-4">

        {/* ── Barra superior: buscador + carrito ── */}
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">

          <div className="input-group store-search" style={{ maxWidth: 340 }}>
            <span className="input-group-text bg-dark border-secondary text-white">
              <i className="bi bi-search" />
            </span>
            <input
              type="text"
              className="form-control bg-dark border-secondary text-white"
              placeholder="Buscar producto..."
              value={busqueda}
              onChange={e => setBusqueda(e.target.value)}
            />
          </div>

          <button
            className="btn btn-outline-light position-relative"
            onClick={() => setShowCart(!showCart)}
          >
            <i className="bi bi-cart3 me-1" />
            Carrito
            {cantidadCarrito > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                style={{ background: 'var(--accent)' }}>
                {cantidadCarrito}
              </span>
            )}
          </button>
        </div>

        {/* ── Panel del carrito ── */}
        {showCart && (
          <div className="card card-modern p-3 mb-4">
            <h5 className="mb-3">
              <i className="bi bi-cart3 me-2" style={{ color: 'var(--accent)' }} />
              Tu carrito
            </h5>
            {carrito.length === 0 ? (
              <p className="text-white-50 mb-0">El carrito está vacío.</p>
            ) : (
              <>
                <ul className="list-unstyled mb-3">
                  {carrito.map(item => (
                    <li key={item.id} className="d-flex justify-content-between align-items-center mb-2">
                      <span>{item.nombre} × {item.qty}</span>
                      <div className="d-flex align-items-center gap-2">
                        <span style={{ color: 'var(--accent)' }}>{formatCOP(item.precio * item.qty)}</span>
                        <button className="btn btn-sm btn-outline-danger py-0 px-1" onClick={() => quitarDelCarrito(item.id)}>
                          <i className="bi bi-x" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="d-flex justify-content-between fw-bold border-top border-secondary pt-2">
                  <span>Total</span>
                  <span style={{ color: 'var(--accent)' }}>{formatCOP(totalCarrito)}</span>
                </div>
                <button className="btn btn-primary w-100 mt-3">
                  <i className="bi bi-whatsapp me-2" />
                  Solicitar por WhatsApp
                </button>
              </>
            )}
          </div>
        )}

        {/* ── Filtros de categoría ── */}
        <div className="d-flex gap-2 flex-wrap mb-4">
          {CATEGORIAS.map(c => (
            <button
              key={c.key}
              className={`btn btn-sm ${categoria === c.key ? 'btn-primary' : 'btn-outline-secondary text-white'}`}
              onClick={() => setCategoria(c.key)}
            >
              <i className={`bi ${c.icon} me-1`} />
              {c.label}
            </button>
          ))}
        </div>

        {/* ── Grid de productos ── */}
        {visibles.length === 0 ? (
          <div className="text-center text-white-50 py-5">
            <i className="bi bi-search fs-1 d-block mb-2" />
            No se encontraron productos
          </div>
        ) : (
          <div className="row g-4">
            {visibles.map(p => (
              <div className="col-sm-6 col-lg-4" key={p.id}>
                <div className="card card-modern h-100 p-3 d-flex flex-column">
                  {/* Ícono del producto */}
                  <div className="product-icon-wrap mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: 80, height: 80,
                      background: 'rgba(230,57,70,0.15)',
                      border: '2px solid rgba(230,57,70,0.3)'
                    }}>
                    <i className={`bi ${p.icon} fs-2`} style={{ color: 'var(--accent)' }} />
                  </div>

                  {/* Badge categoría */}
                  <span className={`badge mb-2 align-self-start ${p.categoria === 'repuestos' ? 'bg-warning text-dark' : 'bg-info text-dark'}`}>
                    {p.categoria === 'repuestos' ? '⚙️ Repuesto' : '🛡️ Accesorio'}
                  </span>

                  <h5 className="mb-1">{p.nombre}</h5>
                  <p className="text-white-50 small flex-grow-1">{p.descripcion}</p>

                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="fw-bold fs-5" style={{ color: 'var(--accent)' }}>
                      {formatCOP(p.precio)}
                    </span>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => agregarAlCarrito(p)}
                    >
                      <i className="bi bi-cart-plus me-1" />
                      Agregar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Botón regresar al inicio ── */}
        <div className="text-center mt-5 mb-4">
          <Link to="/" className="btn btn-outline-light btn-lg px-5">
            <i className="bi bi-arrow-left-circle me-2" />
            Regresar al inicio
          </Link>
        </div>

      </div>
    </div>
  );
}
