import React, {useState} from 'react'
import { postBooking } from '../BookingService';
// import styled from 'styled-components'
// import { Link } from 'react-router-dom';

const BookingForm = ({addBooking}) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkedIn: false,
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    postBooking(formData).then((data) => {
      addBooking(data)
    })
    setFormData({
      name: '',
      email: '',
      checkedIn: false,
    })
  }

  const handleChange = (event) => {
    const newFormData = Object.assign({}, formData)
    newFormData[event.target.name] = event.target.value
    setFormData(newFormData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={formData.name} required type='text' id='name' name='name' placeholder='Enter Customer Name..' />
      <input onChange={handleChange} value={formData.email} required type='text' id='email' name='email' placeholder='Enter Customer Email..' />
      <select onChange={handleChange} value={formData.checkedIn} type='text' id='checkedIn' name='checkedIn' placeholder='Enter Customer Name..'>
        <option value='true'>Checked In</option>
        <option value='false'>Not Checked In</option>
      </select>
      <button type='submit' value='save' id='save'>Submit</button>
    </form>
  );
}

export default BookingForm