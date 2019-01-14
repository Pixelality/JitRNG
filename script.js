String.prototype.hashCode = function() {
    var hash = 0;
    if (this.length == 0) {
        return hash;
    }
    for (var i = 0; i < this.length; i++) {
        var char = this.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}
//generate distribution dataset

var data = Array.from({length: 37}, () => 0);
// var n = 10**8;
//
// for(var i = 0; i < n/* = n*/; i++){
//   // Generate Random Numbers
//   var rndArray = Array.from({length: 10}, () => Math.floor(Math.random() * 37));
//   //console.log(rndArray);
//   //console.log(hashfunction(rndArray));
//   data[hashfunction(rndArray)] += 1;
// }
//
// console.log((Math.max(...data)/n)*100);
// console.log((Math.min(...data)/n)*100);

// var sum = input.reduce((a, b) => a + b, 0);
// console.log(sum);
// var random = sum % 50;

var ctx = document.getElementById("chart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36"],
        datasets: [{
            label: 'Verteilung',
            //data: [35,6,13,15,2,27,37,21,34,20,0,1,42,22,43,48,49,7,50,5,12,31,19,3,39,30,9,16,23,25,47,8,18,29,28,36,10],
            data: data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

function random_rgb() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s)+')';
}

let test1 = setInterval(() => tick(),0);
let test2 = setInterval(() => myChart.data.datasets[0].backgroundColor = random_rgb(),500);

function tick(){
  var n = 100;
  for(var i = 0; i < n/* = n*/; i++){
    var rndArray = Array.from({length: 10}, () => Math.floor(Math.random() * 37));
    //console.log(rndArray);
    //console.log(hashfunction(rndArray));
    data[hashfunction(rndArray)] += 1;
    myChart.update(data);
  }
  console.log("Zahl");
}

// 10 random numbers -> 1
function hashfunction(rndArray){
  var str = rndArray.toString();
  var hash = Math.abs(str.hashCode());
  //console.log("hash: "+hash+" random: "+hash%36);
  return hash % 37;
}
