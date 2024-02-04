import { useState, useEffect } from 'react';
import { useWorldTimeApiHidden, ApiResponseHidden } from './api';
import './hidden.css';

type prop = {
  func: Function;
  display: boolean;
};

const Hidden = ({ func, display }: prop) => {
  const [dayOfWeek, setDayOfWeek] = useState<number>(0);
  const [dayOfYear, setDayOfYear] = useState<number>(0);
  const [weekNumber, setWeekNumber] = useState<number>(0);
  const [timezone, setTimezone] = useState<string>('');

  useEffect(() => {
    useWorldTimeApiHidden().then((res: { data: ApiResponseHidden }) => {
      setDayOfWeek(res.data.day_of_week);
      setDayOfYear(res.data.day_of_year);
      setWeekNumber(res.data.week_number);
      setTimezone(res.data.timezone);
    });
  }, []);

  return (
    <div
      className={`details-wrapper ${display ? 'btm' : 'notbtm'} ${
        func() ? 'nightmode' : 'daymode'
      }`}
    >
      <div className="line"></div>
      <div className="details-box">
        <div className="firstwrap">
          <div className="first flex">
            <p>CURRENT TIMEZONE</p>
            <h1>{timezone}</h1>
          </div>
          <div className="second flex">
            <p>Day of the year</p>
            <h1>{dayOfYear}</h1>
          </div>
        </div>
        <div className="secondwrap">
          <div className="third flex">
            <p>Day of the week</p>
            <h1>{dayOfWeek}</h1>
          </div>
          <div className="forth flex">
            <p>Week number</p>
            <h1>{weekNumber}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hidden;
