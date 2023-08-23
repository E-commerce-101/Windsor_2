import React from 'react'
const TopBar =()=>{
    return(
        <div className='top-bar'>
          <div className='top-bar-heading'>
          <a href='#'>Support</a>
          <a href='#'>Ship To</a>
          </div>
          <div className='dynamic '>
            <span className='dynamic-text'>Up to 60% Off</span>
            <span className='dynamic-text'>Free Standard Shipping Over R1000</span>
          </div>

          <div className='my-account'>
            <form>
              <select name='account'> 
              <option value='choose'>MY ACCOUNT</option>
             </select>
           </form>
      </div>
     </div>
    )
}
export default TopBar