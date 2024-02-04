import { useState } from 'react';
import axios from 'axios';
import './quote.css';

type ApiType = {
  text: string;
  author: string;
};
type propType = {
  display: boolean;
};
const obj = {
  text: '"Slowly is the fastest way to success. Every measured step forward builds a foundation for lasting achievement."',
  author: 'ilia tsiklauri',
};

const Quote = ({ display }: propType) => {
  const [quote, setQuote] = useState<ApiType | null>(obj);

  const fetchData = () => {
    axios.get<ApiType[]>('https://type.fit/api/quotes').then((res) => {
      const randomIndex = Math.floor(Math.random() * res.data.length);
      setQuote(res.data[randomIndex]);
    });
  };

  return (
    <div className={`quote-wrapper ${display ? null : 'hiddden'}`}>
      <span
        onClick={fetchData}
        className={`spann rotate-span absolute right-0 cursor-pointer`}
      >
        <img src="Combined Shape.png" alt="" />
      </span>
      {quote && (
        <>
          <p className="quote">{quote.text}</p>
          <p className="author">{quote.author.replace(/, type\.fit$/, '')}</p>
        </>
      )}
    </div>
  );
};

export default Quote;
