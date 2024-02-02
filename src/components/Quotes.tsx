import { useEffect, useState } from 'react';
import './quotes.css';
const Quotes = () => {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    setText(
      '“The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”'
    );
    setAuthor('ilia tsiklauri');
  });
  return (
    <div className="relative">
      <p className="quote">{text}</p>
      <p className="author">{author}</p>
      <img src="public\Combined Shape.png" className="changeQuote" alt="" />
    </div>
  );
};

export default Quotes;
