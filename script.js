// Variable declarations
const dt = new Date(); // Variable for Date
let finalTotal = ""; // Variable to display final result
let total = BigInt(""); // Variable to display calulation
let operation = "";
let temp = ""; // Variable to store temp calculation

// Code for the Date
document.getElementById("date").innerHTML =
  dt.getHours() + ":" + dt.getMinutes();

// Code for Calculation
document.getElementById("calculation").innerHTML = finalTotal;

function makeCalc(num) {
  temp += num;
  document.getElementById("output").innerHTML = temp;
}

function clearAll() {
  temp = "";
  total = BigInt("");
  finalTotal = "";
  document.getElementById("output").innerHTML = total;
  document.getElementById("calculation").innerHTML = finalTotal;
}

function del() {
  if (temp === "") return;
  temp = temp.slice(0, temp.length - 1);
  document.getElementById("output").innerHTML = temp;
}

function add() {
  if (temp === "") return;
  total = temp;
  document.getElementById("calculation").innerHTML = total + "+";
  total = Number(temp);
  temp = "";
  document.getElementById("output").innerHTML = "|";
  operation = "add";
}

function sub() {
  if (temp === "") return;
  total = temp;
  document.getElementById("calculation").innerHTML = total + "-";
  total = Number(temp);
  temp = "";
  document.getElementById("output").innerHTML = "|";
  operation = "sub";
}

function mul() {
  if (temp === "") return;
  total = temp;
  document.getElementById("calculation").innerHTML = total + "x";
  total = Number(temp);
  temp = "";
  document.getElementById("output").innerHTML = "|";
  operation = "mul";
}

function div() {
  if (temp === "") return;
  total = temp;
  document.getElementById("calculation").innerHTML = total + "÷";
  total = Number(temp);
  temp = "";
  document.getElementById("output").innerHTML = "|";
  operation = "div";
}

function dot() {
  if (temp.at(temp.length - 1) !== "." && !temp.includes(".")) temp += ".";

  document.getElementById("output").innerHTML = temp;
  total = temp;
}

function mod() {
  if (temp === "") return;
  total = temp;
  document.getElementById("calculation").innerHTML = total + "%";
  total = Number(temp);
  temp = "";
  document.getElementById("output").innerHTML = "|";
  operation = "mod";
}

// Output Function
function output() {
  if (operation === "add") {
    finalTotal = total + Number(temp);
    document.getElementById("calculation").innerHTML = total + "+" + temp;
  } else if (operation === "sub") {
    finalTotal = total - Number(temp);
    document.getElementById("calculation").innerHTML = total + "-" + temp;
  } else if (operation === "mul") {
    finalTotal = total * Number(temp);
    document.getElementById("calculation").innerHTML = total + "x" + temp;
  } else if (operation === "div") {
    finalTotal = total / Number(temp);
    document.getElementById("calculation").innerHTML = total + "÷" + temp;
  } else if (operation === "mod") {
    finalTotal = total % Number(temp);
    document.getElementById("calculation").innerHTML = total + "%" + temp;
  }
  document.getElementById("output").innerHTML = finalTotal;
  temp = finalTotal.toString();
}
