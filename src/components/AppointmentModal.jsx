import React, { useState } from 'react';

const initialForm = {
  nombre: '',
  telefono: '',
  motivo: '',
  mensaje: '',
};

export default function AppointmentModal({ show, onClose }) {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Aquí puedes conectar con un backend o servicio de correo
    console.log('Cita solicitada:', form);
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm(initialForm);
      onClose();
    }, 1800);
  };

  if (!show) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="modal-backdrop fade show"
        onClick={onClose}
        style={{ zIndex: 1040 }}
      />

      {/* Modal */}
      <div
        className="modal fade show d-block"
        tabIndex="-1"
        style={{ zIndex: 1050 }}
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark text-white border border-secondary">

            <div className="modal-header border-0">
              <h5 className="modal-title">Solicitar Cita</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={onClose}
              />
            </div>

            <div className="modal-body">
              {sent ? (
                <div className="text-center py-4">
                  <i className="bi bi-check-circle-fill text-success fs-1" />
                  <p className="mt-3 fs-5">¡Solicitud enviada con éxito!</p>
                </div>
              ) : (
                <>
                  <div className="mb-3">
                    <label className="form-label">Nombre completo</label>
                    <input
                      type="text"
                      name="nombre"
                      className="form-control bg-secondary text-white border-0"
                      placeholder="Tu nombre"
                      value={form.nombre}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Número de contacto</label>
                    <input
                      type="tel"
                      name="telefono"
                      className="form-control bg-secondary text-white border-0"
                      placeholder="312 456 7890"
                      value={form.telefono}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Motivo de la cita</label>
                    <select
                      name="motivo"
                      className="form-select bg-secondary text-white border-0"
                      value={form.motivo}
                      onChange={handleChange}
                    >
                      <option value="">Selecciona una opción</option>
                      <option>Mantenimiento</option>
                      <option>Revisión general</option>
                      <option>Reparación</option>
                      <option>Diagnóstico eléctrico</option>
                      <option>Otro</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Mensaje (opcional)</label>
                    <textarea
                      name="mensaje"
                      className="form-control bg-secondary text-white border-0"
                      rows="3"
                      placeholder="Cuéntanos más del servicio que necesitas"
                      value={form.mensaje}
                      onChange={handleChange}
                    />
                  </div>
                </>
              )}
            </div>

            {!sent && (
              <div className="modal-footer border-0">
                <button className="btn btn-secondary" onClick={onClose}>
                  Cerrar
                </button>
                <button className="btn btn-primary" onClick={handleSubmit}>
                  Enviar solicitud
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  );
}
