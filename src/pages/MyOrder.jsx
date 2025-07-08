import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { dummyOrders } from '../assets/assets';

const MyOrder = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { currency } = useAppContext();

  const fetchMyOrders = async () => {
    // Simulate API call
    setMyOrders(dummyOrders);
  };

  useEffect(() => {
    fetchMyOrders();
  }, []);

  return (
    <div className="mt-16 pb-16">
      <div className="flex flex-col items-end w-max mb-8">
        <p className="text-2xl font-medium uppercase">My Orders</p>
        <div className="w-16 h-0.5 bg-[#50b592] rounded-full"></div>
      </div>

      {myOrders.map((order, index) => (
        <div
          key={index}
          className="border border-black rounded-lg mb-10 p-4 py-5 max-w-4xl"
        >
          <p className="flex justify-between md:items-center text-black md:font-medium max-md:flex-col">
            <span>Order ID: {order._id}</span>
            <span>Payment: {order.paymentType}</span>
            <span>
              Total Amount: {currency}
              {order.amount}
            </span>
          </p>

          {order.items.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className={`relative bg-white text-black ${
                order.items.length !== itemIndex + 1 ? 'border-b' : ''
              } border-black flex flex-col md:flex-row md:items-center justify-between p-4 gap-4 w-full max-w-4xl`}
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#50b592]/10 p-4 rounded-lg">
                  <img
                    src={item.product.image[0]}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover"
                  />
                </div>
                <div>
                  <h2 className="font-semibold">{item.product.name}</h2>
                  <p>Category: {item.product.category}</p>
                </div>
              </div>

              <div className="text-black font-medium flex flex-col gap-1">
                <p>Quantity: {item.quantity || 1}</p>
                <div className="flex items-center gap-2">
                  <span>Status:</span>
                  <p
                    className={`px-3 py-1 text-xs rounded-full ${
                      order.status === 'Delivered'
                        ? 'bg-green-400/15 text-green-600'
                        : order.status === 'Dispatched'
                        ? 'bg-yellow-400/15 text-yellow-600'
                        : 'bg-red-400/15 text-red-600'
                    }`}
                  >
                    {order.status}
                  </p>
                </div>
                <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
              </div>

              <p className="text-left font-semibold sm:text-left">
                Amount: {currency}
                {item.product.offerPrice * item.quantity}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MyOrder;
