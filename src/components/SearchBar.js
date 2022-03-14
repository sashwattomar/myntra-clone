import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'; //connect react app to redux S1:
import {searchProduct} from '../actions/productAction';
const SearchBar = (props) => {
  // to hold the input search
  const [searchText, setSearchText] = useState('');

  const OnSubmit = async (e) => {
    e.preventDefault();
    const res = await props.searchProduct(searchText);
  };
  return (
    <Fragment>
      <form
        onSubmit={(e) => {
          OnSubmit(e);
        }}
      >
        <input
          type='text'
          className='header__searchInput'
          placeholder='Search for brands only'
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
      </form>
    </Fragment>
  );
};
SearchBar.propTypes = {
  searchProduct: PropTypes.func.isRequired,
};
export default connect(null, {searchProduct})(SearchBar);
// import React, {useState, useEffect, Fragment} from 'react';
// import './SearchBar.css';
// import fireDb from '../firebase-config';
// // import {Link, useNavigate} from 'react-router-dom';
// import PropTypes from 'prop-types';
// import {connect} from 'react-redux'; //connect react app to redux S1:
// import {searchProduct} from '../actions/productAction';
// import HomePage from './HomePage';
// const SearchBar = (props) => {
//   // let navigate = useNavigate();
//   const [changeProduct, setChangeProduct] = useState(false);
//   const [search, setSearch] = useState('');
//   useEffect(() => {
//     // searchData();
//   }, [search]);

//   // const searchData = async() => {
//   //   props.searchProduct();
//   // };
//   const OnSubmit = async (e) => {
//     e.preventDefault();
//     props.searchProduct(search);
//     setChangeProduct(true);
//   };

//   return (
//     <Fragment>
//       {/* <form onSubmit={(e) => OnSubmit(e)}>
//         <input
//           type='text'
//           className='header__searchInput'
//           placeholder='Search Brands'
//           value={search}
//           onChange={(e) => {
//             // setS earch(e.target.value);
//           }}
//         />
//       </form> */}
//     </Fragment>
//   );
// };
// const mapStateToProp = (state) => ({
//   products: state.searchedProduct.products,
//   error: state.productReducer.error,
// });
// SearchBar.PropTypes = {
//   searchedProduct: PropTypes.object.isRequired,
//   searchProduct: PropTypes.func.isRequired,
// };
// export default connect(mapStateToProp, {searchProduct})(SearchBar);
