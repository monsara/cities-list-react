import { useState } from 'react';

import City from './components/City';
import CitiesList from './components/CitiesList';

import './App.css';

const styles = {
  container: {
    width: '100%',
    maxWidth: 1200,
    margin: '0 auto',
  },
};

function App() {
  const [cities, setSities] = useState([
    { name: 'Киев', description: 'Столица Украины' },
    { name: 'Харьков', description: 'Первоя столица Украины' },
  ]);
  const [activeCityIdx, setActiveCityIdx] = useState(0);
  const city = cities[activeCityIdx];

  const handleChangeCity = description => {
    setSities(
      cities.map((city, index) =>
        index === activeCityIdx ? { ...city, description } : city,
      ),
    );
  };

  const handleSelectCity = index => {
    setActiveCityIdx(index);
  };

  return (
    <div className="App" style={styles.container}>
      <City city={city} onChange={handleChangeCity} />
      <CitiesList cities={cities} onSelect={handleSelectCity} />
    </div>
  );
}

export default App;
