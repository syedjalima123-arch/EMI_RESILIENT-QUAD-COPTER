function updateData(){

let temp = Math.floor(Math.random()*20)+40;
let distance = Math.floor(Math.random()*200)+50;
let time = Math.floor(Math.random()*30);

document.getElementById("temp").innerHTML = temp + " °C";
document.getElementById("distance").innerHTML = distance + " cm";
document.getElementById("time").innerHTML = time + " Minutes";

}

setInterval(updateData,3000);