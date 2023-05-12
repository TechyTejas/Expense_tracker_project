import './ExpenseItem.css';

function ExpenseItem() {
const expenseDate = new Date(2023,5,12)
const expenseTitle = 'Car Insurance'
const expenseAmount = 299.97
const LocationOfExpenditure = "Nashik"

  return (
     <div className="expense-item">
      <div className="expense-date"> {expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle} </h2>
        <h2>{LocationOfExpenditure}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
     </div>
  );
}
export default ExpenseItem;
