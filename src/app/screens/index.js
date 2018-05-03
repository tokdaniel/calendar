import Loadable from 'react-loadable';
import { Loading } from 'components';

export const Home = Loadable({
  loader: () => import('./Home/Home'),
  loading: Loading
});
