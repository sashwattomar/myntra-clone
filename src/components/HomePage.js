import React, {Fragment, useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import Header from './Header';
import Product from './Product';
import {getAllProducts} from '../actions/productAction';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'; //connect react app to redux S1:
import Filter from './Filter';
import Dropdown from './Dropdown';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core';
const useStyles = makeStyles({
  filters: {
    marginTop: '1rem',
    fontSize: '1.2rem',
    alignSelf: 'flex-end',
    fontWeight: '500',
    marginRight: '3rem',
    color: 'grey',
    marginLeft: '1rem',
  },
  dropDown: {
    marginTop: '0',
    display: 'flex',
    alignSelf: 'flex-end',
  },
});
const HomePage = (props) => {
  let prodArray = props.isSorted;
  const classes = useStyles();
  //to rerender compoent on product searched
  const [searchResult, setSearchResult] = useState(false);
  //to get products
  useEffect(() => {
    //requesting all products
    props.getAllProducts();
  }, []);

  return (
    <Fragment>
      {/* parent */}
      <Grid container spacing={2} style={{display: 'flex'}}>
        {/* header  & subHeader*/}
        <Grid item xs={12}>
          <Header setSearchResult={setSearchResult} />
        </Grid>
        {/* FILTERS */}
        {/* filter heading */}
        <Grid
          xs={6}
          sm={2}
          style={{
            paddingRight: '5px',
            fontSize: '1.1rem',
            fontWeight: '600',
            marginTop: '1rem',
          }}
          item
        >
          FILTERS
        </Grid>
        {/* FILTERS TYPE */}
        <Grid
          xs={3}
          sm={8}
          item
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          {' '}
          <Grid className={classes.filters} item xs={1}>
            FILTERS
          </Grid>
          <Grid className={classes.filters} item xs={1}>
            FILTERS
          </Grid>
          <Grid className={classes.filters} item xs={1}>
            FILTERS
          </Grid>
          <Grid className={classes.filters} item xs={1}>
            FILTERS
          </Grid>
          <Grid className={classes.filters} item xs={1}>
            FILTERS
          </Grid>
        </Grid>
        <Grid item xs={3} sm={2}>
          <Dropdown className={classes.dropDown} />
        </Grid>
        {/* filters column */}
        <Grid container direction='column' xs={0} item sm={3}>
          <Grid item>
            {' '}
            <Filter />
          </Grid>
        </Grid>
        {/* product row */}

        {/* {props.sortedData === [] ? ( */}
        {!props.isSorted && (
          <Fragment>
            <Grid container xs={12} item sm={9} rowSpacing={2}>
              {Object.keys(props.products).map((id, index) => {
                return (
                  <Grid key={index} item>
                    <Link style={{textDecoration: 'none'}} to={`/search/${id}`}>
                      <Product product={props.products[id]} />
                    </Link>
                  </Grid>
                );
              })}
            </Grid>
          </Fragment>
        )}
        {/* else case */}
        {props.isSorted && (
          <Fragment>
            <Grid container xs={12} item sm={9} rowSpacing={2}>
              {props.sortedData.map((prod, index) => {
                console.log(prod);

                return (
                  <Grid key={index} item>
                    <Link
                      style={{textDecoration: 'none'}}
                      to={`/search/${prod.id}`}
                    >
                      <Product product={prod} />
                    </Link>
                  </Grid>
                );
              })}
            </Grid>
          </Fragment>
        )}
      </Grid>
    </Fragment>
  );
};
HomePage.propTypes = {
  products: PropTypes.object.isRequired,
  getAllProducts: PropTypes.func.isRequired,
  searchedProduct: PropTypes.object,
};
const mapStateToProp = (state) => ({
  products: state.productReducer.products,
  // loading: state.productReducer.loading,
  error: state.productReducer.error,
  searchedProduct: state.productReducer.searchedProduct,
  sortedData: state.productReducer.sortedData,
  isSorted: state.productReducer.isSorted,
});
export default connect(mapStateToProp, {getAllProducts})(HomePage);
