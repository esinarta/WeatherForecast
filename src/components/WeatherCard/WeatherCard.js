import './WeatherCard.css';

const WeatherCard = ({ day }) => {
  return (
    <div className='card-container'>
      <p>{day.date}</p>
      <img src={day.weatherIconUrl} alt={day.weatherDesc}/>
      <div className='temperature'>
        <p>H: {day.maxTemp}&deg;</p>
        <p>L: {day.minTemp}&deg;</p>
      </div>
    </div>
  )
}

export default WeatherCard;