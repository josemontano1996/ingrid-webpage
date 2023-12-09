import { apiTrial } from '@/database/cached/dbProducts';
import React from 'react';

const OrdersPage = () => {
  const number = apiTrial();

  return <div>{number}</div>;
};

export default OrdersPage;
