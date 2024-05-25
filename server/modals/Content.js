// models/ContentSchema.js
const mongoose = require("mongoose");

const ContentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  massages: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Content", ContentSchema);
