import React, {Fragment} from 'react';
import Grid from '@mui/material/Grid';
import Gender from './FilterCategories/Gender';
import SearchIcon from '@mui/icons-material/Search';
import './Filter.css';
import Brand from './FilterCategories/Brand';
import Color from './FilterCategories/Color';
const Filter = () => {
  return (
    <Fragment>
      <Grid
        container
        direction='column'
        style={{display: 'flex', alignItems: 'flex-start', marginLeft: '5px'}}
      >
        <Grid
          item
          container
          direction='column'
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <SearchIcon color='disabled' style={{alignSelf: 'flex-end'}} />
          <Gender
            style={{
              alignSelf: 'center',
              borderStyle: 'solid',
              borderColor: 'black',
            }}
          />
          <br />
          <Grid
            item
            style={{
              display: 'flex',
              alignSelf: 'flex-start',
              marginLeft: '5px',
            }}
          >
            <span style={{fontWeight: '650'}}>BRANDS</span>
          </Grid>
          <SearchIcon color='disabled' style={{alignSelf: 'flex-end'}} />
          <Brand style={{alignSelf: 'center'}} />
          <br />
          <Grid
            item
            style={{
              display: 'flex',
              alignSelf: 'flex-start',
              marginLeft: '5px',
            }}
          >
            <span style={{fontWeight: '650'}}>Colors</span>
          </Grid>
          <SearchIcon color='disabled' style={{alignSelf: 'flex-end'}} />
          <Color style={{alignSelf: 'center', float: 'left'}} />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Filter;
