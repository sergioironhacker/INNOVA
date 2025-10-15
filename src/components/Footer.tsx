import { Facebook, Instagram, MessageCircle, Home } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-white py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Home className="w-8 h-8 text-blue-400" />
              <div>
                <h3 className="text-2xl font-bold">INNOVA</h3>
                <p className="text-sm text-gray-400">Tejados y Cubiertas</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Especialistas en instalación, reparación y mantenimiento de tejados y canalones en Segovia.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition">
                  Servicios
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('precios')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition">
                  Precios
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition">
                  Galería
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition">
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Síguenos</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://wa.me/34600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-green-500 rounded-full flex items-center justify-center transition"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-blue-500 rounded-full flex items-center justify-center transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-pink-500 rounded-full flex items-center justify-center transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <div className="text-gray-400 text-sm">
              <p className="mb-1">Segovia, España</p>
              <p className="mb-1">Tel: +34 600 00 00 00</p>
              <p>info@innovasegovia.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 INNOVA - Tejados y Cubiertas. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition">
              Aviso legal
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Política de privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
