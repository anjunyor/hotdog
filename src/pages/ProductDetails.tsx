import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { menuItems } from '../data/menuItems';

export function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = React.useState(1);

  const product = menuItems.find(item => item.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-100 to-yellow-50 p-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-orange-900 mb-4">Produto não encontrado</h1>
          <Link to="/" className="text-orange-500 hover:text-orange-600">
            Voltar ao menu
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    navigate('/carrinho');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-yellow-50">
      <div className="max-w-4xl mx-auto p-4">
        <Link to="/" className="inline-flex items-center text-orange-500 hover:text-orange-600 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar ao menu
        </Link>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {product.image && (
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-64 object-cover"
            />
          )}
          
          <div className="p-6">
            <h1 className="text-3xl font-bold text-orange-900 mb-2">{product.title}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
            
            {product.ingredients && (
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-orange-900 mb-2">Ingredientes:</h2>
                <ul className="list-disc list-inside text-gray-600">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.nutritionalInfo && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-orange-900 mb-2">Informações Nutricionais:</h2>
                <div className="grid grid-cols-2 gap-4 text-gray-600">
                  <div>Calorias: {product.nutritionalInfo.calories}kcal</div>
                  <div>Proteínas: {product.nutritionalInfo.protein}g</div>
                  <div>Carboidratos: {product.nutritionalInfo.carbs}g</div>
                  <div>Gorduras: {product.nutritionalInfo.fats}g</div>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="p-2 rounded-full hover:bg-orange-100"
                >
                  <Minus className="w-4 h-4 text-orange-500" />
                </button>
                <span className="text-lg font-semibold">{quantity}</span>
                <button 
                  onClick={() => setQuantity(q => q + 1)}
                  className="p-2 rounded-full hover:bg-orange-100"
                >
                  <Plus className="w-4 h-4 text-orange-500" />
                </button>
              </div>
              <div className="text-2xl font-bold text-orange-500">
                {product.price}
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full mt-6 bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}