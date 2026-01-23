import { MapPin, ShoppingCart } from "lucide-react";

function ProductDetails({ producto, onComprar }) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* Imagen */}
          <div className="bg-gray-100 h-64 lg:h-full">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="p-6 lg:p-8 flex flex-col justify-between">
            <div className="space-y-5">
              <h1 className="text-2xl font-bold text-gray-900">
                {producto.nombre}
              </h1>

              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <MapPin className="w-4 h-4 text-blue-600" />
                {producto.ubicacion}
              </div>

              <div className="bg-blue-50 rounded-xl p-4 border">
                <p className="text-xs text-gray-500">Precio</p>
                <p className="text-3xl font-bold">${producto.precio}</p>
              </div>

              <div className="bg-blue-50 rounded-xl p-4 border">
                <p className="text-xs text-gray-500">Descripción</p>
                <p className="text-m font-semibold">
                  {producto.descripcion}
                </p>
              </div>
            </div>

            <button
              onClick={onComprar}
              className="mt-6 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition"
            >
              <ShoppingCart className="w-5 h-5" />
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
