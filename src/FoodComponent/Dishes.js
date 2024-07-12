import React,{useState,useEffect} from 'react'
import axios from 'axios'

function Dishes() {
 
    const [dishName,setDishName]=useState("")
    const [dishes,setDishes]=useState([])

    useEffect(()=>{
      axios.get(`https://www.swiggy.com/dapi/restaurants/search/v3?lat=23.0263517&lng=72.58190130000001&str=${dishName}&trackingId=undefined&submitAction=SUGGESTION&queryUniqueId=f93ae351-948f-ccaf-fbcb-abe4bd4a39d1&`)
    .then((res)=>{
      if(res.data?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH ){
        setDishes(res.data?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards?.slice(1) )
      }
 
    })
    },[dishName])
     
    console.log(dishes);

  return (
    <>
     <div class="row  row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-sm-1 g-4">
    <div><h1 style={{textAlign:"center" , marginTop:"100px"}}>Dishes</h1>
    <input
    value={dishName}
    onChange={(e)=>{
      setDishName(e.target.value)
    }}
    class="border border-danger-subtle form-control-lg offset-5"  type="search" placeholder="Search Dishes" aria-label=".form-control-lg example"></input>
   
    {dishName.length > 0 ? dishes.map((dish,i)=>{
    console.log(dish.card?.card?.info);
    return <div class="col">
    <div class="card h-100">
        <img 
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${dish.card?.card?.info?.imageId}`} class="card-img-top dish-img" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{dish.card?.card?.info?.name.slice(0,16)}</h5>
         <p><b>Price :</b>{dish.card?.card?.info?.price/100} ₹</p>
         <p><b>Rating : </b>{dish.card?.card?.info?.ratings?.aggregatedRating?.rating}</p>

        </div>
      </div>
    </div>
      
    }):""}
   
   
    </div>
    <div>

    </div>
    </div>
    </>
  )
}

export default Dishes