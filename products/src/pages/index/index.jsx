import React from "react";
import NavbarPage from "../componentes/navbar";
import FooterPage from "../componentes/footer";

const Card = ({ imagen, nombre, link }) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Imagen con efecto hover */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
        <img
          src={imagen}
          alt={nombre}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
          {nombre}
        </h3>

        {/* Botón Ver más */}
        <a
          href={link}
          className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all duration-300 group/link"
        >
          <span>Ver más</span>
          <svg
            className="w-5 h-5 group-hover/link:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>

      {/* Borde animado en hover */}
      <div className="absolute inset-0 border-2 border-indigo-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

function IndexPages() {
  const tarjetas = [
    {
      id: 1,
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_2X_771103-MLA99599831700_122025-F.webp",
      nombre: "Mouse ergonómico ",
      link: "/MouseProduct",
    },
    {
      id: 2,
      imagen:
        "https://imagenes.elpais.com/resizer/v2/YBE32YD7ABANRCE7D67MCVL57Q.jpg?auth=1edd58ca0b9072efb4393a9256d5139e454f82ed0a7e435245b29f01b00648eb&width=1960",
      nombre: "Teclado ergonómico ",
      link: "/KeyboardProduct",
    },
    {
      id: 3,
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_2X_811411-MCO94029650241_102025-F.webp",
      nombre: "Soporte para pc",
      link: "/SupportProduct",
    },
    {
      id: 4,
      imagen:
        "https://latam.humanscale.com/userFiles/images/laptopholders/17_humanscale_ergo_laptop_holder_2b(1).jpg",
      nombre: "Kit ergonómico",
      link: "/KitProduct",
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
              Nuestros productos
            </h1>
            <p className="text-gray-600 text-lg">
              Descubre todo lo que tenemos para ofrecerte
            </p>
          </div>

          {/* Grid de tarjetas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tarjetas.map((tarjeta) => (
              <Card
                key={tarjeta.id}
                imagen={tarjeta.imagen}
                nombre={tarjeta.nombre}
                link={tarjeta.link}
              />
            ))}
          </div>
        </div>
      </main>

      <FooterPage />
    </div>
  );
}

export default IndexPages;
