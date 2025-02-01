// API Key = 1I1P6GJP9KO85LZT
const chart = document.getElementById("stockchart");
async function getStockData(sticker) {
  const data = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${sticker}&interval=1min&datatype=json&apikey=1I1P6GJP9KO85LZT`
  );
  return data.json();
}

//Object.values = returns values for
//Object.entries =
async function makeChartWithStockData(sticker) {
  const data = await getStockData(sticker);
  data2 = Object.values(Object.values(data)[1]);
  data2.map((onetime) => {
    // Iterates over all timeseries inside object, calling function, which in this case is not named
    return onetime.close;
  });

  const labels = ["Hello", "Test", "TEst"];
  const data3 = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  const config = {
    type: "line",
    data: data3,
    options: {
      aspectRatio: 3 | 1,
    },
  };
  new Chart(chart, config);
}
console.log(makeChartWithStockData("AAPL"));
