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
      {/* lifting he state up from ExpenseForm to NewExpense */}
      <ExpenseForm onSAveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
