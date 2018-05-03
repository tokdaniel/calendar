import React from 'react';
import PropTypes from 'prop-types';
import { DayCell } from 'components';
import { getWeekInset } from 'utility/helpers';

const WeekInset = ({ year, month }) =>
  getWeekInset(new Date(year, month)).map(inset => <DayCell empty key={ inset }/>);

DayCell.propTypes = {
  date: PropTypes.object,
  empty: PropTypes.bool
};

export default WeekInset;
