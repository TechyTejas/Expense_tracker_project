import React,{useState} from 'react';
import './ExpenseForm.css';

 const ExpenseForm = (props) => {
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

    function submitHandler(event ) {
        event.preventDefault();
        const expenseDataa={  title : enteredTitle,
               amount : enteredAmount,
               date : new Date(enteredDate)
          }
       
          props.onSaveExpenseData(expenseDataa);
          setEnteredTitle('');
          setEnteredAmount('');
          setEnteredDate('');
        }

    return (
           <form onSubmit={submitHandler} >
        
             <div className='new-expense__controls'>
            <div className="new-expense__control label">
                <label  className='new-expense__control label'>Exepnse Title :</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                <br></br>
            </div>

            <div className="new-expense__control input">
                <label  className='new-expense__control label'>Expense Amount :</label>
                <input type="number" value={enteredAmount} onChange={amountChangeHandler}  min='0.01' step='0.01' />
                <br></br>
            </div>

            <div className="new-expense__control input">
                <label  className='new-expense__control label'>Expense Date :</label>
                <input type="date" value={enteredDate} onChange={dateChangeHandler} min='2020-01-01'  max='2023-12-31' />
                <br></br>
            </div>
            </div>
            
            
            <div className="new-expense__actions">
             <button type="submit" className='new-expense__action'>Add Expense</button>
             <button type="button" onClick={props.onCancel} className='new-expense__action'>Cancel</button>
            </div>

          
            
         </form> 
             
    )
}


export default ExpenseForm;