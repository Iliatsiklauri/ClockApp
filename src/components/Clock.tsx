import { useEffect, useState } from 'react';
import axios from 'axios';
import './clock.css';

type ApiResponse = {
  timezone: string;
  datetime: string;
};

type propType = {
  func: Function;
  display: boolean;
};
const Clock = ({ func, display }: propType) => {
  const [timezone, setTimezone] = useState<string>('');
  const [datetime, setDatetime] = useState<string>('');
  useEffect(() => {
    axios.get<ApiResponse>('http://worldtimeapi.org/api/ip').then((res) => {
      setTimezone(res.data.timezone);
      setDatetime(res.data.datetime);
    });
  }, []);
  return (
    <div className={`clock flex flex-col gap-4 ${display ? null : 'marg'}`}>
      <div>
        {func() ? (
          <div className="greet flex gap-4">
            <img src="/public/Path (1).png" alt="" />
            <p className="greeting">Good Night</p>
          </div>
        ) : (
          <div className="greet flex gap-4">
            <img src="/public/Combined Shape 1.png" alt="" />
            <p className="greeting">Good Morning, it's currently</p>
          </div>
        )}
      </div>
      <p className="HHMM">{datetime.slice(11, 16)}</p>
      <p className="location">in {timezone}</p>
    </div>
  );
};

export default Clock;
