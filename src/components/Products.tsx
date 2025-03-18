import React from 'react';
import { MessageSquare } from 'lucide-react';

const products = [
  {
    name: 'Plastoformo',
    description: 'Material aislante térmico y acústico ideal para construcciones modernas.',
    image: 'https://images.unsplash.com/photo-1565766046621-5548ffdf30af?auto=format&fit=crop&q=80'
  },
  {
    name: 'Viguetas Pretensadas',
    description: 'Elementos estructurales de alta resistencia para entrepisos y techos.',
    image: 'https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?auto=format&fit=crop&q=80'
  }
];

const Products = () => {
  const handleWhatsApp = (product: string) => {
    window.open(`https://wa.me/573001234567?text=Hola, quiero cotizar ${product}`, '_blank');
  };

  return (
    <section id="productos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Nuestros Productos
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div key={product.name} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button
                  onClick={() => handleWhatsApp(product.name)}
                  className="flex items-center justify-center w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
                >
                  <MessageSquare className="mr-2" size={20} />
                  Cotizar por WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;