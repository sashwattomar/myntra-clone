import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'; //connect react app to redux S1:
import {getDataSorted} from '../actions/productAction';
const Dropdown = (props) => {
  const [age, setAge] = React.useState('');

  const handleChange = (e) => {
    //sorting Preference

    setAge(e.target.value);
    console.log('this side');
    const Sortingoption = e.target.value;
    let isSorted = false;
    if (age !== 'price' && age !== 'gender' && age !== 'rating') {
      isSorted = true;
    }
    props.getDataSorted(Sortingoption, isSorted);
  };

  return (
    <div>
      <FormControl
        sx={{m: 1, minWidth: 120}}
        style={{float: 'right', display: 'block'}}
      >
        <Select value={age} onChange={handleChange} displayEmpty>
          <MenuItem value=''>
            <span>
              Sort by :<span style={{fontWeight: '700'}}> Recommended</span>{' '}
            </span>
          </MenuItem>
          <MenuItem value='price'>Price</MenuItem>
          <MenuItem value='gender'>Gender</MenuItem>
          <MenuItem value='rating'>Rating</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
Dropdown.propTypes = {
  getDataSorted: PropTypes.func.isRequired,
};

export default connect(null, {getDataSorted})(Dropdown);
