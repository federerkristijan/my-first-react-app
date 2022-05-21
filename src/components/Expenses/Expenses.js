import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = props => {
  // destructuring array with [0] as original varibale value (description of the variable) and [1] as all the next ones
  const [filteredYear, setFilteredYear] = useState("2020"); // react hook

  // calling the updated function, whenever the state would change (setFilteredYear)
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  // boolean filters the year filter
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses.map(expenses => (
          <ExpenseItem
            key={expenses.id}
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
