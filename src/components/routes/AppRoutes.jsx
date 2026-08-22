import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Products from '../pages/Products'
import ProductDetails from '../pages/ProductDetails'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Profile from '../pages/Profile'
import Wishlist from '../pages/Wishlist'
import NotFound from '../pages/NotFound'
import About from '../pages/About'
import Login from '../pages/Login'
import Register from '../pages/Register'



function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Login' element={<Login/>}/>
      </Routes>
    </div>
  ) 
}

export default AppRoutes
