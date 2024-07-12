import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './FoodComponent/Header'
import Home from './FoodComponent/Home'
import RestaurantsSpec from "./FoodComponent/RestaurantsSpec"
import Cart from './FoodComponent/Cart'
import Dishes from './FoodComponent/Dishes'
import Restaurants from './FoodComponent/Restaurants'


const App = () => {

  return (
    <>
 <BrowserRouter>
 <Header/>
 <Routes>
  <Route path="/"  element={<Home/>}/>
  <Route path="/restaurant/:id" element={<RestaurantsSpec/>}/>
  <Route path="/dishes" element={<Dishes/>} />
  <Route path="/restaurants" element={<Restaurants/>} />
  <Route path="/cart" element={<Cart/>}/>
 </Routes>
 </BrowserRouter>
  
    
    </>
  )
}

export default App