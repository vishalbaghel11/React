import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom'; /**/ 
import "../index.css"
import { Provider } from 'react-redux';
import store from '../store';
// import Grocery from './Grocery';
const App = () => {


  return (
    <Provider store={store}>
    <div className="app">
      <Header />
      <Outlet/>
    </div>
    </Provider>
  );
};
export default App;