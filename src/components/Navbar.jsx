import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FiSearch, FiShoppingCart, FiMenu } from "react-icons/fi";
import { useAppContext } from '../context/AppContext';
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const {
    user,
    setUser,
    setShowUserLogin,
    navigate,
    handleSearchQuery,
    searchQuery,
    getCartCount
  } = useAppContext();

  const logout = async () => {
    setUser(null);
    navigate('/');
    setProfileOpen(false);
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate('/products');
    }
  }, [searchQuery]);

  return (
    <nav className="flex items-center justify-between flex-wrap px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative z-50">

      {/* Brand Logo */}
      <NavLink to="/" onClick={() => setOpen(false)}>
        <div className="text-2xl font-bold text-[#4ca586] cursor-pointer">eGrocery</div>
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-6 flex-wrap">
        <NavLink to="/" className="hover:text-[#4ca586]">Home</NavLink>
        <NavLink to="/products" className="hover:text-[#4ca586]">All Products</NavLink>
        <NavLink to="/contact" className="hover:text-[#4ca586]">Contact</NavLink>

        {/* Search bar (desktop) */}
        <div className="flex items-center text-sm gap-2 border border-gray-300 px-3 py-1 rounded-full w-64">
          <input
            value={searchQuery}
            onChange={(e) => handleSearchQuery(e.target.value)}
            className="w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
          <FiSearch className="text-gray-500 text-lg" />
        </div>

        {/* Cart icon */}
        <div onClick={() => navigate("/cart")} className="relative cursor-pointer">
          <FiShoppingCart className="text-xl" />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-[#4ca586] w-[18px] h-[18px] rounded-full">{getCartCount()}</button>
        </div>

        {/* Login / Logout */}
        {!user ? (
          <button
            onClick={() => setShowUserLogin(true)}
            className="cursor-pointer px-6 py-2 bg-[#4ca586] hover:bg-[#54cea4] transition-all duration-200 ease-in-out text-white rounded-full text-sm"
          >
            Login
          </button>
        ) : (
          <div className="relative inline-block">
            <button onClick={() => setProfileOpen(prev => !prev)}>
              <FaUserCircle className="text-2xl cursor-pointer" />
            </button>
            {profileOpen && (
              <div className="absolute right-0 top-10 bg-white shadow-lg border border-gray-200 rounded-md z-50 min-w-[140px]">
                <ul className="text-sm py-2">
                  <li
                    onClick={() => {
                      navigate("my-orders");
                      setProfileOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-green-100 cursor-pointer transition"
                  >
                    My Orders
                  </li>
                  <li
                    onClick={logout}
                    className="px-4 py-2 hover:bg-green-100 cursor-pointer transition"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile Buttons (Hamburger + Cart) */}
      <div className="flex items-center gap-6 sm:hidden">
        <div onClick={() => navigate("/cart")} className="relative cursor-pointer">
          <FiShoppingCart className="text-xl" />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-[#4ca586] w-[18px] h-[18px] rounded-full">{getCartCount()}</button>
        </div>
        <button onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          <FiMenu className='text-xl' />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${open ? 'flex' : 'hidden'} absolute top-full left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-4 px-5 text-sm sm:hidden z-40`}>
        <NavLink to="/" onClick={() => setOpen(false)} className="w-full">Home</NavLink>
        <NavLink to="/products" onClick={() => setOpen(false)} className="w-full">All Products</NavLink>
        <NavLink to="/contact" onClick={() => setOpen(false)} className="w-full">Contact</NavLink>
        {user && (
          <NavLink to="/orders" onClick={() => setOpen(false)} className="w-full">My Orders</NavLink>
        )}

        {/* Search bar (mobile) */}
        <div className="flex items-center text-sm gap-2 border border-gray-300 px-3 py-1 rounded-full w-full">
          <input
            value={searchQuery}
            onChange={(e) => handleSearchQuery(e.target.value)}
            className="w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
          <FiSearch className="text-gray-500 text-lg" />
        </div>

        {/* Login / Logout (mobile) */}
        {!user ? (
          <button
            onClick={() => {
              setOpen(false);
              setShowUserLogin(true);
            }}
            className="w-full text-center px-6 py-2 bg-[#4ca586] hover:bg-green-700 transition-all duration-200 ease-in-out text-white rounded-full text-sm"
          >
            Login
          </button>
        ) : (
          <button
            onClick={() => {
              setOpen(false);
              logout();
            }}
            className="w-full text-center px-6 py-2 bg-[#4ca586] hover:bg-green-700 transition-all duration-200 ease-in-out text-white rounded-full text-sm"
          >
            Log Out
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
