import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  // a value of an element is always a string, even in the value is a number
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  // if there´s just 1 argument, we can omit the brackets
  const amountChangerHandler = event => {
    setEnteredAmount(event.target.value);
  }

  const dateChangerHandler = event => {
    setEnteredDate(event.targer.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* if there´s no content, it should be self-closing tag! */}
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangerHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="1900-01-01" max="2100-01-01" onChange={dateChangerHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
