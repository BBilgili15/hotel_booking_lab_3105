import React from 'react'
import { deleteBooking, updateBooking } from '../BookingService'


const BookingList = ({bookings, removeBooking, setBookings}) => {

  const handleDelete = (booking) => {
    deleteBooking(booking._id).then(() => {
      removeBooking(booking._id)
    })
  }

  const handleUpdate = (booking) => {
    const payload = {checkedIn: true}
    updateBooking(payload, booking._id)
    // find the booking we want to update 
    // make a copy of it
    // make a copy of the array of bookings 
    // remove and replace the booking to be updated
    const newBookings = [...bookings]
    // then set the new state with the nnew array
    setBookings(bookings)
    // .then(() => {
    //   setBookings() //add new bookings
    // })
  }

  const bookingElements = bookings.map((booking) => {
    return (
      <li className='list-item' key={booking._id}>
        <p>{booking.name}</p>
        <p>{booking.email}</p>
        {booking.checkedIn ? <p>Checked in</p> : <button onClick={() => handleUpdate(booking)}>Check In</button>}
        <button onClick={() => handleDelete(booking)}>Delete Booking</button>
      </li>
    )
  })

  return (
    <ul className='list-container'>
      {bookingElements}
    </ul>
  );
}

export default BookingList