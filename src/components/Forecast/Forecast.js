import WeatherCard from '../WeatherCard/WeatherCard';
const Forecast = ({ forecast }) => {
  return (
    <div>
      {forecast.map((day, index) => {
        console.log(day);
        return <WeatherCard key={day.id} day={day} index={index}/>
      })}
    </div>
  )
};

export default Forecast;