import "../../styling/chart/Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({ chartData }) => {
  //transform the passed in array to a new one with just the values so we can use that to find the max
  const dataPointValues = chartData.map((dataPoint) => dataPoint.value);
  const totalMaximumExpense = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {chartData.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          dataValue={dataPoint.value}
          maxValue={totalMaximumExpense}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
