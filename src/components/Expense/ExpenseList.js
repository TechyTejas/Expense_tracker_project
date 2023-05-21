import React from "react";
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem'

const ExpenseList=props=>{

  if(props.items.length===1){
    return(
    props.items.map((expense)=>(
   <div>
    <ExpenseItem 
      key={expense.id}
      title={expense.title}
      amount={expense.amount} 
      date={expense.date} 
      location={expense.location}/> 
    <h2 className="expenses-list__fallback">Found one expense add more...</h2>
   </div> 
   ))
  ) 
} 
 else if(props.items.length>0 ){
  return <h2 className="expenses-list__fallback">Found no expenses...</h2>
  } 

  return (
    <ul className="expenses-list">{
      props.items.map((expense)=>(
        <ExpenseItem 
        key={expense.id}
        title={expense.title}
        amount={expense.amount} 
        date={expense.date} 
        location={expense.location}/>
      ))
    }</ul>
  )
}
  


export default ExpenseList;