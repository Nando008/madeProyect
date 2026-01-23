import { Facebook, Instagram, Linkedin } from "lucide-react";

function FooterPage() {
  return (
    <footer className="bg-gradient-to-r from-blue-950/90 to-blue-900/90 shadow-xl sticky bottom-0 z-50 backdrop-blur-md border-t border-white/95">
      <div className="w-full lg:px-5 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-slate-300 text-sm text-center md:text-left">
            <p>
              &copy; {new Date().getFullYear()} Madelin Benavides - Fisioterapeuta.
              Todos los derechos reservados.
            </p>
          </div>

          {/* Redes sociales */}
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all duration-200 border border-white/20"
            >
              <Facebook className="w-4 h-4 text-white" />
            </a>
            <a
              href="#"
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all duration-200 border border-white/20"
            >
              <Instagram className="w-4 h-4 text-white" />
            </a>
            <a
              href="#"
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all duration-200 border border-white/20"
            >
              <Linkedin className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterPage;
