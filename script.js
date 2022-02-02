let ans = document.getElementById("answer")
let plot = document.getElementById("plotnost")
let ob = document.getElementById("obiyom")
let btn = document.getElementById("btn")
btn.onclick = function (){
let plotnost = parseInt(plot.value, 10);
let obiyom = parseInt(ob.value, 10);
console.log(plotnost)
console.log(obiyom)
let obsh = " " + plotnost * obiyom * 10 + " Н";
ans.innerHTML ="F<sub>архимеда</sub> =" + obsh;
}