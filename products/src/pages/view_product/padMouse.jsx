import NavbarPage from "../componentes/navbar";
import FooterPage from "../componentes/footer";
import { useState } from "react";
import ProductDetails from "../componentes/productDetails";
import PurchaseModals from "../componentes/purchaseModals";

function ViewProduct() {
  const [open, setOpen] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const urlPadMouse = "http://localhost:5173/src/assets/img/padMouse.jpeg";

  const [form, setForm] = useState({
    nombre: "",
    cedula: "",
    celular: "",
    departamento: "",
    ciudad: "",
    direccion: "",
    barrio: "",
    correo: "",
  });

  const producto = {
    nombre: "Pad mouse",
    ubicacion: "Ocaña, Norte de Santander",
    precio: "25.000",
    descripcion:
      "Dispositivo que proporciona una superficie de apoyo blanda que distribuye las presiones de contacto en la zona del carpo, evita la extensión excesiva de la muñeca, manteniendo una alineación horizontal neutra.",
    imagen: urlPadMouse,
  };

  const departamentosColombia = [
    "Amazonas","Antioquia","Arauca","Atlántico","Bolívar","Boyacá","Caldas",
    "Caquetá","Casanare","Cauca","Cesar","Chocó","Córdoba","Cundinamarca",
    "Guainía","Guaviare","Huila","La Guajira","Magdalena","Meta","Nariño",
    "Norte de Santander","Putumayo","Quindío","Risaralda","San Andrés",
    "Santander","Sucre","Tolima","Valle del Cauca","Vaupés","Vichada"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavbarPage />

      <main className="flex-grow bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 px-4 sm:px-6 py-8">
        <ProductDetails
          producto={producto}
          onComprar={() => setOpen(true)}
        />
      </main>

      <FooterPage />

      <PurchaseModals
        open={open}
        setOpen={setOpen}
        openSuccess={openSuccess}
        setOpenSuccess={setOpenSuccess}
        form={form}
        setForm={setForm}
        departamentosColombia={departamentosColombia}
      />
    </div>
  );
}

export default ViewProduct;
