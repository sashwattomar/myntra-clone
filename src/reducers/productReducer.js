import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCESS,
  ALL_PRODUCT_FAIL,
  CLEAR_ERROR,
  // SEARCH_REQUEST,
  SORTED_DATA,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  VIEW,
  LOAD,
} from '../actions/types';
const initialState = {
  loading: true,
  products: {},
  searchedProduct: {},
  sortedData: [],
  isSorted: false,
  viewItem: {},
  basket: [],
};
export default function productReducer(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case ALL_PRODUCT_REQUEST: {
      return {
        ...state,
      };
    }
    case ALL_PRODUCT_SUCESS: {
      return {
        ...state,
        products: payload,
      };
    }

    case ADD_TO_CART: {
      return {
        ...state,
        basket: [...state.basket, payload],
      };
    }
    case SORTED_DATA: {
      return {
        ...state,
        sortedData: payload.sortedData,
        isSorted: payload.isSorted,
      };
    }
    case REMOVE_FROM_CART:
      console.log('gagag');
      console.log(state.basket);
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === payload
      );
      console.log(index);
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn();
        console.warn('cant remove');
      }
      return {
        ...state,
        basket: newBasket,
      };

    case VIEW: {
      return {
        ...state,
        viewItem: payload.arr,
        loading: payload.load,
      };
    }
    // case LOAD: {
    //   console.log(payload);
    //   return {
    //     ...state,
    //     loading: payload,
    //   };
    // }
    default:
      return state;
  }
}
