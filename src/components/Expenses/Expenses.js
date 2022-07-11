import { useState } from "react";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");
  const temp = props.items.map((expense) => {
    return expense.date.getFullYear();
  });
  const [yearsArray, addNewYear] = useState(temp);
  // console.log(temp);
  function updatingYears(){
    addNewYear(temp);
  }
  
  
  function getNewFilter(filteredYear) {
    // console.log(filteredYear);

    setFilterYear(filteredYear);
  }
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });
  // {addNewYear(temp)};

  // const yearsArray = props.items.map(expense =>{
  //     return (
  //       expense.date.getFullYear()
  //     );
  // }  )
  

  // console.log(noDuplicatesYears);

  return (
    
    <div>
      <Card className="expenses">
        <ExpenseFilter
          defaultYear={filterYear}
          ongetNewFilter={getNewFilter}
          
          yearList = {temp}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
