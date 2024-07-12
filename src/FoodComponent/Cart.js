import React from 'react'
import { useSelector } from 'react-redux'
import {removeFromCart} from "../Reducer"
import { useDispatch } from 'react-redux'

function Cart() {

  let dispatch = useDispatch();
  
  let cartItems = useSelector((state)=>{
    return state.cartItems
  })

    console.log(cartItems);

    let cartPrice = cartItems.reduce((acc,item,index)=>{
      return acc + item.Price
    },0)
    
    
    
    return (
    <>
     <h1 style={{textAlign:"center",marginTop:"60px"}}>Cart Items </h1>
     <h5>Price = {cartPrice} ₹ </h5>
     <div className='container'>
     <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3   g-4">
      {cartItems.map((item,index)=>{
        console.log( item);
     return  <div class="card  ">
     <div class="row ">
       <div class="col-md-3 col-xl-4 col-lg-4 h-100">
         <img src={item.Image} class="img-fluid " alt="..."/>
       </div>
       <div class="col-md-8">
         <div class="card-body">
           <h5 class="card-title">{item.Name.slice(0,25)}...</h5>
           <p class="card-text"><b>Price : </b> {item.Price} ₹</p>
          <button 
          onClick={()=>{
            dispatch(removeFromCart(index))
          }}
          type="button" class="btn btn-success">Remove </button>
         </div>
       </div>
     </div>
   </div>
      })}
    
</div>
</div>
    </>
   
  )
}

export default Cart