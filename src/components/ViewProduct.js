import React, {useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';
import {viewProduct} from '../actions/productAction';
import {addToBasket} from '../actions/productAction';
import CardProduct from './CardProduct';
import ButtonC from './Button';
import Header from './Header';
import Button from '@mui/material/Button';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Delay from 'react-delay';
//FUNCTION
const ViewProduct = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  //accessing id from the URL
  const {id} = useParams();
  const [check, setcheck] = useState(false);
  useEffect(() => {
    props.viewProduct(id).then(() => {
      if (isLoading === true) {
        setIsLoading(false);
      }
    });
  }, []);
  const OnClick = (e) => {
    props.addToBasket(id);
  };
  if (isLoading === false) {
    return (
      <Delay wait={250}>
        <div style={{marginTop: '10px'}}>
          <Header />
          <Grid container>
            <Grid item sm={0.1} xs={0.5}></Grid>
            <Grid
              item
              container
              direction='column'
              style={{marginRight: '5px'}}
              sm={5.9}
              xs={5.5}
            >
              {' '}
              {setTimeout(() => {
                setcheck(true);
              }, 5000)}
              <Grid container rowSpacing={1} columnSpacing={1}>
                {check &&
                  props.viewItem.images.map((img, index) => {
                    return (
                      <Grid key={index} item xs={6}>
                        <CardProduct key={index} url={img} />
                      </Grid>
                    );
                  })}
              </Grid>
            </Grid>
            <Grid item container direction='column' sm={5.9} xs={5.5}>
              {/* top info */}
              <Grid style={{marginLeft: '10px', marginBottom: '2rem'}} item>
                {/* mid info */}
                <Grid item className='topInfo' style={{marginBottom: '10px'}}>
                  <div
                    className='brand'
                    style={{fontSize: '2rem', fontWeight: '550'}}
                  >
                    {props.viewItem.brand}
                  </div>
                </Grid>
                <Grid item className='topInfo' style={{marginBottom: '20px'}}>
                  <div className='name'>
                    <span
                      style={{
                        fontSize: '1.3rem',
                        fontWeight: '450',
                        color: 'grey',
                      }}
                    >
                      {props.viewItem.name}
                    </span>
                  </div>
                </Grid>
                <hr style={{color: 'silver'}} />
                <Grid item className='topInfo' style={{marginBottom: '20px'}}>
                  <div className='rating' style={{marginTop: '12px'}}>
                    <Button
                      size='large'
                      style={{
                        border: 'solid  1px grey',
                      }}
                    >
                      <span>
                        {' '}
                        <span
                          style={{
                            fontWeight: '600',
                            color: 'Black',
                            fontSize: '1.2rem',
                          }}
                        >
                          4
                        </span>{' '}
                        <span>⭐</span>{' '}
                        <span style={{color: 'grey'}}>
                          | {`${props.viewItem.rating}K Ratings`}
                        </span>
                      </span>
                    </Button>
                  </div>
                </Grid>
                <Grid item className='midInfo' style={{marginBottom: '5px'}}>
                  <div className='price' style={{fontSize: '2rem'}}>
                    <span>Rs. 549</span>
                    <span style={{color: 'Orange', marginLeft: '1rem'}}>
                      (45% OFF)
                    </span>
                  </div>
                </Grid>
                <Grid item className='topInfo' style={{marginBottom: '5px'}}>
                  <div className='text'>
                    <span style={{color: 'green', fontSize: '1rem'}}>
                      inclusive of all tax
                    </span>
                  </div>
                </Grid>
              </Grid>

              <Grid style={{marginLeft: '10px', marginBottom: '2rem'}} item>
                <Grid item className='topInfo' style={{marginBottom: '20px'}}>
                  <div
                    className='Heading'
                    style={{fontSize: '1rem', fontWeight: '500'}}
                  >
                    <span>SELECT SIZE</span>
                    <span style={{marginLeft: '1rem', color: 'red'}}>
                      SIZE CHART
                    </span>
                  </div>
                </Grid>
                <Grid item className='topInfo' style={{marginBottom: '20px'}}>
                  <div className='name' style={{display: 'flex'}}>
                    <span>
                      <ButtonC size='30' />
                    </span>
                    <span>
                      <ButtonC size='32' />
                    </span>
                    <span>
                      <ButtonC size='33' />
                    </span>
                    <span>
                      <ButtonC size='34' />
                    </span>
                  </div>
                </Grid>

                {/* add to cart */}
                <Grid item>
                  <Button
                    variant='contained'
                    size='large'
                    style={{
                      marginRight: '5px',
                      width: '15rem',
                      height: '4rem',
                      backgroundColor: 'rgb(235, 52, 131)',
                    }}
                    onClick={(e) => {
                      OnClick(e);
                    }}
                  >
                    <ShoppingBagIcon style={{marginRight: '2px'}} />
                    <span style={{fontSize: '1.3rem', color: 'white'}}>
                      ADD TO BAG
                    </span>
                  </Button>
                  <Button
                    variant='contained'
                    size='large'
                    style={{
                      width: '15rem',
                      height: '4rem',
                      backgroundColor: 'white',
                    }}
                  >
                    <FavoriteBorderOutlinedIcon
                      style={{color: 'grey', marginRight: '2px'}}
                    />
                    <span style={{fontSize: '1.3rem', color: 'black'}}>
                      WISHLIST
                    </span>
                  </Button>
                </Grid>
                <Grid item>
                  {' '}
                  <br />
                  <hr style={{color: 'grey'}} />
                  <br />
                  <p
                    style={{
                      fontSize: '1.3rem',
                      fontWeight: '450',
                      color: 'grey',
                    }}
                  >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque tempore ipsum soluta ex a? Laboriosam itaque
                    distinctio porro exercitationem magni, placeat odio
                    provident molestias neque aliquid nisi saepe perferendis
                    soluta. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Consequuntur reiciendis placeat sapiente magni
                    consectetur iste ex illum vero voluptate? Laboriosam placeat
                    sed similique tempore fuga excepturi ipsum reiciendis itaque
                    ab ullam pariatur tenetur esse, deleniti inventore corrupti,
                    eveniet voluptates eligendi eum nihil, cumque ducimus. Culpa
                    numquam animi explicabo quidem sint?
                  </p>
                </Grid>
              </Grid>
            </Grid>

            <Grid item sm={0.1} xs={0.5}></Grid>
          </Grid>
        </div>
      </Delay>
    );
  } else {
    return <div>loading</div>;
  }
};

ViewProduct.propTypes = {
  viewProduct: PropTypes.func.isRequired,
  addToBasket: PropTypes.func.isRequired,
  viewItem: PropTypes.object,
};

const mapStateToProp = (state) => ({
  viewItem: state.productReducer.viewItem,
});
export default connect(mapStateToProp, {viewProduct, addToBasket})(ViewProduct);
