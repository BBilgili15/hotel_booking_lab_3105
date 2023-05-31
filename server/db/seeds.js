use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Bukayo Saka",
    email: "bsaka@gmail.com",
    checkedIn: true
  }, 
  {
    name: "Ewan McGregor",
    email: "ewan@hotmail.com",
    checkedIn: false
  }
])

