import React from "react";
import { useState } from "react";
import "./ExpenseFilter.css";

const ExpensesFilter = (props) => {
  function filterHandler(event){
    props.ongetNewFilter(event.target.value);
    
    
  }
  // props.updateYearList();
  
  const yearsArray = props.yearList;

  yearsArray.sort();
  const noDuplicatesYears = yearsArray.filter((item, index) => {
    return(
      yearsArray.indexOf(item) === index
    )
  })
  
  
  

  // console.log(yearsArray);
  // addNewYear(props.yearsList);
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value = {props.defaultYear} onChange={filterHandler}>
          
          {noDuplicatesYears.map(year => <option key = {year} value = {year+""}>{year}</option>)}
          {/* <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option> */}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
