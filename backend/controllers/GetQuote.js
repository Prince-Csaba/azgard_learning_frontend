const Quote = require("../models/quote.model");

exports.getQuote =  async (req, res) => {
  Quote.countDocuments().exec(function (err, count) {
    if (count === 0) {
      return res.status(404).json({error: "No db entry"})
    }
    let random = Math.floor(Math.random() * count)

    Quote.findOne().skip(random).exec(
      function (err, result) {
//        console.log(result.quote) 
        res.status(200).json(result.quote);
      })
  })
};