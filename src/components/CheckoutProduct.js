import React from 'react';
import './CheckoutProduct.css';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'; //connect react app to redux S1:
import {removeItem} from '../actions/productAction';
const CheckoutProduct = (props) => {
  const OnClick = (e) => {
    //removie item from store
    props.removeItem(props.id);
  };
  return (
    <div className='checkoutProduct'>
      {console.log('reached')}
      <img className='checkoutProduct__image' src={props.url} alt='' />
      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{props.name}</p>
        <p className='checkoutProduct__price'>
          <small>₹</small>
          <strong>{props.price}</strong>
        </p>
        <button
          onClick={(e) => {
            OnClick(e);
          }}
        >
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

CheckoutProduct.propTypes = {
  removeItem: PropTypes.func.isRequired,
};

export default connect(null, {removeItem})(CheckoutProduct);
