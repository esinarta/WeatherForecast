import './App.css';
import useForecast from './hooks/useForecast';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadingMessage from './components/LoadingMessage/LoadingMessage';
import Forecast from './components/Forecast/Forecast';

function App() {
  const { forecast, loading, error } = useForecast();
  console.log(forecast);

  return (
    <div className="App">
      {loading ? <LoadingMessage /> : null}
      {error ? <ErrorMessage /> : null}
      {forecast && !error ? <Forecast forecast={forecast} /> : null}
    </div>
  );
};

export default App;
