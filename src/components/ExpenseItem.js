import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>29th February 2022</div>
      <div className="expense-item__description">
        <h2>Cat Insurance</h2>
        <div className="expense-item__price">10,50€</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
