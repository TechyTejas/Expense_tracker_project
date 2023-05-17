import React, {useState,} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

 

const ExpenseItem=(props)=> {
 
 const [title, setTitle] = useState(props.title);
 const [amount, setAmount] = useState(props.amount);


 const clickHandler = () => {
   setTitle('Updated!');
   setAmount('100');
   console.log(title);
 };

  return (
    <Card className="expense-item"> 
       <ExpenseDate date={props.date}/>  
       <div className='expense-item__description'> 
           <h2>{title} </h2>
           <h2>{props.location} </h2>
        <div className="expense-item__price">${amount}</div>
       </div>
        <button onClick={clickHandler}>Change Title</button>
     </Card>
    
  );
}
export default ExpenseItem;



// {
//   //  <div className="expense-item">
//     //   <div className="expense-date"> {props.date.toISOString()}</div>
//     //   <div className="expense-item__description">
// }