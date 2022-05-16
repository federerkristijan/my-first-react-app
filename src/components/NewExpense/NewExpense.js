import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

// same as function() {};
const NewExpense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
