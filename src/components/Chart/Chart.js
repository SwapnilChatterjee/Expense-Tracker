import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const theMaxValue = Math.max(...dataPointsValues);
    // console.log(theMaxValue);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={theMaxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
