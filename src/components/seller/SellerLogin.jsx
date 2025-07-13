import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Correct way!
import { useAppContext } from '../../context/AppContext';

const SellerLogin = () => {
  const navigate = useNavigate(); // ✅ Use useNavigate directly
  const { IsSeller, setIsSeller } = useAppContext(); // ✅ No navigate here
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setIsSeller(true);
  };

  useEffect(() => {
    if (IsSeller) {
      navigate('/seller');
    }
  }, [IsSeller, navigate]); // ✅ Also include navigate in deps

  return (
    !IsSeller && (
      <form
        onSubmit={onSubmitHandler}
        className="min-h-screen flex items-center text-sm text-gray-600"
      >
        <div className="flex flex-col gap-5 m-auto items-start p-8 py-12 min-w-80 sm:min-w-88 rounded-lg shadow-xl border border-gray-200">
          <p className="text-2xl font-medium m-auto">
            <span className="text-[#4ca586]">Seller</span> Login
          </p>
          <div className="w-full">
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter Your Mail"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
              required
            />
          </div>
          <div className="w-full">
            <p>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Enter the Password"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-[#4ca586]"
              required
            />
          </div>
          <button className="bg-[#4ca586] text-white w-full py-2 rounded-md cursor-pointer hover:bg-[#54cea4] transition-all duration-200 ease-in-out">
            Login
          </button>
        </div>
      </form>
    )
  );
};

export default SellerLogin;
