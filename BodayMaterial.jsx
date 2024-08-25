import React from 'react'

function BodayMaterial() {
  return (
    <div className='containerr d-flex justify-content-evenly gap-2'>
        <div>
      <p className='fs-5'>Easy way make on order</p>
      <h1><span className='text-danger'>HUNGRY?</span>
      <span > Just wait <br /> food at</span> <span className='text-danger'>your door</span></h1>
      <p className='txtSize'>Lorem ipsum dolor sit amet   Aspernatur consequuntur  obcaecatic  facere ratione incidunt <br /> fuga ex voluptate.</p>
      <div className='d-flex gap-4   '>
       <button className='bg-danger text-white border-0'>order now</button>
      <button className='border-0   '>see all food</button>
      </div>
      <div className=' d-flex gap-3 mt-3'> 
        <span className='txtSize'>  <img className='logoimg logoo' src="/src/assets/images/foodlogo.png" alt="" /> Tasty al piza</span>
        <span className='txtSize' >  <img className='logoimg logoo' src="/src/assets/images/foodlogo.png" alt="" /> Tasty iqrar pizza</span>
      </div>

      </div>
     
     <div className='d-flex  '><img className='bikedelivery bikeee' src="/src/assets/images/biked.jpg" alt="" /></div>
    </div>
  )
}

export default BodayMaterial
