import { useEffect, useState } from 'react';
import './App.css';
import { getTotalCounts, getAllCountries } from './api';
import Cards from './components/Cards/Cards';
import ParticleOverlay from './components/ParticleOverlay/Particles';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import SearchBox from './components/SearchBox/SearchBox';

const App = () => {
  const [currentCountry, setCurrentCountry] = useState(null);
  const [data, setData] = useState({});
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('countries') !== null)
      getAllCountries().then((countries) =>
        localStorage.setItem('countries', JSON.stringify(countries))
      );

    setCountries(JSON.parse(localStorage.getItem('countries')));
    getTotalCounts(currentCountry === null ? null : currentCountry).then(
      (data) => {
        setData(data);
        setLoading(false);
      }
    );
  }, []);

  return (
    <>
      <ParticleOverlay />
      <CssBaseline currentCountry={currentCountry} />
      <Container size="md">
        <div id="title-container">
          <Typography variant="h1">Covid-19</Typography>
          <Typography variant="h4">
            A real-time Coronavirus stats tracker.
          </Typography>
        </div>
        <Typography
          variant="h5"
          style={{
            textAlign: 'center',
            paddingBottom: '1rem',
            fontFamily: 'Reggae One',
            color: 'black',
          }}
        >
          {currentCountry === null ? 'Global' : currentCountry}
        </Typography>
        {loading ? (
          <div>Loading</div>
        ) : (
          <>
            <Cards data={data} />
            <SearchBox
              countries={countries}
              setCurrentCountry={setCurrentCountry}
              setData={setData}
            />
          </>
        )}
      </Container>
    </>
  );
};

export default App;
