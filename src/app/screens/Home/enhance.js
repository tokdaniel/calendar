import { withStyles } from 'material-ui';
import { compose, withProps } from 'recompose';
import styles from './styles';

const getDisplayedDate = ({ match }) => {

  const { year, month, day } = match.params;

  return {
    year: parseInt(year, 10),
    month: parseInt(month, 10) - 1,
    day: parseInt(day, 10)
  };
};

export default compose(
  withStyles(styles),
  withProps(getDisplayedDate)
);
