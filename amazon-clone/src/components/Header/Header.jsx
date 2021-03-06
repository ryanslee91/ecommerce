import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from '../../StateProvider';

function Header() {
  const [{ basket }] = useStateValue();
console.log(basket)

  return (
    <nav className="header">
      <Link to="/">
        <img id="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon_logo">  
        </img>
      </Link>

      <div className="header__search">
      <input type="text" className="header__searchInput" />
      <SearchIcon className="header__searchIcon" />
      </div>

      <div className="headerNav">
        <Link to="/login" className="header__link">
        <div className="header__option">
        <span className="header_option1">Hello Ryan</span>
        <span className="header_option2">Sign In</span>
        </div>
        </Link>

        <Link to="/" className="header__link">
        <div className="header__option">
        <span className="header_option1">Returns</span>
        <span className="header_option2">& Orders</span>
        </div>
        </Link>

        <Link to="/" className="header__link">
        <div className="header__option">
        <span className="header_option1">Your</span>
        <span className="header_option2">Prime</span>
        </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__basket">
            <ShoppingBasketIcon />
            <span className="header_option2 header_basketCount">{basket?.length}</span>
          </div>
        </Link>


      </div>
    </nav>
  )
}

export default Header
