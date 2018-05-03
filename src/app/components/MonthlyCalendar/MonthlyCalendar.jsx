import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { DayCell, DayNames, WeekIndices, WeekInset } from 'components';
import { getPrevMonth, getNextMonth } from 'utility/helpers';
import Button from 'material-ui/IconButton';
import ChevronLeft from 'material-ui-icons/ChevronLeft';
import ChevronRight from 'material-ui-icons/ChevronRight';

import enhance from './enhance';
import styles from './styles';
import './MonthlyCalendar.scss';

export const MonthlyCalendar = ({ year, month, datesInMonth, monthName }) => {

  return (
    <div className="monthly-calendar">
      <header>
        <div className="month-info">
          <Button
            style={ styles.leftButton }
            component={ Link }
            to={ `/${month === 0 ? year - 1 : year}/${getPrevMonth(month)}` }>
            <ChevronLeft style={ styles.icon }/>
          </Button>
          <span className="year">{ year },</span>
          <span className="month-name">{ monthName }</span>
          <Button
            style={ styles.rightButton }
            component={ Link }
            to={ `/${month === 11 ? year + 1 : year}/${getNextMonth(month)}` }>
            <ChevronRight style={ styles.icon }/>
          </Button>
        </div>
        <DayNames/>
      </header>
      <div className="calendar-body">
        <WeekIndices year={ year } month={ month }/>
        <div className="days-container">
          <WeekInset year={ year } month={ month }/>
          { datesInMonth.map(day => (
            <DayCell key={ day.toString() } date={ day }/>
          ))
          }
        </div>
      </div>
    </div>
  );
};

MonthlyCalendar.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  monthName: PropTypes.string.isRequired,
  datesInMonth: PropTypes.array.isRequired
};

export default enhance(MonthlyCalendar);
