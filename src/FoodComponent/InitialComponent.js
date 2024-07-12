import React from 'react'
import Shimmer from './Shimmer';
import { useNavigate } from 'react-router-dom';





function InitialComponent({restaurants,filteredRestaurants,restaurantName}) {

  let navigate = useNavigate();

  function ShowIntialRestaurants (){
    return<div class="row  row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-sm-1 g-4 ">
  
         {restaurants.map((restaurant,index)=>{
                
               return <div 
               onClick={()=>{
                navigate(`/restaurant/${restaurant.info.id}`);
               }}
               class="col">
               <div class="card">
                   <img 
                   src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.info?.cloudinaryImageId}`} class="card-img-top cardImg" alt="..."/>
                   <div class="card-body">
                     <h5 class="card-title">{restaurant.info?.name}</h5>
                     <p className='card-text'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg><span style={{marginLeft:"10px", marginTop:"7px"}}>{restaurant.info?.avgRating?restaurant.info?.avgRating:restaurant.info?.avgRatingString}</span> 
            <span style={{marginLeft:"20px"}}><i class="fa-solid fa-motorcycle"></i>  {restaurant.info?.sla.slaString}</span>
            </p>
            <p className='card-text'>{restaurant.info?.cuisines.slice(0,3).join(",")}...</p>
                     <p class="card-text">{restaurant.info?.locality}</p>
                   </div>
                 </div>
                 </div>
                  })}
        </div>
        
    
  
  }


 function ShowFilteredRestaurants() {
  return         <div class="row  row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-sm-1 g-4">
    {filteredRestaurants.map((restaurant,index)=>{
          console.log(restaurant);
         return <div
         onClick={()=>{
          navigate(`/restaurant/${restaurant.info.id}`);
         }}
         class="col">
         <div class="card">
             <img 
             src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.info?.cloudinaryImageId}`} class="card-img-top cardImg" alt="..."/>
             <div class="card-body">
               <h5 class="card-title">{restaurant.info?.name}</h5>
               <p className='card-text'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg><span style={{marginLeft:"10px", marginTop:"7px"}}>{restaurant.info.avgRating?restaurant.info.avgRating:restaurant.info.avgRatingString}</span> 
<span style={{marginLeft:"20px"}}><i class="fa-solid fa-motorcycle"></i>  {restaurant.info?.sla.slaString}</span>
</p>
<p className='card-text'>{restaurant.info?.cuisines.slice(0,3).join(",")}...</p>
               <p class="card-text">{restaurant.info?.locality}</p>
             </div>
           </div>
           </div>
            })}
  </div>
    
  
}

function ShowShimmerEffect(){
  return<div class="row  row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-sm-1 g-4">
    <Shimmer/>
  </div>
}

  return (

   <>
   
        
       

    {restaurants.length == 0 && filteredRestaurants.length == 0?<ShowShimmerEffect/>:"" }
   {filteredRestaurants.length > 0 || restaurantName != "" ?<ShowFilteredRestaurants/> :<ShowIntialRestaurants/>}
   


   
   </>
  )
}

export default InitialComponent