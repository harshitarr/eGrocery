import React from 'react'
import Navbar from "./components/Navbar"
import { Route,Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import Login from './components/Login'
import { useAppContext } from './context/AppContext'; // Important!
import AllProducts from './pages/AllProducts'
import ProductCategory from './pages/ProductCategory'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import AddAddress from './pages/AddAddress'
import MyOrder from './pages/MyOrder'


const App = () => {
  const isSellerPath = useLocation().pathname.includes("seller")
  const {showUserLogin} = useAppContext()
  return (
    <>
      {isSellerPath? null : <Navbar/>}          {/* If we are in the seller login it removes the navigation bar*/}
      {showUserLogin ? <Login/>:null}
      <Toaster/>
      <div className={`${isSellerPath ?"": "px-6 md:px-16 lg:px-24 xl:px-32"}`}>
        <Routes>
          <Route path = '/' element={<Home/>}/>
          <Route path = '/products' element={<AllProducts/>}/>
          <Route path='/products/:category' element={<ProductCategory/>}/>
          <Route path = '/products/:category/:id' element={<ProductDetails/>}/>
          <Route path = '/cart' element={<Cart/>}/>
          <Route path = '/add-address' element={<AddAddress/>} />
          <Route path = '/my-orders' element={<MyOrder/>} />
          <Route path = '/seller' element={}/>


        </Routes>
      </div>
      {!isSellerPath && <Footer/>}
    </>
  )
}

export default App
