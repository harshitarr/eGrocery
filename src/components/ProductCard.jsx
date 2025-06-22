import React from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useAppContext } from '../context/AppContext';

const ProductCard = ({ product }) => {
  const { currency, addToCart, removeFromCart, cartItems } = useAppContext();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const increment = () => {
    addToCart(product);
  };

  const decrement = () => {
    if (cartItems[product._id] > 1) {
      removeFromCart(product._id, false); // reduce quantity by 1
    } else {
      removeFromCart(product._id, true); // remove product completely
    }
  };

  return product && (
    <div className="bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-all w-full max-w-[220px] overflow-hidden">
      <img
        src={product.image[0]}
        alt={product.name}
        className="h-34 object-contain mx-auto"
      />

      {/* Bottom gray section */}
      <div className="bg-gray-100 px-3 pt-2 pb-3 rounded-b-lg relative">
        <p className="text-xs text-gray-500/60">{product.category}</p>
        <p className="text-sm font-semibold text-gray-800 truncate">{product.name}</p>

        {/* Star rating (optional, uncomment if needed) */}
        <div className="flex items-center gap-0.5 mt-1 text-green-500 text-sm">
          {Array(5).fill('').map((_, i) =>
            product.rating > i ? <AiFillStar key={i} /> : <AiOutlineStar key={i} />
          )}
          <p className="text-xs text-green-600">({product.rating})</p>
        </div> 
       

        {/* Price */}
        <p className="text-green-600 font-medium text-sm mt-1">
          {currency}{product.offerPrice}{' '}
          <span className="text-gray-500/60 text-xs line-through">{currency}{product.price}</span>
        </p>

        {/* Cart / Quantity */}
        <div onClick = {(e) =>{ e.stopPropagation()}}className="absolute bottom-2 right-3">
          {!cartItems[product._id] ? (
            <button
              onClick={handleAddToCart}
              className="w-7 h-7 flex items-center text-white justify-center rounded-full bg-green-600 hover:bg-green-400 cursor-pointer transition text-sm"
            >
              <FiShoppingCart size={15} />
            </button>
          ) : (
            <div className="flex items-center bg-green-600 rounded-full px-2 py-0.5 space-x-2 text-white text-xs">
              <button onClick={decrement} className="px-1 cursor-pointer">-</button>
              <span>{cartItems[product._id]}</span>
              <button onClick={increment} className="px-1 cursor-pointer">+</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
