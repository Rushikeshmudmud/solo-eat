import React,{useEffect,useState} from 'react'
import  axios  from 'axios'
import "./App.css"
import Header from './Header'
import InitialComponent from './InitialComponent'
import Location from "./Location"


function Home() {


    const [restaurants,setRestaurants]=useState([])
    const [restaurantName,setRestaurantName] = useState("")
    const [restaurantLocation,setRestaurantLocation] = useState({lat : "17.4325894" , lng :"78.4070691"})
  const [filteredRestaurants,setFilteredRestaurants] = useState([])

 
  
  useEffect(()=>{
    
  axios.get(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${restaurantLocation.lat}&lng=${restaurantLocation.lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)
  .then((res)=>{
    setRestaurants(res.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  })
  },[restaurantLocation])
  
  useEffect( ()=>{
   let filterResult = restaurants.filter(  (restaurant,i)=>{
  if(restaurant.info.name.toLowerCase().includes(restaurantName.toLowerCase()) == true){
     return true
      }
  
    }  )
    setFilteredRestaurants(filterResult);
  },[restaurantName])
   
  

  return (

    <>
    
  
    <Header restaurantName={restaurantName}
    setRestaurantName={setRestaurantName}/>
    
      <div className='container-fluid card-wrapper'>
   
    <div className='row'>
    <div className='col-2'>
      <Location setRestaurantLocation={setRestaurantLocation}
      setRestaurants={setRestaurants}/>
     </div> 
      <div className='col-10'>
      <InitialComponent restaurants={restaurants}
      restaurantName={restaurantName}
       filteredRestaurants={filteredRestaurants}/>
  
      </div>
    </div>
  </div>
    </>
  )
}

export default Home