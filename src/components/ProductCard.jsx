import React from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { currency, addToCart, removeFromCart, cartItems } = useAppContext();

  const handleNavigate = () => {
    navigate(`/products/${product.category.toLowerCase()}/${product._id}`);
    window.scrollTo(0, 0);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product._id);
  };

  const handleRemoveFromCart = (e) => {
    e.stopPropagation();
    removeFromCart(product._id);
  };

  const handleIncrement = (e) => {
    e.stopPropagation();
    addToCart(product._id);
  };

  const isInCart = cartItems?.[product._id] > 0;

  return (
    <div
      onClick={handleNavigate}
      className="bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-all mt-7 w-full max-w-[220px] overflow-hidden"
    >
      <img
        src={product.image[0]}
        alt={product.name}
        className="h-32 object-contain mx-auto cursor-pointer hover:scale-110 transition"
      />

      <div className="bg-gray-100 px-3 pt-2 pb-3 rounded-b-lg relative cursor-pointer">
        <p className="text-xs text-gray-500/60">{product.category}</p>
        <p className="text-sm font-semibold text-gray-800 truncate">{product.name}</p>

        <div className="flex items-center gap-0.5 mt-1 text-[#50b592] text-sm">
          {Array(5).fill('').map((_, i) =>
            product.rating > i ? <AiFillStar key={i} /> : <AiOutlineStar key={i} />
          )}
          <p className="text-xs text-[#50b592]">({product.rating})</p>
        </div>

        <p className="text-[#50b592] font-medium text-sm mt-1">
          {currency}{product.offerPrice}{' '}
          <span className="text-gray-500/60 text-xs line-through">
            {currency}{product.price}
          </span>
        </p>

        <div className="absolute bottom-2 right-3">
          {!isInCart ? (
            <button
              onClick={handleAddToCart}
              className="w-7 h-7 flex items-center text-white justify-center rounded-full bg-[#50b592] hover:bg-[#54cea4] cursor-pointer transition text-sm"
            >
              <FiShoppingCart size={15} />
            </button>
          ) : (
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex items-center bg-[#50b592] rounded-full px-2 py-0.5 space-x-2 text-white text-xs"
            >
              <button
                onClick={handleRemoveFromCart}
                className="px-1 cursor-pointer"
              >
                -
              </button>
              <span>{cartItems[product._id]}</span>
              <button
                onClick={handleIncrement}
                className="px-1 cursor-pointer"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
