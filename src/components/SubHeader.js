import {Fragment} from 'react';
import './SubHeader.css';
import {Link} from 'react-router-dom';
const SubHeader = () => {
  return (
    <Fragment>
      <div className='subHeaderContainer'>
        <div className='subHeader__options'>
          <span className='subHeader__optionOne'>Home</span>
          <span className='subHeader__optionTwo'> /</span>
        </div>
        <div className='subHeader__options'>
          <span className='subHeader__optionOne'>Clothing</span>
          <span className='subHeader__optionTwo'> /</span>
        </div>
        <div className='subHeader__options'>
          <span className='subHeader__optionOne' id='Shirts_For_Men_Women'>
            {' '}
            <Link to='/' style={{textDecoration: 'none'}}>
              {' '}
              Shirts For Men & Women
            </Link>
          </span>
        </div>
      </div>
      <br />

      <div className='subHeaderContainer'>
        <div className='subHeader__options'>
          <span
            className='subHeader__optionOne subHeader_optionOne'
            id='Shirts_For_Men_Women'
          >
            {' '}
            Shirts For Men & Women
          </span>
          <span className='subHeader_optionTwo'> - 6 items </span>
        </div>
      </div>
    </Fragment>
  );
};

export default SubHeader;
