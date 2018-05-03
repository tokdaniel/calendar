import getEndOfMonth from 'date-fns/end_of_month';
import getISOWeek from 'date-fns/get_iso_week';
import eachDay from 'date-fns/each_day';
import getEndOfWeek from 'date-fns/end_of_week';
import getStartOfWeek from 'date-fns/start_of_week';
import differenceInWeeks from 'date-fns/difference_in_weeks';
import getDay from 'date-fns/get_iso_day';
import format from 'date-fns/format';

export const getIntsUntil = n =>
  Array.from(Array(n).keys())
    .map(number => ++number); // eslint-disable-line no-param-reassign

export const getWeekIndices = (year, month) => {
  const monthStart = new Date(year, month);
  const monthEnd = getEndOfMonth(monthStart);

  const weekIndices =
    eachDay(monthStart, monthEnd, 7)
      .map(day => getISOWeek(day));

  return weekIndices;
};

export const getDayNames = () => {

  const now = new Date();
  const weekOptions = { weekStartsOn: 1 };

  return eachDay(
    getStartOfWeek(now, weekOptions),
    getEndOfWeek(now, weekOptions)
  ).reduce((acc, day) => {
    acc.push(format(day, 'dddd'));
    return acc;
  }, []);
};

export const getWeekInset = startOfMonth => {
  const startDayOfWeek = getDay(startOfMonth);

  return Array.from(Array(startDayOfWeek).keys())
    .filter(inset => inset !== 0);
};

export const isLastWeekOfMonth = date => differenceInWeeks(date, getEndOfMonth(date)) === 0;

export const getNextMonth = month => {

  if (month + 2 > 12) {
    return (month + 2) % 12;
  }

  return month + 2;

};

export const getPrevMonth = month => {

  if (month < 1) {
    return 12;
  }

  return month;
};
