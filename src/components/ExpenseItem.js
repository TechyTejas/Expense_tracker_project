import './ExpenseItem.css';

function ExpenseItem(props) {
// const expenseDate = new Date(2023,5,12)
// const expenseTitle = 'Car Insurance'
// const expenseAmount = 299.97
// const LocationOfExpenditure = "Nashik"


  return (
     <div className="expense-item">
      <div className="expense-date"> {props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title} </h2>
        <h2>{props.location } </h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
     </div>
  );
}
export default ExpenseItem;
