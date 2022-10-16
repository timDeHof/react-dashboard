import React, { useState, useEffect } from "react";
import "./quote.styles.css";

const Quote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  useEffect(() => {
    const fetchQuote = async () => {
      const reponse = await fetch("https://api.goprogram.ai/inspiration");
      const data = await reponse.json();
      setQuote(data.quote);
      setAuthor(data.author);
    };
    fetchQuote();
  }, []);

  return (
    <p className='quote'>
      {quote} - {author}
    </p>
  );
};

export default Quote;
