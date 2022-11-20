import React from "react";
import Chart from "../chart/Chart";
const ExpensesChart = (props) => {
  const ChartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "jun", value: 0 },
    { label: "jul", value: 0 },
    { label: "aug", value: 0 },
    { label: "sep", value: 0 },
    { label: "oct", value: 0 },
    { label: "nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    ChartDataPoints[expenseMonth].value += expense.amount;
  }
  return <Chart dataPoints={ChartDataPoints} />;
};

export default ExpensesChart;
