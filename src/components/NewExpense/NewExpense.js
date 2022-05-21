import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

// same as function() {};
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }

    // lifting the state up to App.js
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
    <button>Add New Expense</button>
      {/* lifting the state up from ExpenseForm to NewExpense */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
