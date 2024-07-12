import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Header = ({restaurantName,setRestaurantName}) => {

  

 let cartItems = useSelector((state)=>{
   return state.cartItems;
});
 

  return (
    <>
    
     <nav class="navbar bg-danger" id='header'>
  <div class="container-fluid">
    <Link to="/" style={{textDecoration:"none"}}><b class="navbar-brand">Solo-Eat</b></Link>
   <Link to ="/dishes" style={{textDecoration:"none"}}> <b class="navbar-brand">Search Dishes</b></Link>
   <Link to ="/restaurants" style={{textDecoration:"none"}}>  <b class="navbar-brand">Search Restaurant</b></Link> 

    <form class="d-flex" role="search">
      <input 
      value={restaurantName}
      onChange={(e)=>{
        setRestaurantName(e.target.value) 
      }}
      class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      
    </form>
    <Link to="/cart" style={{textDecoration:"none"}}><b class="navbar-brand"><i class="fa-solid fa-cart-shopping"></i> -{cartItems.length}</b></Link>
  </div>
</nav>
    </>
  )
}

export default Header