import React,{useState,useEffect} from 'react'
import axios from 'axios'

function Location({setRestaurantLocation,setRestaurants}) {
    
let [locationName,setLocationName]=useState("")
let [locations,setLocations]=useState([])

useEffect(()=>{
    axios.get(`https://www.swiggy.com/dapi/misc/place-autocomplete?input=${locationName}&types=`)
    .then((res)=>{
        if(res.data?.data){  
              setLocations(res.data.data);
        }
    })
},[locationName])

const getGeometry = (placeID)=>{
  setRestaurants([])
  axios.get(`https://www.swiggy.com/dapi/misc/address-recommend?place_id=${placeID}`)
  .then((res)=>{
   let location = res.data?.data[0]?.geometry?.location
   setRestaurantLocation({lat : location.lat , lng : location.lng })
   setLocations([])
  })
}

  return(
    <>
   
       <input
       value={locationName}
       onChange={(e)=>{
        setLocationName(e.target.value)
       }}
       placeholder='Search Location'
       />
       <div className='list-group '>
        {locations.length > 0 ?
        locations.map((suggestion,i)=>{
          return <a
          onClick={()=>{
             getGeometry(suggestion.place_id)
          }}
          
          href="#" class="list-group-item list-group-item-action location-list-group">{suggestion.description}</a>
        }):""
        }

       </div>

      
      </>
  )
}

export default Location