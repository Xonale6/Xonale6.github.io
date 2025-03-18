import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="pt-20 bg-gradient-to-b from-blue-600 to-blue-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Construyendo tu futuro con solidez
            </h1>
            <p className="text-xl mb-8">
              Expertos en soluciones constructivas de alta calidad para proyectos residenciales y comerciales.
            </p>
            <a
              href="#contacto"
              className="bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-yellow-300 transition duration-300"
            >
              Solicitar Cotización
            </a>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80"
              alt="Construcción"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;