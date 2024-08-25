import React from 'react'

function PopularFood() {
  return (
<div className='d-flex justify-content-center'>
        <div className='centerNav gap-3 rounded bg-danger '>
            <span className='all px-4 rounded'>All </span>
            <span>  <img className='logoimg logoo' src="/src/assets/images/foodlogo.png" alt="" /> Pari piza</span>
            <span> <img className='logoimg logoo' src="/src/assets/images/foodlogo.png" alt="" /> fajita piza</span>
            <span> <img className='logoimg logoo' src="/src/assets/images/foodlogo.png" alt="" /> kabab piza</span>

        </div>
        </div>
  )
}

export default PopularFood
