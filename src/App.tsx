import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Clock from './components/Clock';
import Quote from './components/Quote';
import Hidden from './components/Hidden';

const App = () => {
  const [display, setDisplay] = useState(true);
  const isNightTime = () => {
    const currentHour = new Date().getHours();
    return currentHour >= 19 || currentHour < 7;
  };
  return (
    <div className={`wrapper ${isNightTime() ? 'night' : 'day'}`}>
      <Quote display={display} />
      <Clock func={isNightTime} display={display} />
      <Button setDisplay={setDisplay} display={display} />
      <Hidden display={display} func={isNightTime} />
    </div>
  );
};

export default App;
