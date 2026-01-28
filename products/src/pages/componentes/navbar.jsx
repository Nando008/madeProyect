import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBarPage() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-950/90 to-blue-900/90 shadow-xl sticky top-0 z-50 backdrop-blur-md border-b border-white/95">
      <div className="w-full px-4 sm:px-6 lg:px-5">
        {/* Barra superior */}
        <div className="flex items-center justify-between h-20">
          {/* Logo y nombre */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 shadow-lg border border-white/20 shrink-0">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-slate-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">MB</span>
              </div>
            </div>

            {/* Ojo: min-w-0 + truncate para que no rompa en móvil */}
            <div className="text-white leading-tight min-w-0">
              <h1 className="text-lg sm:text-2xl font-bold tracking-tight truncate">
                MADELIN BENAVIDES
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 font-medium truncate">
                Fisioterapeuta Especialista en SST
              </p>
            </div>
          </div>

          {/* Menú desktop */}
          <div className="hidden md:flex items-center space-x-12">
            <div className="text-slate-200 hover:text-blue-950 transition-colors font-medium">
                <Link to="/">Inicio</Link>
            </div>
            <div className="text-slate-200 hover:text-blue-950 transition-colors font-medium">
                <Link to="/ViewServices">Servicios</Link>
            </div>
            <div className="text-slate-200 hover:text-blue-950 transition-colors font-medium">
                <Link to="/ViewSobreMi">Sobre Mí</Link>
            </div>
          </div>

          {/* Botón hamburguesa (mobile) */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-200 hover:bg-white/10 hover:text-white transition"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            {/* icono */}
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menú mobile desplegable */}
        <div className={`md:hidden ${open ? "block" : "hidden"} pb-4`}>
          <div className="flex flex-col gap-2 rounded-xl bg-white/5 border border-white/10 p-3">
            <Link
                to="/"
                onClick={() => setOpen(false)}
                className="text-slate-200 hover:text-white hover:bg-white/10 rounded-lg px-3 py-2 transition font-medium block"
            >
                Inicio
            </Link>
            <Link
                to="/ViewServices"
                onClick={() => setOpen(false)}
                className="text-slate-200 hover:text-white hover:bg-white/10 rounded-lg px-3 py-2 transition font-medium block"
            >
                Servicios
            </Link>
            <Link
                to="/ViewSobreMi"
                onClick={() => setOpen(false)}
                className="text-slate-200 hover:text-white hover:bg-white/10 rounded-lg px-3 py-2 transition font-medium block"
            >
                Sobre Mí
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBarPage;
