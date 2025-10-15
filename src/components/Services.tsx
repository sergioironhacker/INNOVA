import { Wrench, Droplets, Shield, Settings } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: Wrench,
      title: 'Instalación de canalones',
      description: 'Instalación profesional de canalones de aluminio, PVC y cobre con garantía de calidad y durabilidad.',
      image: 'https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Droplets,
      title: 'Limpieza de canalones',
      description: 'Servicio de limpieza y desobstrucción de canalones para prevenir filtraciones y daños estructurales.',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Shield,
      title: 'Reparación de tejados',
      description: 'Reparación de todo tipo de cubiertas: tejas, pizarra, chapa, impermeabilizaciones y más.',
      image: 'https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Settings,
      title: 'Mantenimiento general',
      description: 'Revisiones periódicas, trabajos en altura y mantenimiento preventivo de tejados y canalones.',
      image: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Soluciones integrales para tu tejado y canalones en Segovia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-20"></div>
              </div>
              <div className="p-6">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
