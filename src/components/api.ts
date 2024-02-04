import axios from 'axios';

export type ApiResponseClock = {
  timezone: string;
  datetime: string;
};

export type ApiResponseHidden = {
  day_of_week: number;
  day_of_year: number;
  week_number: number;
  timezone: string;
};

export const useWorldTimeApiClock = () => {
  return axios.get<ApiResponseClock>('https://worldtimeapi.org/api/ip');
};

export const useWorldTimeApiHidden = () => {
  return axios.get<ApiResponseHidden>('https://worldtimeapi.org/api/ip', {});
};
