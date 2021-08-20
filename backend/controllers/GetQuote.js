const Quote = require("../models/quote.model");

exports.getQuote =  async (req, res, next) => {
  Quote.countDocuments().exec(function (err, count) {

    let random = Math.floor(Math.random() * count)

    Quote.findOne().skip(random).exec(
      function (err, result) {
        console.log(result.quote) 
        res.json(result.quote);
      })
  })

};