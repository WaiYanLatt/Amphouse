//chart js
const labels = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "black",
      borderColor: " rgb(79, 251, 223)",
      borderRadius: 7,
      data: [
        5, 10, 5, 2, 20, 30, 45, 25, 10, 5, 2, 25, 10, 35, 2, 20, 30, 10, 5, 2,
        50,
      ],
    },
    {
      label: "My Second dataset",
      backgroundColor: "blue",
      borderColor: "rgb(0, 210, 252,0.3)",
      borderRadius: 7,
      data: [
        25, 10, 35, 2, 20, 30, 10, 5, 2, 50, 5, 10, 5, 2, 20, 30, 45, 25, 10, 5,
        2,
      ],
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          borderDash: [4],
          borderColor: "transparent",
        },
        ticks: {
          // forces step size to be 50 units
          stepSize: 20,
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        align: "start",
        labels: {
          usePointStyle: true,
        },
      },
    },
  },
};
const myChart = new Chart(document.getElementById("myChart"), config);
const myChart1 = new Chart(document.getElementById("myChart1"), config);
const myChart2 = new Chart(document.getElementById("myChart2"), config);


//   datatable
$(document).ready(function () {
  $("#tt").DataTable({
    pageLength: 2,
  });
});
