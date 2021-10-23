import WeatherCard from '../WeatherCard/WeatherCard';
import './Forecast.css';

const Forecast = ({ forecast }) => {
  return (
    <div className='forecast-container'>
      {forecast.map((day, index) => {
        return <WeatherCard key={day.id} day={day} index={index}/>
      })}
    </div>
  )
};

export default Forecast;