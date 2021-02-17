import React from 'react';
import CountUp from 'react-countup';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

export default function CardComponent({
  cardTitle,
  value,
  lastUpdate,
  cardSubtitle,
  className,
}) {
  return (
    <Grid
      item
      xs={12}
      md={3}
      component={Card}
      className={className}
      style={{ margin: '0.75rem' }}
    >
      <CardContent style={{ margin: '0 5%', textAlign: 'left' }}>
        <Typography color="textSecondary" gutterBottom>
          {cardTitle}
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          <CountUp start={0} end={value} duration={2.75} separator="," />
        </Typography>
        <Typography color="textSecondary">
          {new Date(lastUpdate).toDateString()}
        </Typography>
        <Typography variant="body2" component="p">
          {cardSubtitle}
        </Typography>
      </CardContent>
    </Grid>
  );
}
