const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema({
  nr: {
    type: Number
  },
  quote: {
    type: String,
    required: true,
  },
});

const Quote = mongoose.model("Quote", quoteSchema, "motivational_quotes");

module.exports = Quote;