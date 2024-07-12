import React,{useEffect,useState} from 'react'
import axios from 'axios'

function Restaurants() {

  const[restaurantName,setRestaurantName]=useState("")
 const [restaurants,setRestaurant]=useState([])

useEffect(()=>{
  axios.get(`https://www.swiggy.com/dapi/restaurants/search/v3?lat=23.0263517&lng=72.58190130000001&str=${restaurantName}%20Restaurant&trackingId=undefined&submitAction=SUGGESTION&queryUniqueId=33bf3443-8ea0-2711-46da-cf31ed0137b8&`)
  .then((res)=>{
if(res.data?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT){
  setRestaurant(res.data?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards?.slice(1))
}
  })
},[restaurantName])


  return (
    <>
    <div class="row  row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-sm-1 g-4">
    <h1 style={{textAlign:"center" , marginTop:"100px"}}>Restaurants</h1>
     <input
    value={restaurantName}
    onChange={(e)=>{
      setRestaurantName(e.target.value)
    }}
    class="border border-danger-subtle form-control-lg offset-5"  type="search" placeholder="Search Dishes" aria-label=".form-control-lg example"></input>
   {restaurants.map((restaurant,i)=>{
    console.log(restaurant?.card?.card?.info);
    return  <div class="col">
    <div class="card h-100">
      <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant?.card?.card?.info?.cloudinaryImageId}`} 
      class="card-img-top restaurant-food-card" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{restaurant?.card?.card?.info?.name}...</h5>
      
        <p className='card-text'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg><span style={{marginLeft:"10px", marginTop:"7px"}}>{restaurant?.card?.card?.info?.avgRating?restaurant?.card?.card?.info?.avgRating:restaurant?.card?.card?.info?.avgRatingString}</span> 
            <span style={{marginLeft:"20px"}}><i class="fa-solid fa-motorcycle"></i>  {restaurant?.card?.card?.info?.sla.slaString}</span>
            </p>
            <p className='card-text'>{restaurant?.card?.card?.info?.cuisines.slice(0,3).join(",")}...</p>
                     <p class="card-text">{restaurant?.card?.card?.info?.locality}</p>
</div>
</div>
</div>
   })}
   </div>
    </>
  )
}

export default Restaurants;
