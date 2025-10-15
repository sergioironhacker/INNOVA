import { ArrowRight } from 'lucide-react';

function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-900 dark:to-gray-900 pt-20"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative container mx-auto px-4 text-center text-white z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          Expertos en canalones, tejados y cubiertas en Segovia
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Calidad, rapidez y garantía en cada trabajo
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToContact}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition shadow-lg flex items-center justify-center gap-2 group"
          >
            Contactar ahora
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="tel:+34600000000"
            className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition shadow-lg"
          >
            Llamar ahora
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
