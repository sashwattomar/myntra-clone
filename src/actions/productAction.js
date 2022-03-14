// import ProductService from '../backend services/productServices';
import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCESS,
  ALL_PRODUCT_FAIL,
  CLEAR_ERROR,
  SORTED_DATA,
  VIEW,
  ADD_TO_CART,
  LOAD,
  PRODUCT_ID,
  REMOVE_FROM_CART,
} from './types';
import fireDb from '../firebase-config';
export const getAllProducts = () => async (dispatch) => {
  try {
    console.log('reached again');
    dispatch({
      type: ALL_PRODUCT_REQUEST,
    });
    fireDb.child('products').on('value', (snapshot) => {
      if (snapshot.val() !== null) {
        dispatch({
          type: ALL_PRODUCT_SUCESS,
          payload: snapshot.val(),
        });
      } else console.log('not reciverd');
    });
  } catch (err) {
    dispatch({
      type: ALL_PRODUCT_FAIL,
      payload: err,
    });
  }
};
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERROR,
  });
};
export const searchProduct = (search) => async (dispatch) => {
  console.log('reache');
  fireDb
    .child('products')
    .orderByChild('brand')
    .equalTo(search)
    .on('value', (sanpshot) => {
      if (sanpshot.val()) {
        console.log('reachs');

        let data = sanpshot.val();
        console.log(data);
        dispatch({
          // type: SEARCH_REQUEST,
          type: ALL_PRODUCT_SUCESS,
          payload: data,
        });
      }
      return null;
    });
};
// export const getId = (search) => async (dispatch) => {
//   console.log('reache');
//   fireDb
//     .child('products')
//     .orderByChild('brand')
//     .equalTo(search)
//     .on('value', (sanpshot) => {
//       if (sanpshot.val()) {
//         console.log('reachs');

//         let data = sanpshot.val();
//         console.log(data);
//         dispatch({
//           // type: SEARCH_REQUEST,
//           type: PRODUCT_ID,
//           payload: data,
//         });
//       }
//       return null;
//     });
// };
export const getDataSorted = (Sortingoption, isSorted) => async (dispatch) => {
  console.log('getSOrtedData');
  fireDb
    .child('products')
    .orderByChild(Sortingoption)
    .on('value', (snapshot) => {
      let sortedData = [];
      snapshot.forEach((snap) => {
        sortedData.push(snap.val());
      });
      console.log(sortedData);
      dispatch({
        type: SORTED_DATA,
        payload: {sortedData, isSorted},
      });
    });
};
export const filteContent = (value) => async (dispatch) => {
  console.log('inisde filte content');
  fireDb
    .child('products')
    .orderByChild('brand')
    .equalTo(value)
    .on('value', (snapshot) => {
      if (snapshot.val()) {
        const data = snapshot.val();
        console.log('haha');
        dispatch({
          type: ALL_PRODUCT_SUCESS,
          payload: data,
        });
      }
    });
};
export const filteGender = (value) => async (dispatch) => {
  console.log('inisde filte content');
  fireDb
    .child('products')
    .orderByChild('gender')
    .equalTo(value)
    .on('value', (snapshot) => {
      if (snapshot.val()) {
        const data = snapshot.val();
        dispatch({
          type: ALL_PRODUCT_SUCESS,
          payload: data,
        });
      }
    });
};
export const filteColor = (value) => async (dispatch) => {
  console.log('inisde filte content');
  fireDb
    .child('products')
    .orderByChild('color')
    .equalTo(value)
    .on('value', (snapshot) => {
      if (snapshot.val()) {
        const data = snapshot.val();
        dispatch({
          type: ALL_PRODUCT_SUCESS,
          payload: data,
        });
      }
    });
};
export const viewProduct = (id) => async (dispatch) => {
  try {
    console.log('view prod fun');
    let arr = {};

    fireDb
      .child('products')
      .orderByChild('id')
      .equalTo(id)
      .on('value', async (sanpshot) => {
        let data = await sanpshot.val();
        // let arr = {};
        Object.keys(data).map((idd) => {
          arr = data[idd];
          return null;
        });
        dispatch({
          type: VIEW,
          payload: {arr: arr, load: false},
        });
      });
  } catch (err) {
    console.log('worked');
  }
};
export const addToBasket = (id) => async (dispatch) => {
  try {
    console.log('add to basket');
    fireDb
      .child('products')
      .orderByChild('id')
      .equalTo(id)
      .on('value', (sanpshot) => {
        let arr = [];
        let arrr = [];
        let data = sanpshot.val();
        Object.keys(data).map((idd) => {
          arr.push(data[idd]);

          return null;
        });
        console.log(arr);
        dispatch({
          type: ADD_TO_CART,
          payload: arr[0],
        });
      });
  } catch (err) {
    console.log(err);
  }
};

// export const load = (val) => async (dispatch) => {
//   console.log('inload');
//   console.log(val);
//   dispatch({
//     type: LOAD,
//     payload: val,
//   });
// };
export const removeItem = (id) => async (dispatch) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id,
  });
};
