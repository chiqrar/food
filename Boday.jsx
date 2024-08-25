import React from 'react'
import BodayMaterial from './BodayMaterial'
import BodayCard from './BodayCard'
import BodayContant from './BodayContant'
import DeliveryMethod from './DeliveryMethod'
import PopularFood from './PopularFood'
import PizzaCard from './PizzaCard'
function Boday() {
  return (
    <div>
      <BodayMaterial/>
      <div className='cards'>
      <BodayCard/>
      <BodayCard/> 
      <BodayCard/>
       <BodayCard/>
       
       </div>
       <BodayContant />
       <div className='food-dlvry-mthd'>
       <DeliveryMethod />
       <DeliveryMethod />
       <DeliveryMethod />
       </div>
       <div className='popular-main'><h3>Popular Food</h3></div>
    <PopularFood />
    <div className='pizacrd'>
      < PizzaCard />
    < PizzaCard />
    < PizzaCard />
    < PizzaCard />
    </div>
    </div>
  )
}

export default Boday
