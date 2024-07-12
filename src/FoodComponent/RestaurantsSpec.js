import React,{useState,useEffect} from 'react'
import { json, useParams } from 'react-router-dom'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {addToCart} from "../Reducer"

function RestaurantsSpec() {
    const [foodData,setFoodData] = useState([])
    let dispatch = useDispatch();
let {id} = useParams();

useEffect(()=>{
axios.get(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.5073602&lng=78.3969122&restaurantId=${id}`)
.then((res)=>{
  setFoodData(res.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(1));
})
},[])

console.log(id);
  return (
    <>
      <div style={{marginTop:"50px"}} className='container'>
      {foodData.length > 0?foodData.map((foodData,i)=>{
        return  <div class="accordion accordion-flush" id="accordionFlushExample">
           <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              <h3>{foodData?.card?.card?.title}-{foodData?.card?.card?.itemCards?.length} </h3>
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body"><div class="row row-cols-1 row-cols-xs-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 g-4" style={{marginTop:"30px"}}>
        {foodData?.card?.card?.itemCards?foodData?.card?.card?.itemCards?.map((foodData,i)=>{
          return   <div class="col">
          <div class="card h-100">
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${foodData?.card?.info?.imageId}`} 
            class="card-img-top restaurantSpec-food-card" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">{foodData?.card?.info?.name?.slice(0,30)}...</h5>
              {foodData?.card?.info?.isVeg ?<div id='veg-display'></div>:<div id='non-Veg'></div>}
              <p><b>Price :</b> {foodData?.card?.info?.price?foodData?.card?.info?.price/100:foodData?.card?.info?.defaultPrice/100} ₹</p>
              <button 
              onClick={()=>{
                
                let cartItem = {
                  Name : foodData?.card?.info?.name , 
                  Price : foodData?.card?.info?.price?foodData?.card?.info?.price/100:foodData?.card?.info?.defaultPrice/100 , 
                  Image : `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${foodData?.card?.info?.imageId}`
                }
                 
                
                  dispatch(addToCart(cartItem))
              
              }}
              type="button" class="btn btn-warning">Add to Cart</button>
            <br/>
              <small class="card-text">{foodData?.card?.info?.description?.slice(0,60)}...</small>
            </div>
          </div>
       </div>
        }):" "}
        </div></div>
          </div>
        </div>
        </div>
        
        console.log(foodData);
         <p>{foodData?.card?.card?.title}-{foodData?.card?.card?.itemCards?.length}</p>
       



      }):" "} 
      </div>
      
     
  
   

      
     
{/* 
   <div style={{marginTop:"50px"}} className='container'>
     {foodData.length > 0?foodData.map((foodData,i)=>{
        <br/>
        return (<><h3>{foodData?.card?.card?.title}-{foodData?.card?.card?.itemCards?.length} </h3>
         <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 g-4" style={{marginTop:"30px"}}>
        {foodData?.card?.card?.itemCards?foodData?.card?.card?.itemCards?.map((foodData,i)=>{
          return   <div class="col">
          <div class="card h-100">
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${foodData?.card?.info?.imageId}`} 
            class="card-img-top restaurantSpec-food-card" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">{foodData?.card?.info?.name?.slice(0,30)}...</h5>
              {foodData?.card?.info?.isVeg ?<div id='veg-display'></div>:<div id='non-Veg'></div>}
              <p><b>Price :</b> {foodData?.card?.info?.price?foodData?.card?.info?.price/100:foodData?.card?.info?.defaultPrice/100} ₹</p>
              <button 
              onClick={()=>{
                
                let cartItem = {
                  Name : foodData?.card?.info?.name , 
                  Price : foodData?.card?.info?.price?foodData?.card?.info?.price/100:foodData?.card?.info?.defaultPrice/100 , 
                  Image : `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${foodData?.card?.info?.imageId}`
                }
                 
                
                  dispatch(addToCart(cartItem))
              
              }}
              type="button" class="btn btn-warning">Add to Cart</button>
            <br/>
              <small class="card-text">{foodData?.card?.info?.description?.slice(0,60)}...</small>
            </div>
          </div>
       </div>
        }):" "}
        </div>
        </>)

        console.log(foodData);
         <p>{foodData?.card?.card?.title}-{foodData?.card?.card?.itemCards?.length}</p>
       
      
     }):" "} 
     </div>
   */}
 
    </>
  )
}

export default RestaurantsSpec