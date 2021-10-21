import './WeatherCard.css';

const WeatherCard = ({ day, index }) => {
  return (
    <div className={`card-container ${index === 0 ? "current-day" : ""}`}>
      <p>{day.date}</p>
      <img src={day.weatherIconUrl} alt={day.weatherDesc}/>
      <div className='temperature'>
        <p>H: {day.maxTemp}&deg;</p>
        <p>L: {day.minTemp}&deg;</p>
      </div>
    </div>
  )
};

export default WeatherCard;