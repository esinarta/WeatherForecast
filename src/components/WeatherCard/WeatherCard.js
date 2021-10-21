const WeatherCard = ({ day, index }) => {
  return (
    <div className={`${index === 0 ? "firstDay" : ""}`}>
      <p>{day.date}</p>
      <img src={day.weatherIconUrl} alt={day.weatherDesc}/>
      <p>{day.minTemp}&deg;</p>
      <p>{day.maxTemp}&deg;</p>
    </div>
  )
};

export default WeatherCard;