import { useState, useEffect } from 'react';
import { API_KEY, API_URL, ICON_URL } from '../constants';
import axios from 'axios';

const useForecast = (city) => {
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getForecast = async () => {
      try {
        const res = await axios.get(`${API_URL}lat=${city.lat}&lon=${city.lon}`
        + `&exclude=current,minutely,hourly,alerts`
        + `&units=metric&appid=${API_KEY}`);

        const days = res.data.daily.map((day) => {
          return {
            id: new Date(day.dt * 1000).getTime(),
            date: new Date(day.dt * 1000).toLocaleDateString('en-US', {
              weekday: 'short',
              month: 'short',
              day: 'numeric',
            }),
            maxTemp: Math.round(day.temp.max),
            minTemp: Math.round(day.temp.min),
            weatherDesc: day.weather[0].description,
            weatherIconUrl: `${ICON_URL}${day.weather[0].icon}@2x.png`
          }
        });

        setForecast(days);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }
    getForecast();
  }, [city.lat, city.lon]);

  return { forecast, loading, error };
}

export default useForecast;