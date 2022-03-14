import PropTypes from 'prop-types';
import {connect} from 'react-redux'; //connect react app to redux S1:
import CheckoutProduct from './CheckoutProduct';
function CartLayout(props) {
  return (
    <div className='checkout'>
      {console.log(props.basket)}
      {props.basket.length === 0 ? (
        <div>
          <h2>Your bag is empty</h2>
        </div>
      ) : (
        <div>
          <h2 className='checkout__title'>Your Basket</h2>
          {props.basket.map((item, index) => {
            return (
              <CheckoutProduct
                key={index}
                id={item.id}
                name={item.name}
                url={item.images[0]}
                brand={item.brand}
                price={item.price}
              >
                {console.log('reac')}
              </CheckoutProduct>
            );
          })}
          <button onClick={props.closeCart}>Close Cart</button>
        </div>
      )}
    </div>
  );
}
CartLayout.propTypes = {
  basket: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  basket: state.productReducer.basket,
});
export default connect(mapStateToProps, null)(CartLayout);
