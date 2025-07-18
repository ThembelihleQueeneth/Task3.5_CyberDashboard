const xValues = ["January", "February", "March", "April", "May", "June", "July", "August","September", "October", "November", "December"];
const yValues = [10, 13, 55, 16,25,15,59,95,45,20,66,100];
const barColors = ["red", "green", "blue","red", "green", "blue","red", "green", "blue","red", "green", "blue"];

new Chart("myChart", {
    type:"line",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data:yValues
        }]
    },
    options:{
        legend: {display:false},
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        title: {
            display:true,
            Text:"lorem"
        }
    }
});

//bar graph
const xBarValues = ["Gauteng", "Mpumalanga", "Western Cape", "Limpopo", "Kzn", "Eastern Cape", "Free State", "North West","Northern Cape"];
const yBarValues = [90,20,100,30,80,50,30,20,20];
const bColors = ["red", "green", "blue","red", "green", "blue","red", "green", "blue","red", "green", "blue"];

new Chart("myChartbar", {
    type:"bar",
    data: {
        labels: xBarValues,
        datasets: [{
            backgroundColor: bColors,
            data:yBarValues
        }]
    },
    options:{
        legend: {display:false},
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        title: {
            display:true,
            Text:"lorem"
        }
    }
});