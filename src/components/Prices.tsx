import { Check, Euro } from 'lucide-react';

function Prices() {
  const prices = [
    {
      title: 'Limpieza de canalones',
      price: 'desde 60€',
      description: 'Limpieza completa y revisión de canalones',
      features: [
        'Retirada de hojas y suciedad',
        'Revisión de bajantes',
        'Comprobación de sellados',
        'Informe del estado'
      ]
    },
    {
      title: 'Instalación de canalones',
      price: 'desde 20€/m',
      description: 'Instalación profesional de canalones nuevos',
      features: [
        'Material de primera calidad',
        'Aluminio, PVC o cobre',
        'Incluye bajantes',
        'Garantía de 5 años'
      ],
      featured: true
    },
    {
      title: 'Reparación de tejados',
      price: 'desde 150€',
      description: 'Reparación de goteras y daños en cubiertas',
      features: [
        'Diagnóstico gratuito',
        'Sustitución de tejas',
        'Sellado e impermeabilización',
        'Garantía del trabajo'
      ]
    }
  ];

  return (
    <section id="precios" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Precios Orientativos
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Tarifas competitivas sin sorpresas. Pide tu presupuesto personalizado sin compromiso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {prices.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl shadow-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                item.featured
                  ? 'bg-blue-600 text-white ring-4 ring-blue-400 dark:ring-blue-500 scale-105'
                  : 'bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white'
              }`}
            >
              {item.featured && (
                <div className="text-center mb-4">
                  <span className="bg-white text-blue-600 px-4 py-1 rounded-full text-sm font-semibold">
                    Más popular
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <Euro className={`w-12 h-12 mx-auto mb-4 ${item.featured ? 'text-white' : 'text-blue-600 dark:text-blue-400'}`} />
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <div className="text-4xl font-bold mb-2">{item.price}</div>
                <p className={`text-sm ${item.featured ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'}`}>
                  {item.description}
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${item.featured ? 'text-white' : 'text-blue-600 dark:text-blue-400'}`} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => {
                  const element = document.getElementById('contacto');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-full py-3 rounded-lg font-semibold transition ${
                  item.featured
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
                }`}
              >
                Solicitar presupuesto
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            * Precios orientativos. Cada trabajo se presupuesta según necesidades específicas.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Prices;
