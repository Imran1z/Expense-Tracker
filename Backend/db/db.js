const mongoose = require('mongoose');

function connectToMongoDB() {
  // MongoDB connection URI
  const mongoURI = 'mongodb+srv://shaikhzimran12334:imran12334@cluster0.ichrqoe.mongodb.net/?retryWrites=true&w=majority';

  // Connect to MongoDB
  return mongoose.connect(mongoURI)
    .then(() => {
      console.log('MongoDB Connected');
    })
    .catch(err => {
      console.error('MongoDB Connection Error:', err);
      throw err; // Rethrow the error to be caught by the caller
    });
}

module.exports = connectToMongoDB;
