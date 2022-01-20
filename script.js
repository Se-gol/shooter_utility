let min = 0
let max = 20
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        // labels: [],
        datasets: [{
            label: 'velocity [m/s]',
            data: [],
            backgroundColor: ['rgba(0,0,0,0)'],
            borderColor: ['rgba(255, 159, 64, 1)',],
            borderWidth: 4
        }]
    },
    options: {
        tooltips: {enabled: false},
        hover: {mode: null},
        scales: {y: {beginAtZero: true}}
    }
});
myChart.canvas.parentNode.style.height = '402px';
myChart.canvas.parentNode.style.width = '704px';

function moveChart(chart) {
    chart.data.labels.splice(0, 1); // remove first label
    chart.data.datasets.forEach(function (dataset) {
        dataset.data.splice(0, 1); // remove first data point
    });
    chart.update();
}

function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

let a = 0
let t = 0;

setInterval(() => {
    addData(myChart, (t / 1000), a)
    a += Math.floor(Math.random() * 10)
    a -= Math.floor(Math.random() * 10)
    var rect = draggable.getBoundingClientRect();
    a = map(rect.left, 464, 1431, min, max)
    t += 200
}, 150)

setInterval(() => {
    if (myChart.data.labels.length > 100)
        moveChart(myChart)
}, 200)

function map(v, minimumInput, maximumInput, minimumOutput, maximumOutput) {
    return (v - minimumInput) * (maximumOutput - minimumOutput) / (maximumInput - minimumInput) + minimumOutput;
}

var holding = false
var mouseX = 0
var mouseY = 0

const draggable = document.getElementById("draggable")
const value = document.getElementById("value")
const box = document.getElementById("box")

const set1_input = document.getElementById("set1_input")
const set2_input = document.getElementById("set2_input")
const set3_input = document.getElementById("set3_input")
const set4_input = document.getElementById("set4_input")
const set5_input = document.getElementById("set5_input")
document.addEventListener("mousemove", (e) => {
    mouseX = e.pageX
    mouseY = e.pageY
})
document.addEventListener("mousedown", () => {
    holding = true;
})
document.addEventListener("mouseup", () => {
    holding = false;
})
// var rect = draggable.getBoundingClientRect();

// setInterval(() => {
//         if (holding) {
//             if (Math.abs(rect.left - mouseX) < 400 && Math.abs(rect.top - mouseY) < 70) {
//                 if (mouseX >= 464 && mouseX <= 1431)
//                     draggable.style.left = (mouseX - 16) + "px"
//             }
//         }
//     }, 10
// )

setInterval(() => {
    var rect = draggable.getBoundingClientRect();
    let a = map(rect.left, 464, 1431, min, max)
    a = Math.round(a * 100) / 100
    box.innerHTML = a + ""
})


function clamp(n, min, max) {
    if (n > max) {
        return max;
    } else if (n < min) {
        return min
    } else {
        return n;
    }
}

function set1() {
    draggable.style.left = map(clamp(parseFloat(set1_input.value), min, max), min, max, 464, 1431) + "px"
}

function set2() {
    draggable.style.left = map(clamp(parseFloat(set2_input.value), min, max), min, max, 464, 1431) + "px"

}

function set3() {
    draggable.style.left = map(clamp(parseFloat(set3_input.value), min, max), min, max, 464, 1431) + "px"
}

function set4() {
    draggable.style.left = map(clamp(parseFloat(set4_input.value), min, max), min, max, 464, 1431) + "px"
}

function set5() {
    draggable.style.left = map(clamp(parseFloat(set5_input.value), min, max), min, max, 464, 1431) + "px"
}




