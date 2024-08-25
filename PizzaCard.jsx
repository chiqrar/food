import React from 'react'

function PizzaCard() {
  return (
    <div>
      <div className='d-flex  flex-column pizzacrd shadow rounded gap-3'>
        <img className='pizza' src="/src/assets/images/pizza.jpg" alt="" />
        <span>vegitable pizza</span>
        <div className='price gap-5'>
    <span className='text-danger'>$11</span>
    <button className='bg-danger text-white border-0' >Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default PizzaCard
