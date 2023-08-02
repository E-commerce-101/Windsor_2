

const TopBar = () => {
  
    return(
        
          <div className='top-bar'>
          <ul className='top-bar-menu'>
            <li className='top-bar-item'>
                <a href='#'>Support</a>
            </li>
            <li className='top-bar-item'>
                <a href='#'>Ship in: </a>
        </li>
        </ul>
          <div className='top-bar-cta'>Support<span> get 20% off</span> for your first order. <a href='#'>Sign up now</a></div>
          <div className='close-top-bar'>My Account</div>
        </div>
    )
}

export default TopBar