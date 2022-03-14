import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'; //connect react app to redux S1:
import {filteGender} from '../../actions/productAction';
import {makeStyles} from '@material-ui/core';
const useStyles = makeStyles({
  options: {
    marginBottom: '0',
    paddingBottom: '0',
    height: '2rem',
  },
});
const Gender = (props) => {
  const classes = useStyles();
  const filterContent = (value) => {
    props.filteGender(value);
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
            onClick={() => filterContent('MEN')}
            value='MEN'
            control={<Radio />}
            label='MEN'
          />
          <FormControlLabel
            className={classes.options}
            onClick={() => filterContent('MEN')}
            value='BOYS'
            control={<Radio />}
            label='BOYS'
          />
          <FormControlLabel
            className={classes.options}
            onClick={() => filterContent('WOMEN')}
            value='WOMEN'
            control={<Radio />}
            label='WOMEN'
          />
          <FormControlLabel
            className={classes.options}
            onClick={() => filterContent('WOMEN')}
            value='GIRLS'
            control={<Radio />}
            label='GIRLS'
          />
        </span>
      </RadioGroup>
    </FormControl>
  );
};
// const Gender = (props) => {
// const filterContent = (value) => {
//   props.filteGender(value);
// };
//   return (
//     <Fragment>
//       {' '}
//       <Grid style={{display: 'flex', flexDirection: 'column'}}>
//
//         <Grid style={{marginBottom: '1px'}} item className='filterContent'>
//           <input
//             onClick={() => filterContent('MEN')}
//             type='radio'
//             value='BOYS'
//           />
//           <label htmlFor='BOYS'>BOYS</label>
//         </Grid>
//         <Grid style={{marginBottom: '1px'}} item className='filterContent'>
//           <input
//             onClick={() => filterContent('WOMEN')}
//             type='radio'
//             value='GIRLS'
//           />
//           <label htmlFor='GIRLS'>GIRLS</label>
//         </Grid>
//         <Grid style={{marginBottom: '10px'}} item className='filterContent'>
//           <input
//             onClick={() => filterContent('WOMEN')}
//             type='radio'
//             value='WOMEN'
//           />
//           <label htmlFor='WOMEN'>WOMEN</label>
//         </Grid>
//       </Grid>
//     </Fragment>
//   );
// };

Gender.propTypes = {
  filteGender: PropTypes.func.isRequired,
};

export default connect(null, {filteGender})(Gender);
