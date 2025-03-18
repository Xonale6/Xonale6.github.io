import React from 'react';

const About = () => {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80"
              alt="Equipo Hormiblock"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sobre Nosotros
            </h2>
            <p className="text-gray-600 mb-6">
              En Hormiblock, nos dedicamos a proporcionar soluciones constructivas de alta calidad que 
              cumplen con los más altos estándares de la industria. Con más de 15 años de experiencia, 
              nos hemos convertido en líderes en la fabricación de materiales de construcción innovadores.
            </p>
            <p className="text-gray-600 mb-6">
              Nuestro compromiso con la excelencia y la satisfacción del cliente nos ha permitido 
              participar en proyectos importantes en toda la región, contribuyendo al desarrollo 
              de infraestructuras modernas y sostenibles.
            </p>
            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="text-3xl font-bold text-blue-600 mb-2">15+</h3>
                <p className="text-gray-600">Años de Experiencia</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="text-3xl font-bold text-blue-600 mb-2">1000+</h3>
                <p className="text-gray-600">Proyectos Completados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;