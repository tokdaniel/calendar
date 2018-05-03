import React from 'react';
import classNames from 'classnames';
import format from 'date-fns/format';
import { getDayNames } from 'utility/helpers';

import './DayNames.scss';

const DayNames = () => (
  <div className="day-names">
    {
      getDayNames()
        .map(dayName => (
          <span
            className={
              classNames(
                'day-name',
                { today: dayName === format(new Date(), 'dddd') }
              ) }
            key={ dayName }>
            { dayName }
          </span>
        ))
    }
  </div>
);

export default DayNames;
