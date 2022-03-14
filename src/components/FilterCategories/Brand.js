import * as React from 'react';
import {filteContent} from '../../actions/productAction';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'; //connect react app to redux S1:
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import {makeStyles} from '@material-ui/core';
const useStyles = makeStyles({
  options: {
    marginBottom: '0',
    paddingBottom: '0',
    height: '2rem',
  },
});
const Brand = (props) => {
  const classes = useStyles();
  const filterContent = (value) => {
    props.filteContent(value);
  };
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby='demo-radio-buttons-group-label'
        defaultValue='female'
        name='radio-buttons-group'
      >
        <span
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <FormControlLabel
            className={classes.options}
            onClick={() => filterContent('Mast & Harbour')}
            value='Mast & Harbour'
            control={<Radio />}
            label='Mast & Harbour'
          />
          <FormControlLabel
            className={classes.options}
            onClick={() => filterContent('U.S. Polo Assn.')}
            value='U.S. Polo Assn.'
            control={<Radio />}
            label='U.S. Polo Assn.'
          />
          <FormControlLabel
            className={classes.options}
            onClick={() => filterContent('DressBerry')}
            value='DressBerry'
            control={<Radio />}
            label='DressBerry'
          />
          <FormControlLabel
            className={classes.options}
            onClick={() => filterContent('Moda Rapido')}
            value='Moda Rapido'
            control={<Radio />}
            label='Moda Rapido'
          />
        </span>
      </RadioGroup>
    </FormControl>
  );
};

Brand.propTypes = {
  filteContent: PropTypes.func.isRequired,
};

export default connect(null, {filteContent})(Brand);
