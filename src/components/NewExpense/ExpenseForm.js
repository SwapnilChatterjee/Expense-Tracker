import './ExpenseForm.css';
import { useState } from 'react';

function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    function titleHandler(event){
        setEnteredTitle(event.target.value);
    };
    function amountHandler(event){
        setEnteredAmount(event.target.value);
    };
    function dateHandler(event){
        setEnteredDate(event.target.value);
    };

    function formHandler(event){
        event.preventDefault();

        const expensedata = {
            id : Math.random().toString(),
            title : enteredTitle,
            amount : +enteredAmount,
            date : new Date(enteredDate)
        };
        props.onSaveExpenseData(expensedata);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return(
        <form onSubmit={formHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value = {enteredTitle} onChange={titleHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min = '0.01' step = '0.01' value = {enteredAmount} onChange={amountHandler} />
                </div>
                <div className='new-expense__control' >
                    <label>Date</label>
                    <input type="date" min = "2001-01-01" max="2099-12-31" value = {enteredDate} onChange={dateHandler}/>
                </div>
            </div>
            <div className='.new-expense__actions'>
                <button onClick = {props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )

}

export default ExpenseForm;