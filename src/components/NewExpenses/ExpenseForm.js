import React,{useState} from 'react';
import './ExpenseForm.css';

 const ExpenseForm = () => {
      function submitHandler(event ) {
        
            event.preventDefault();
    //         const title = document.getElementById('title').value;
    //         const amnt = document.getElementById('amnt').value;
    //         const date = document.getElementById('date').value;
    //         event.target.reset();
    //         console.log(title+" "+amnt+" "+date);
          const expenseData={  title : enteredTitle,
               amount : enteredAmount,
               date : new Date(enteredDate)
          }
          event.target.reset();
          console.log(expenseData)
        }
    const[enteredTitle, setEnteredTitle] = useState('');
    const[enteredAmount, setEnteredAmount] = useState('');
    const[enteredDate, setEnteredDate] = useState('');
    //    const[userInput, setUserInput] = useState({
    //     EnteredTitle : '',
    //     EnteredAmount : '',
    //     EnteredDate : ''
    //    });
       
    const titleChangeHandler = (event) =>{
       setEnteredTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle : event.target.value,
    // })
    };

    // if we have to depend on prevstate
    //    setUserInput((prevState) =>{
    //     return {...prevState, EnteredTitle : event.target.value};
    //    });

    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
    //     setUserInput({
    //     ...userInput,
    //     enteredAmount : event.target.value,
    // })
    }

    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate : event.target.value,
        // })
    }



    return (
        //  <onSubmit={submitHandler}></>
           <form onSubmit={submitHandler} >
        
             <div className='new-expense__controls'>
            <div className="new-expense__control label">
                <label  className='new-expense__control label'>Exepnse Title :</label>
                <input type="text" id='title' onChange={titleChangeHandler} />
                <br></br>
            </div>

            <div className="new-expense__control input">
                <label  className='new-expense__control label'>Expense Amount :</label>
                <input type="number" id='amnt' onChange={amountChangeHandler}  min='0.01' step='0.01' />
                <br></br>
            </div>

            <div className="new-expense__control input">
                <label  className='new-expense__control label'>Expense Date :</label>
                <input type="date"  id='date' onChange={dateChangeHandler} min='2020-01-01'  max='2023-12-31' />
                <br></br>
            </div>
            </div>
            
            
            <div className="new-expense__actions">
             <button type="submit">Add Expense</button>
            </div>
            
         </form> 
             
    )
}


export default ExpenseForm;