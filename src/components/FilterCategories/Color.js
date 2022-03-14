import {filteColor} from '../../actions/productAction';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'; //connect react app to redux S1:
import * as React from 'react';
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

  divstyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});
const Color = (props) => {
  const classes = useStyles();
  const filterContent = (value) => {
    props.filteColor(value);
  };
  return (
    <FormControl className={classes.divstyle}>
      <RadioGroup
        aria-labelledby='demo-radio-buttons-group-label'
        defaultValue='female'
        name='radio-buttons-group'
      >
        <FormControlLabel
          className={classes.options}
          onClick={() => filterContent('Navy-Blue')}
          value='Navy-Blue'
          control={<Radio />}
          label='Navy-Blue'
        />
        <FormControlLabel
          className={classes.options}
          onClick={() => filterContent('Brown')}
          value='Brown'
          control={<Radio />}
          label='Brown'
        />
        <FormControlLabel
          className={classes.options}
          onClick={() => filterContent('White')}
          value='White'
          control={<Radio />}
          label='White'
        />
        <FormControlLabel
          className={classes.options}
          onClick={() => filterContent('Peach')}
          value='Peach'
          control={<Radio />}
          label='Peach'
        />
        <FormControlLabel
          className={classes.options}
          onClick={() => filterContent('Blue')}
          value='Blue'
          control={<Radio />}
          label='Blue'
        />
      </RadioGroup>
    </FormControl>
  );
};

Color.propTypes = {
  filteColor: PropTypes.func.isRequired,
};

export default connect(null, {filteColor})(Color);
