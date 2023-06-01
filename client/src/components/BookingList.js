import React from 'react'
import { deleteBooking, updateBooking } from '../BookingService'


const BookingList = ({bookings, removeBooking, setBookings}) => {


  const handleDelete = (booking) => {
    deleteBooking(booking._id).then(() => {
      removeBooking(booking._id)
    })
  }

  const handleUpdate = (booking) => {
    const payload = {checkedIn: !booking.checkedIn}
    updateBooking(payload, booking._id)
    const bookingToChange = bookings.find((existingBooking) => {
      return existingBooking._id === booking._id
    })
    const copyOfBookingToChange = {... bookingToChange}
    copyOfBookingToChange.checkedIn = !copyOfBookingToChange.checkedIn

    const newBookings = bookings.filter((existingBooking) => {
      return existingBooking._id !== booking._id
    })
    const allNewBookings = [...newBookings, copyOfBookingToChange]
    setBookings(allNewBookings)
  }

  const bookingElements = bookings.map((booking) => {
    return (
      <li className='list-item' key={booking._id}>
        <p>{booking.name}</p>
        <p>{booking.email}</p>
        {booking.checkedIn ? <button onClick={() => handleUpdate(booking)} className="red">Check Out</button> : <button onClick={() => handleUpdate(booking)} className="green">Check In</button>}
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