
import React, {useState} from'react';
import './App.css'; 
import NewExpense from './components/NewExpenses/NewExpense';
import Expenses from './components/Expense/Expenses';

const App=()=> {
  const [expenses, setExpenses] = useState([
    { id: 'e1', title: 'Car Insurance', amount: 299.99, date: new Date(2020, 7, 14), LocationOfExpenditure: "Nashik" },
    { id: 'e2', title: 'New TV', amount: 125.99, date: new Date(2020, 8, 19), LocationOfExpenditure: "Pune" },
    { id: 'e3', title: 'New AC', amount: 165.99, date: new Date(2020, 10, 21), LocationOfExpenditure: "Pune" },
    { id: 'e4', title: 'Pinnut Butter', amount: 100.99, date: new Date(2020, 11, 19), LocationOfExpenditure: "Mumbai" },
  ]);

  
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  }
  

  // const expenseItems = expenses.map((expense) => {
  //   return <ExpenseItem 
  //     key={expense.id} // You should always provide a unique key prop when rendering an array of components
  //     title={expense.title} 
  //     amount={expense.amount} 
  //     date={expense.date} 
  //     location={expense.LocationOfExpenditure}
  //   />;
  // });

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2',{},"Let's get started !"),
  //   React.createElement(ExpenseItem,{items: expenseItems})
  // )
  return (
    <div >
      <NewExpense onAddExpense={addExpenseHandler}/>
      {/* <div className='expenses'>{expenseItems}</div>  */}
      <Expenses items={expenses}/> 
      
    </div>
  );

}

export default App;






  //     {/* <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
      //     Learn React */}
      //   {/* </a>
      // </header> */}
  //