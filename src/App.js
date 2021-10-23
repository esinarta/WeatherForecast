import './App.css';
import useForecast from './hooks/useForecast';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadingMessage from './components/LoadingMessage/LoadingMessage';
import Forecast from './components/Forecast/Forecast';
import { VANCOUVER } from './constants'

function App() {
  const { forecast, loading, error } = useForecast(VANCOUVER);

  return (
    <div className="App">
      <h1>Vancouver 7-Day Forecast</h1>
      {loading ? <LoadingMessage /> : null}
      {error ? <ErrorMessage /> : null}
      <div className="forecast">
        {forecast && !error ? <Forecast forecast={forecast} /> : null}
      </div>
    </div>
  );
};

export default App;
