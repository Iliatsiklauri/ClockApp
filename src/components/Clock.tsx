import { useState, useEffect } from 'react';
import { useWorldTimeApiClock, ApiResponseClock } from './api';
import './clock.css';

type propType = {
  func: Function;
  display: boolean;
};

const Clock = ({ func, display }: propType) => {
  const [timezone, setTimezone] = useState<string>('');
  const [datetime, setDatetime] = useState<string>('');

  useEffect(() => {
    useWorldTimeApiClock().then((res: { data: ApiResponseClock }) => {
      setTimezone(res.data.timezone);
      setDatetime(res.data.datetime);
    });
  }, []);

  return (
    <div className={`clock flex flex-col gap-4 ${display ? null : 'marg'}`}>
      <div>
        {func() ? (
          <div className="greet flex gap-4">
            <img src="Path (1).png" alt="" />
            <p className="greeting">Good evening</p>
          </div>
        ) : (
          <div className="greet flex gap-4">
            <img src="Combined Shape 1.png" alt="" />
            <p className="greeting">Good Morning</p>
          </div>
        )}
      </div>
      <p className="HHMM">{datetime.slice(11, 16)}</p>
      <p className="location">in {timezone}</p>
    </div>
  );
};

export default Clock;
