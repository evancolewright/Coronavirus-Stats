import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '../Card/Card';

import './Cards.css';

export default function Cards({ data }) {
  React.useEffect(() => {});
  return (
    <Grid container spacing={3} justify="center">
      <Card
        cardTitle="Infected 🩸"
        value={data.confirmed}
        lastUpdate={data.lastUpdate}
        cardSubtitle="Amount of people that have been infected by Coronavirus."
        className="infected"
      />
      <Card
        cardTitle="Deaths ☠"
        value={data.deaths}
        lastUpdate={data.lastUpdate}
        cardSubtitle="Amount of people that have died from Coronavirus."
        className="deaths"
      />
      <Card
        cardTitle="Recovered ✔"
        value={data.recovered}
        lastUpdate={data.lastUpdate}
        cardSubtitle="Amount of people that have recovered from Coronavirus."
        className="recovered"
      />
    </Grid>
  );
}
