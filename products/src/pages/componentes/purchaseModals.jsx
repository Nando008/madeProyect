import { X, CheckCircle2 } from "lucide-react";

function PurchaseModals({
  open,
  setOpen,
  openSuccess,
  setOpenSuccess,
  form,
  setForm,
  departamentosColombia,
}) {
  // ================= VALIDACIONES =================

  const isOnlyText = (value) => /^[a-zA-ZÀ-ÿ\s]*$/.test(value);

  const isCedulaValid = /^\d{10}$/.test(form.cedula);
  const isCelularValid = /^\d{10}$/.test(form.celular);

  const isNombreValid = form.nombre && isOnlyText(form.nombre);
  const isCiudadValid = form.ciudad && isOnlyText(form.ciudad);
  const isBarrioValid = form.barrio && isOnlyText(form.barrio);

  const isFormValid =
    isNombreValid &&
    isCedulaValid &&
    isCelularValid &&
    form.departamento &&
    isCiudadValid &&
    form.direccion &&
    isBarrioValid;

  const handleConfirm = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setOpen(false);
    setOpenSuccess(true);
  };

  // ================= RENDER =================

  return (
    <>
      {/* MODAL DE COMPRA */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
              type="button"
            >
              <X />
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center">
              Datos para la compra
            </h2>

            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              onSubmit={handleConfirm}
            >
              {/* NOMBRE */}
              <div className="flex flex-col gap-1">
                <input
                  className="input"
                  placeholder="Nombre completo"
                  value={form.nombre}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      nombre: e.target.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, ""),
                    })
                  }
                />
                {form.nombre && !isNombreValid && (
                  <span className="text-xs text-red-500">
                    Solo se permite texto
                  </span>
                )}
              </div>

              {/* CÉDULA */}
              <div className="flex flex-col gap-1">
                <input
                  className="input"
                  placeholder="Cédula (10 dígitos)"
                  inputMode="numeric"
                  maxLength={10}
                  value={form.cedula}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      cedula: e.target.value.replace(/\D/g, ""),
                    })
                  }
                />
                {form.cedula && !isCedulaValid && (
                  <span className="text-xs text-red-500">
                    La cédula debe tener 10 números
                  </span>
                )}
              </div>

              {/* CELULAR */}
              <div className="flex flex-col gap-1">
                <input
                  className="input"
                  placeholder="Celular (10 dígitos)"
                  inputMode="numeric"
                  maxLength={10}
                  value={form.celular}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      celular: e.target.value.replace(/\D/g, ""),
                    })
                  }
                />
                {form.celular && !isCelularValid && (
                  <span className="text-xs text-red-500">
                    El celular debe tener 10 números
                  </span>
                )}
              </div>

              {/* PAÍS */}
              <input className="input" value="Colombia" disabled />

              {/* DEPARTAMENTO */}
              <select
                className="input"
                value={form.departamento}
                onChange={(e) =>
                  setForm({ ...form, departamento: e.target.value })
                }
              >
                <option value="">Departamento</option>
                {departamentosColombia.map((dep) => (
                  <option key={dep}>{dep}</option>
                ))}
              </select>

              {/* CIUDAD */}
              <div className="flex flex-col gap-1">
                <input
                  className="input"
                  placeholder="Ciudad / Pueblo / Corregimiento"
                  value={form.ciudad}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      ciudad: e.target.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, ""),
                    })
                  }
                />
                {form.ciudad && !isCiudadValid && (
                  <span className="text-xs text-red-500">
                    Solo se permite texto
                  </span>
                )}
              </div>

              {/* DIRECCIÓN */}
              <input
                className="input"
                placeholder="Dirección"
                value={form.direccion}
                onChange={(e) =>
                  setForm({ ...form, direccion: e.target.value })
                }
              />

              {/* BARRIO */}
              <div className="flex flex-col gap-1">
                <input
                  className="input"
                  placeholder="Barrio"
                  value={form.barrio}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      barrio: e.target.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, ""),
                    })
                  }
                />
                {form.barrio && !isBarrioValid && (
                  <span className="text-xs text-red-500">
                    Solo se permite texto
                  </span>
                )}
              </div>

              {/* CORREO (OPCIONAL) */}
              <input
                className="input md:col-span-2"
                placeholder="Correo electrónico (opcional)"
                value={form.correo}
                onChange={(e) =>
                  setForm({ ...form, correo: e.target.value })
                }
              />

              {/* BOTÓN */}
              <button
                type="submit"
                disabled={!isFormValid}
                className={`md:col-span-2 mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold transition
                  ${
                    isFormValid
                      ? "hover:scale-[1.02]"
                      : "opacity-60 cursor-not-allowed hover:scale-100"
                  }
                `}
              >
                Confirmar compra
              </button>
            </form>
          </div>
        </div>
      )}

      {/* MODAL ÉXITO */}
      {openSuccess && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 text-center">
            <CheckCircle2 className="w-14 h-14 text-blue-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold">¡Listo!</h3>
            <p className="text-sm text-gray-600 mt-2">
              En breve nos comunicaremos con usted para coordinar el pago de su
              producto.
            </p>

            <button
              onClick={() => setOpenSuccess(false)}
              className="mt-4 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] transition"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default PurchaseModals;
