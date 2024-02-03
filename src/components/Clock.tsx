import { useEffect, useState } from 'react';
import axios from 'axios';
import './clock.css';

type ApiResponse = {
  timezone: string;
  datetime: string;
};

type propType = {
  func: Function;
};
const Clock = ({ func }: propType) => {
  const [timezone, setTimezone] = useState<string>('');
  const [datetime, setDatetime] = useState<string>('');
  useEffect(() => {
    axios.get<ApiResponse>('http://worldtimeapi.org/api/ip').then((res) => {
      setTimezone(res.data.timezone);
      setDatetime(res.data.datetime);
    });
  }, []);
  return (
    <div className="clock flex flex-col gap-4">
      <div>
        {func() ? (
          <div className="flex gap-4">
            <img src="/public/Path (1).png" alt="" />
            <p className="greeting">Good Night</p>
          </div>
        ) : (
          <div className="flex gap-4">
            <img src="/public/Combined Shape 1.png" alt="" />
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
