import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../constants';
import axios from 'axios';

const lat = 49.2827;
const lon = -123.1207;
const exclude = 'current,minutely,hourly,alerts';
const units = 'metric';

const useForecast = () => {
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}lat=${lat}&lon=${lon}&exclude=${exclude}&units=${units}&appid=${API_KEY}`)
    .then((res) => {
      setForecast(res.data.daily);
      setLoading(false);
    })
    .catch((err) => {
      setError(err);
      setLoading(false);
    })
  },[])

  return { forecast, loading, error };
}

export default useForecast;