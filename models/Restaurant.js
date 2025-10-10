const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  cuisine: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  city: {
    type: String
  },  
  rating: {
    type: Number
  },
  price_range: {
    type: String
  }
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);