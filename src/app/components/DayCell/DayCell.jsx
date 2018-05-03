import React from 'react';
import PropTypes from 'prop-types';
import getDate from 'date-fns/get_date';
import classNames from 'classnames';
import isToday from 'date-fns/is_today';
import isWeekend from 'date-fns/is_weekend';
import { isLastWeekOfMonth } from 'utility/helpers';

import './DayCell.scss';

const DayCell = ({ date, empty }) => (
  <div
    className={
      classNames(
        'day-cell',
        {
          empty,
          today: isToday(date),
          weekend: isWeekend(date),
          'last-week': isLastWeekOfMonth(date)
        }
      ) }>
    { empty ? '' : getDate(date) }
  </div>
);

DayCell.defaultProps = {
  date: null,
  empty: false
};

DayCell.propTypes = {
  date: PropTypes.object,
  empty: PropTypes.bool
};

export default DayCell;
