
const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost:27017/Restaurant';

mongoose.connect(dbURI, 
  { useNewUrlParser: true, 
    useUnifiedTopology: true 
  })
  .then(() => console.log('db connected successfully..'))
  .catch(err => console.error('Error connecting to database:', err));

module.exports = mongoose.connection;
