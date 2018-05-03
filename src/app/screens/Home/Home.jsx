import React from 'react';
import PropTypes from 'prop-types';
import { MonthlyCalendar } from 'components';
import enhance from './enhance.js';


const Home = ({ classes, year, month }) => (
  <div className={ classes.homeScreen }>
    <MonthlyCalendar year={ year } month={ month }/>
  </div>
);

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired
};

export default enhance(Home);
