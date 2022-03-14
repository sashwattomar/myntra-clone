import React, {Fragment, useState} from 'react';
import myntraLogo from './images/myntra.png';
import './Header.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SubHeader from './SubHeader';
import SearchBar from './SearchBar';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CartLayout from './CartLayout';
const Header = (props) => {
  const [showCart, setShowCart] = useState(false);
  const showCartHandler = () => {
    setShowCart(!showCart);
  };
  const closeCartHandler = () => {
    setShowCart(false);
  };

  return (
    <Fragment>
      <nav className='header'>
        {/* Myntra logo */}
        <Link to='/'>
          <img className='header_logo' src={myntraLogo} alt='logo' />
        </Link>
        <div className='firstBlock'>
          {/* 5 links */}

          <div className='header__categories'>
            {/* men */}
            <Link className='header__categoriesLink' to='/men'>
              <div className='header__categoriesOption'>
                <span className='header_categoriesLineOne'>MEN</span>
              </div>
            </Link>
            {/*women */}
            <Link className='header__categoriesLink' to='/women'>
              <div className='header__categoriesOption'>
                <span className='header_categoriesLineOne'>WOMEN</span>
              </div>
            </Link>
            {/* kids */}
            <Link className='header__categoriesLink' to='/kids'>
              <div className='header__categoriesOption'>
                <span className='header_categoriesLineOne'>KIDS</span>
              </div>
            </Link>
            {/* home and living */}
            <Link className='header__categoriesLink' to='/homeandliving'>
              <div className='header__categoriesOption'>
                <span className='header_categoriesLineOne'>HOME & LIVING</span>
              </div>
            </Link>
            {/* beauty */}
            <Link className='header__categoriesLink' to='/beauty'>
              <div className='header__categoriesOption'>
                <span className='header_categoriesLineOne'>BEAUTY</span>
              </div>
            </Link>
          </div>
        </div>

        <div className='secondBlock'>
          {' '}
          {/* search box */}
          <div className='header__search'>
            <SearchIcon className='header__searchIcon' color='disabled' />

            <SearchBar
              className='header__searchInput'
              // searchResult={props.setSearchResult}
            />
          </div>
          {/* 3 links */}
          <div className='header__nav'>
            {/* profile */}
            <Link to='/profile' className='header__link'>
              <div className='header__option'>
                <span className='header_optionLineOne'>
                  <PermIdentityOutlinedIcon color='disabled' />
                </span>
                <span className='header_optionLineTwo'>Profile</span>
              </div>
            </Link>
            {/* wishList */}
            <Link to='/wishlist' className='header__link'>
              <div className='header__option'>
                <span className='header_optionLineOne'>
                  <FavoriteBorderOutlinedIcon color='disabled' />
                </span>
                <span className='header_optionLineTwo'>Wishlist</span>
              </div>
            </Link>
            {/* bag */}
            {/* <Link to='/cart' className='header__link'> */}
            <div className='header__option' onClick={() => showCartHandler()}>
              <span className='header_optionLineOne'>
                <ShoppingBagOutlinedIcon color='disabled' />
              </span>
              <span className='header_optionLineTwo'>{`Bag${props.basket.length}`}</span>

              {/* <span>{props.basket.length}</span> */}
            </div>
            {/* </Link> */}
          </div>
        </div>
      </nav>
      <SubHeader />
      <br />
      {showCart && <CartLayout closeCart={closeCartHandler} />}
    </Fragment>
  );
};

Header.propTypes = {
  basket: PropTypes.array.isRequired,
};
const mapStateToProp = (state) => ({
  basket: state.productReducer.basket,
});
export default connect(mapStateToProp, {})(Header);
