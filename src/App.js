import './App.css';
import useForecast from './hooks/useForecast';

function App() {
  const { forecast, loading, error } = useForecast();
  console.log(forecast);
  return (
    <div className="App">

    </div>
  );
}

export default App;
