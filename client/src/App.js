import './App.css';
import BookingForm from './components/BookingForm';
import BookingList from './components/BookingList';
import React, {useState, useEffect} from 'react'
import { getBookings } from './BookingService';

function App() {

  const [bookings, setBookings] = useState([])

  useEffect(() => {
    getBookings().then((allBookings) => {
      setBookings(allBookings)
    })
  }, [])

  const addBooking = (booking) => {
    setBookings([...bookings, booking])
  }

  const removeBooking = (id) => {
    const bookingsToKeep = bookings.filter(booking => booking._id !== id)
    setBookings(bookingsToKeep)
  }

  return (
    <div className="App">
    <BookingForm addBooking={addBooking}/>
    <BookingList bookings={bookings} removeBooking={removeBooking} setBookings={setBookings}/>
    </div>
  );
}

export default App;
