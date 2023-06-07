import React from 'react';
import {Switch, Route } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';
import BookingForm from './components/BookingForm';
import './App.css';
const App = () => {
  return (
    
      <div className="App">
       
        <Switch>
        <Route exact path="/" component={ShowList} />
        <Route exact path="/show/:id" component={ShowDetails} />
        <Route exact path="/booking" component={BookingForm} />
        </Switch>
     
      </div>
   
  );
}

export default App;
