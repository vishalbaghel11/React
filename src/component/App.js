import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom'; /**/ 
import "../index.css"
// import Grocery from './Grocery';
const App = () => {


  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};
export default App;