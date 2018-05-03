import React from 'react'; // eslint-disable-line no-unused-vars
import Loadable from 'react-loadable';
import Loading from './Loading/Loading';

/*
 ----- COMMON COMPONENTS -----
 */

export { default as Loading } from './Loading/Loading';

export const MonthlyCalendar = Loadable({
  loader: () => import('./MonthlyCalendar/MonthlyCalendar'),
  loading: Loading
});

export { default as DayCell } from './DayCell/DayCell';
export { default as DayNames } from './DayNames/DayNames';
export { default as WeekIndices } from './WeekIndices/WeekIndices';
export { default as WeekInset } from './WeekInset/WeekInset';
