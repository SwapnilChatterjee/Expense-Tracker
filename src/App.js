import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import Navbar from "./components/UI/Navbar";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSE = [
  {
    id : 'e1',
    title: "Car Insurance",
    amount: 247.65,
    date: new Date(2022, 6, 1)
  },
  {
    id : 'e2',
    title: "Gas",
    amount: 87.65,
    date: new Date(2020, 0, 2)
  },
  {
    id : 'e3',
    title: "Rent",
    amount: 1247.65,
    date: new Date(2022, 0, 3)

  },
  {
    id : 'e4',
    title: "Car Insurance",
    amount: 247.65,
    date: new Date(2019, 0, 1)
  }

]
function App() {
  const [expense , setNewexpense] = useState(DUMMY_EXPENSE);
  
function newDataHandler(newData){
  setNewexpense(prevExpense => {
    return [newData , ...prevExpense];
  });
}

  return(
    <div>
    <Navbar><h1>EXPENSE TRACKER</h1></Navbar>
    <NewExpense ongetNewData = {newDataHandler} />
    <Expenses items = {expense} />
    </div>
  );
  
}

export default App;
// import React from "react";