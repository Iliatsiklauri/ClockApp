import { useEffect, useState } from 'react';

const Time = () => {
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    setTime('11:37');
    setLocation('IN LONDON, UK');
  });
  return (
    <div className="date-time">
      <div>
        <img src="public\Combined Shape 1.png" alt="" />
        <p></p>
      </div>
      <h2>{time}</h2>
      <h3>{location}</h3>
      <p className="BST">BST</p>
    </div>
  );
};

export default Time;
