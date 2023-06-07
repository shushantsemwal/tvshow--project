import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './screendetails.css';

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows/${id}`)
      .then(response => {
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(response.data.summary, 'text/html');
        const updatedSummary = htmlDoc.body.textContent; // Remove <p><b></p></b> tags


        setShow({ ...response.data, summary: updatedSummary });
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);


  if (!show) {
    return <div>Loading...</div>;
  }
    
  return (
    <div className='container1'>
      <h1 className='title1'>{show.name}</h1>
      <h1 className='title'>{show.language}</h1>
      <h1 className='title'>{show.genres}</h1>
      <p className='summary'>{show.summary}</p>
      <div className='button-container'>
      {/* <button className='button2' onClick={handleBookTicket}>Book Ticket</button> */}
      <Link  className='button2'  to="/booking">Book Ticket</Link>
      <Link  className='back-link'to="/">Back to List</Link>
      
      </div>
    </div>
  );
}

export default ShowDetails;
