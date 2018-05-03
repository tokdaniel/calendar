import React from 'react';
import { getWeekIndices } from 'utility/helpers';
import classNames from 'classnames'
import getISOWeek from 'date-fns/get_iso_week';
import PropTypes from 'prop-types';

import './WeekIndices.scss';

const WeekIndices = ({ year, month }) => (
  <aside className="week-indices">
    {
      getWeekIndices(year, month)
        .map(index => (
          <div
            className={
              classNames(
                'index',
                {
                  'this-week': getISOWeek(new Date()) === index
                }
              )
            }
            key={ index }>
            { index }
          </div>
        ))
    }
  </aside>
);

WeekIndices.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired
};

export default WeekIndices;
