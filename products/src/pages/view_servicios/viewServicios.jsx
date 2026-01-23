import React from "react";
import NavbarPage from "../componentes/navbar";
import FooterPage from "../componentes/footer";

const CardServicio = ({ imagen, nombre, descripcion }) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
      
      {/* Imagen */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
        <img
          src={imagen}
          alt={nombre}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
          {nombre}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed">
          {descripcion}
        </p>
      </div>

      {/* Borde animado */}
      <div className="absolute inset-0 border-2 border-indigo-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

function ViewServicios() {
  const servicios = [
    {
      id: 1,
      nombre: "Rehabilitación física",
      imagen:
        "https://images.unsplash.com/photo-1606206873764-fd15e242df52",
      descripcion:
        "Tratamiento enfocado en la recuperación de lesiones musculares y articulares mediante ejercicios terapéuticos y técnicas manuales.",
    },
    {
      id: 2,
      nombre: "Terapia manual",
      imagen:
        "https://d1o2ckyhhedjo8.cloudfront.net/wp/2022/12/Cetilar-tecniche-di-terapia-manuale.png",
      descripcion:
        "Aplicación de técnicas manuales especializadas para aliviar el dolor, mejorar la movilidad y restaurar la función del cuerpo.",
    },
    {
      id: 3,
      nombre: "Fisioterapia deportiva",
      imagen:
        "https://www.fisioadomiciliomadridfisioh.com/wp-content/uploads/2023/09/fisioterapia-deportiva-a-domicilio-madrid-fisioh-3.jpg",
      descripcion:
        "Prevención y tratamiento de lesiones deportivas, optimizando el rendimiento físico y acelerando la recuperación.",
    },
    {
      id: 4,
      nombre: "Terapia postural",
      imagen:
        "https://cecoten.com/wp-content/uploads/2025/06/sesion-de-reeducacion-postural-en-centro-de-rehabilitacion-en-Tenerife.jpg",
      descripcion:
        "Corrección de hábitos posturales inadecuados para reducir dolores crónicos y mejorar la calidad de vida.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavbarPage />

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-grow bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 px-6 py-10">
        <div className="max-w-7xl mx-auto">

          {/* Título */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-950 to-blue-600 bg-clip-text text-transparent mb-4">
              Nuestros servicios
            </h1>
            <p className="text-gray-600 text-lg">
              Atención profesional enfocada en tu bienestar y recuperación
            </p>
          </div>

          {/* Grid de servicios */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {servicios.map((servicio) => (
              <CardServicio
                key={servicio.id}
                imagen={servicio.imagen}
                nombre={servicio.nombre}
                descripcion={servicio.descripcion}
              />
            ))}
          </div>
        </div>
      </main>

      <FooterPage />
    </div>
  );
}

export default ViewServicios;
