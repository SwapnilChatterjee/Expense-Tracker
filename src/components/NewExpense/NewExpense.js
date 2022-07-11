import { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props){
    function saveExpenseDataHandler(expenseData){
        const expense = {
            ...expenseData
        }
        props.ongetNewData(expense);
        setEditing(false);

    }

const [isEditing, setEditing] = useState(false)

function startAddExpense(){
    setEditing(true);
}

function stopAddingExpense(){
    setEditing(false);
}

    return(
        <div className='new-expense'>
            {!isEditing && <button onClick={startAddExpense}>ADD NEW EXPENSE</button>}
            {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel = {stopAddingExpense} />}
        </div>
    )

}

export default NewExpense