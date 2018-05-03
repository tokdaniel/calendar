import React from 'react';
import { Redirect } from 'react-router-dom';
import getYear from 'date-fns/get_year';
import getMonth from 'date-fns/get_month';

const Today = () => {

  const today = new Date();

  return <Redirect to={ `/${getYear(today)}/${getMonth(today) + 1}` }/>;
};

export default Today;

