import React, { useState,useEffect} from 'react';
import './book.css';

import axios from 'axios';
function TicketBookingForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [show, setShows] = useState([]);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then(response => {
        setShows(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    
  };

  const handleSubmit = event => {
    event.preventDefault();

    localStorage.setItem('formData', JSON.stringify(formData));
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container5">
      
     
      <form onSubmit={handleSubmit}>
  
        <div className="form-group">

        <h1>Book ticket for show {show.name}</h1>
        {/* <h1>Schedule{show.schedule.time}</h1> */}
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
        </div>
        <button type="submit" className="btn btn-primary">Book Ticket</button>
     
      </form>
  
    </div>
  );
}

export default TicketBookingForm;
