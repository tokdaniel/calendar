import React from 'react';
import { CircularProgress } from 'material-ui/Progress';
import './Loading.scss';

export default () => (
  <div className="loading-container">
    <CircularProgress style={ { width: '100px' } } thickness={ 5 }/>
  </div>
);
