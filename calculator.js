var firstArgument;
var operand;
var madeCalculation = false;


function draw(nVal) {
  if (madeCalculation) {
    document.getElementById('view').value = "";
    madeCalculation = false;
  }
  var value = nVal.innerHTML;
  console.log(value);
  show(value);
    }

function show(value) {
  document.getElementById('view').value += value;
  var eq = document.getElementById('view').value;
}

function equal() {
  var secondArgument = Number(document.getElementById('view').value);

  if (operand == "+") {
    document.getElementById('view').value = firstArgument + secondArgument;
    madeCalculation = true;

  } else {
    document.getElementById('view').value = firstArgument - secondArgument;
    madeCalculation = true;
  }


}



function operation(val) {
  firstArgument = Number(document.getElementById('view').value);
  document.getElementById('view').value = "";
  operand = val.innerHTML;
}

function selectedButton(val) {
  document.getElementById(val).setAttribute("class", "selectedStyle")
}
