import { withProps } from 'recompose';
import { getIntsUntil } from 'utility/helpers';

// Date-FNS helpers
import getDaysInMonth from 'date-fns/get_days_in_month';
import format from 'date-fns/format';


const calculateProps = ({ year, month }) => {
  const date = new Date(year, month);

  const datesInMonth =
    getIntsUntil(getDaysInMonth(date))
      .map(n => new Date(year, month, n));

  return {
    year,
    month,
    monthName: format(date, 'MMMM'),
    datesInMonth
  };
};

export default withProps(calculateProps);
