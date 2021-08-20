import { useState, useEffect } from 'react';

function Quote() {
  const [quote, setQuote] = useState("");

  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8000/api/quote')
      .then(res => res.json())
      .then(
        (result) => {
          setQuote(result);
          setIsLoaded(true);
        },

        (error) => {
          setError(true);
          setIsLoaded(true);
        }
      )
  }, [])

  return (
    <div>
      <p className="quote">
        {quote}
      </p>
    </div>
  )
}

export default Quote;