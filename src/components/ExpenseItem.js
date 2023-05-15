import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

function ExpenseItem(props) {
 
  return (
    <Card className="expense-item">
      <div className='expense-item'>
       <ExpenseDate date={props.date}/>   
           <h2>{props.title} </h2>
           <h2>{props.location } </h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
     </Card>
  );
}
export default ExpenseItem;



// {
//   //  <div className="expense-item">
//     //   <div className="expense-date"> {props.date.toISOString()}</div>
//     //   <div className="expense-item__description">
// }