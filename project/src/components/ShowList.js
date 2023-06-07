import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Link, Router, Switch, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';

import './screenlist.css';
const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then(response => {
        setShows(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className='all'>
      <h1>TV Shows</h1>
      <div  className='container'>
        
        {shows.map(show => (
          <div className='link' key={show.show.id}>
           
            <Link to={`/show/${show.show.id}`}>
              <div className="list-items">
          
                <img src={show.show.image?.medium} alt={show.show.name} /> 
                <h3 className='button'>{show.show.name}</h3>
                </div>
                </Link>
            
             
              <div className="list-items1">

                <h3 className='show-details'>Language: {show.show.language}</h3>
                <h3 className='show-details'>genres: {show.show.genres}</h3>
                <h3 className='show-details'>shedule: {show.show.schedule.time} on {show.show.schedule.days.join(', ')}</h3>
                <h3 className='show-details'>rating: {show.show.rating.average}</h3>
                </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowList;
