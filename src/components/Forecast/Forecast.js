import WeatherCard from '../WeatherCard/WeatherCard';
import './Forecast.css';

const Forecast = ({ forecast }) => {
  return (
    <div className='forecast-container'>
      {forecast.map((day) => {
        return <WeatherCard key={day.id} day={day} />
      })}
    </div>
  )
};

export default Forecast;