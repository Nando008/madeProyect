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
      nombre: "Terapia Respiratoria",
      imagen:
        "https://comohow.net/wp-content/uploads/2020/05/como-usar-un-nebulizador-2048x1083.jpg",
      descripcion:
      "Abordaje sistémico que combina técnicas manuales, ejercicio terapéutico y agentes físicos para restaurar la funcionalidad máxima del movimiento. No solo trata el síntoma, sino que evalúa las cadenas cinéticas para corregir desequilibrios biomecánicos en todo el cuerpo.",
    },
    {
      id: 2,
      nombre: "Terapia Física Integral",
      imagen:
        "https://static.wixstatic.com/media/11062b_134fdd6885f445a194cb61c6b5b75202~mv2.jpeg/v1/fill/w_980,h_647,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_134fdd6885f445a194cb61c6b5b75202~mv2.jpeg",
      descripcion:
        "Abordaje sistémico que combina técnicas manuales, ejercicio terapéutico y agentes físicos para restaurar la funcionalidad máxima del movimiento. No solo trata el síntoma, sino que evalúa las cadenas cinéticas para corregir desequilibrios biomecánicos en todo el cuerpo.",
    },
    {
      id: 3,
      nombre: "Manejo del Dolor",
      imagen:
        "https://www.itcvertebral.com.br/wp-content/uploads/2023/12/remedio-para-coluna-inflamada-3-1536x1024.jpg",
      descripcion:
      "Protocolo avanzado diseñado para modular y desensibilizar el sistema nervioso ante cuadros de dolor agudo o crónico. Mediante terapia manual y educación en neurociencia del dolor, se busca mejorar la calidad de vida y la movilidad sin fármacos.",
    },
    {
      id: 4,
      nombre: "Aplicación de Vendaje Kinesiológico",
      imagen:
        "https://www.metropolsalud.com/wp-content/uploads/2020/11/kinesiotape-vendaje-neuromuscular.jpg",
      descripcion:
      "Técnica de soporte neuromuscular que utiliza cintas elásticas especiales para mejorar la propiocepción, facilitar el drenaje linfático y brindar estabilidad articular sin limitar el rango de movimiento. Es una herramienta coadyuvante que prolonga los efectos de la terapia manual.",
    },
    {
      id: 5,
      nombre: "Recuperación de Lesiones",
      imagen:
        "https://post.perks.optum.com/wp-content/uploads/sites/7/2023/08/perks-knee-work-1200x800-1-1024x683.jpg",
      descripcion:
      "Programa de intervención post-traumática o post-quirúrgica orientado a la reparación tisular eficiente. A través de fases de carga progresiva y control motor, se garantiza que los tejidos (tendones, ligamentos o músculos) recuperen su resistencia y funcionalidad original.",
    },
    {
      id: 6,
      nombre: "Rehabilitación Neurológica",
      imagen:
        "https://img.freepik.com/premium-photo/man-wheelchair-exercising-with-dumbbell-recovery_482257-331.jpg",
      descripcion:
      "Proceso terapéutico enfocado en la neuroplasticidad para restaurar patrones de movimiento perdidos por daño en el Sistema Nervioso Central o Periférico. El objetivo es mejorar el control motor, el equilibrio y la independencia funcional en pacientes con diagnósticos como ACV, Parkinson o lesiones medulares.",
    },
    {
      id: 7,
      nombre: "Descargas Musculares",
      imagen:
        "https://static.runnea.com/images/202405/masajes-descarga-runners-beneficios-recurso1.jpg?0",
      descripcion:
        "Procedimiento terapéutico de terapia manual intensa diseñado para reducir los puntos gatillo, mejorar la vascularización y acelerar la eliminación de residuos metabólicos, optimizando así el tiempo de recuperación y previniendo lesiones.",
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
