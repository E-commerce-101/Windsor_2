
const Navbar = () => {
    return (
        <div className='nav-bar'>
        <a href='#' className= 'nav-logo'>
        
        </a>
        <ul className='nav-menu'>
            <li className='nav-menu-item'>
                <a href='#'>Shop</a>
            </li>
            <li className='nav-menu-item'>
                <a href='#'>Most Wanted</a>
            </li>
            <li className='nav-menu-item'>
                <a href='#'>New Arrival</a>
            </li>
            <li className='nav-menu-item'>
                <a href='#'>Brands</a>
            </li>
        </ul>
        <div className= 'nav-actions'>
          <form className='search-form'>
            <span className="material-symbols-outlined">search</span>
            <input type='text' name= 'search-input'placeholder='Search'/>
          </form>
          <a href='#'><span className="material-symbols-outlined">shopping_cart</span></a>
          <a href='#'><span className="material-symbols-outlined">person</span></a>
        
        </div>
        </div>   
    )

}

export default Navbar