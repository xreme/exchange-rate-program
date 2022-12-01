document.getElementById("flag1").src="india.jpg";
document.getElementById("flag2").src="us.jpg";
document.getElementById("flag3").src="europe.jpg";
document.getElementById("flag4").src="uk.jpg";
document.getElementById("flag5").src="australia.jpg";
document.getElementById("flag6").src="japan.jpg";
document.getElementById("flag7").src="china.jpg";
document.getElementById("flag8").src="russia.jpg";


function NewAmount(){
document.getElementById("indRp").innerHTML="₹...";
document.getElementById("usD").innerHTML="$...";
document.getElementById("euD").innerHTML="€...";
document.getElementById("sP").innerHTML="£...";
document.getElementById("auD").innerHTML="$...";
document.getElementById("jpnY").innerHTML="¥...";
document.getElementById("chnY").innerHTML="¥...";
document.getElementById("rR").innerHTML="₽...";

document.getElementById("CADAmnt").focus();
document.getElementById("CADAmnt").value=""
}


function Convert(){

var CAD= parseFloat(document.getElementById("CADAmnt").value);
var IND=  Math.round(CAD * 53.7).toFixed(2);
var USD=  Math.round(CAD * 0.75).toFixed(2);
var EUD= Math.round(CAD * 0.66).toFixed(2);
var STP = Math.round(CAD * 0.57).toFixed(2);
var AUD=  Math.round(CAD * 1.05).toFixed(2);
var JPNY=  Math.round(CAD * 82.58).toFixed(2);
var CHNY=  Math.round(CAD * 5.09).toFixed(2);
var RR=  Math.round(CAD * 49.84).toFixed(2);

document.getElementById("indRp").innerHTML="₹"+IND;
document.getElementById("usD").innerHTML="$"+USD;
document.getElementById("euD").innerHTML="€"+EUD;
document.getElementById("sP").innerHTML="£"+STP;
document.getElementById("auD").innerHTML="$"+AUD;
document.getElementById("jpnY").innerHTML="¥"+JPNY;
document.getElementById("chnY").innerHTML="¥"+CHNY;
document.getElementById("rR").innerHTML="₽"+RR;




}


