import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Filter from './components/Filter';
import Header from './components/Header';
import Grid from '@mui/material/Grid';
import Product from './components/Product';
import HomePage from './components/HomePage';
import {Provider} from 'react-redux';
import store from './store';
import ViewProduct from './components/ViewProduct';
import CartLayout from './components/CartLayout';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/search/:id' element={<ViewProduct />} />
          <Route path='/cart' element={<CartLayout />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
