import React, { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {
  useState();

  let priceDefault = 100;
  const [price, setPrice] = React.useState(priceDefault);
  const discountHandle = () => {
    setPrice(75);
  }

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <p className="expense-item__price">{props.amount}$</p>
        </div>
        <button onClick={discountHandle}>Click</button>
      </Card>
    </li>
  );
}

export default ExpenseItem;
