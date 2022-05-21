import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

// same as function() {};
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState();

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }

    // lifting the state up to App.js
    props.onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(true)
  };

  return (
    <div className="new-expense">
      {!isEditing &&  <button onClick={startEditingHandler}>Add New Expense</button>}
      {/* lifting the state up from ExpenseForm to NewExpense */}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );
};

export default NewExpense;
