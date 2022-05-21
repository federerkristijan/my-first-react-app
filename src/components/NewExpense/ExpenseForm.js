import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //v1. "individual-state slices" - repetative but clearer
  const [enteredTitle, setEnteredTitle] = useState("");
  // a value of an element is always a string, even in the value is a number
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //v2. "one-state approach" - can be messy, would advice not to
  //const [userInput, setUserInput] = useState({
  //enteredTitle: "",
  //enteredAmount: "",
  //enteredDate: "",
  //})

  const titleChangeHandler = (event) => {
    // v.1
    setEnteredTitle(event.target.value);

    //v.2 - bad practice
    //setUserInput({
    // takes amount and date key values (all values), not to lose other data
    //...userInput,
    // overwritting existing title value, when updating
    //enteredTitle: event.target.value,

    //v.3 - cleaner and "logical-error" correct code: always use when the state depends on the previous state
    // with the most recent updated state snap-shot
    //setUserInput((userInput) => {
    //return { ...userInput, enteredTitle: event.target.value };
    //});
  };

  // if there´s just 1 argument, we can omit the brackets
  const amountChangerHandler = (event) => {
    //v.1
    setEnteredAmount(event.target.value);

    //v.2
    //setUserInput({
    //...userInput,
    //enteredAmount: event.target.value,
    //})
  };

  const dateChangerHandler = (event) => {
    //v.1
    setEnteredDate(event.target.value);
    //console.log(setEnteredDate)

    //v.2
    //setUserInput({
    //...userInput,
    //enteredDate: event.target.value,
    //})
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* if there´s no content, it should be self-closing tag! */}
          <input
            type="text"
            //2-way binding, through the value and onChange - to gather & change the UserInput
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangerHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2025-01-01"
            value={setEnteredDate}
            onChange={dateChangerHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
