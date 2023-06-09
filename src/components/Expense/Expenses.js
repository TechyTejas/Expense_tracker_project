import React,{useState} from 'react'
import Card from "../UI/Card";
import ExpenseList from './ExpenseList.js'
import ExpenseFilter from './ExpenseFilter';
import ExpenseChart from  './ExpenseChart';
import "./Expenses.css"


const Expenses=(props) =>{
   
  const [filteredYear,setFilteredYear]=useState("2020")

  const filterChangeHandler=selectedYear=>{
    setFilteredYear(selectedYear);
  }
  const filteredExpenses=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear;
  });

return (
    <Card className='expenses'>
      <ExpenseFilter 
      selected={filteredYear} 
      onChangeFilter={filterChangeHandler}/>
      <ExpenseChart expenses={filteredExpenses}/>
      <ExpenseList items={filteredExpenses}/>
    </Card>
  )
}
export default Expenses
