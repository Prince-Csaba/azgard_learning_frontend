const fs = require('fs');
const Quotes = require("../models/quote.model");

exports.fillQuotes =  async (req, res) => {
  let data;
  try {
    data = JSON.parse(fs.readFileSync('./Data/Quotes/quotes.json', 'utf8'));
  
    data.forEach(async e => {
      await Quotes.findOneAndUpdate(e, {quote: e.quote}, {
        new: true,
        upsert: true
      });
    });
  } catch (err) {
    console.error(err)
  }
  if (res) res.status(200).json({data: "Quotes Set"})
}