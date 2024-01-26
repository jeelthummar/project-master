import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Signup from './Pages/Signup'
import Login from './Pages/Login'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Product' element={<Product/>} />
            <Route path='/Cart' element={<Cart/>} />
            <Route path='/Signup' element={<Signup/>} />
            <Route path='/Login' element={<Login/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes