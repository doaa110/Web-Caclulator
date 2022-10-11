let display1El = document.querySelector(".display-1");
let display2El = document.querySelector(".display-2");
let tempResultEl = document.querySelector(".temp-result");
let numbersElements = document.querySelectorAll("[data-number]");
let operationsElements = document.querySelectorAll("[data-operation]");
let equalElement = document.getElementById("equal");
let clearAllEl = document.getElementById("clear");
let deleteElement = document.getElementById("delete");

// Testing

console.log("clear ", clearAllEl.innerHTML);
console.log("delete", deleteElement.innerHTML);
console.log("equal", equalElement.innerHTML);

let dis1Num = "";
let dis2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;

/**
 *
 * display number function*
 *
 * */

numbersElements.forEach(number => {
  number.addEventListener("click", e => {
    //checks for "."
    //if the triggered event or action contains "." ==> and not having . before ,, so display .
    if (e.target.innerText === "." && !haveDot) {
      haveDot = true;
    }
    // else ,, if already there is a "." exists (haveDot) and the action is for adding "." ==> no action will apply
    else if (e.target.innerText === "." && haveDot) {
      return;
    }

    dis2Num += e.target.innerText;
    display2El.innerText = dis2Num;
    // console.log();
  });
});

/**
 *
 * display operation function*
 *
 * */
operationsElements.forEach(operation => {
  operation.addEventListener("click", e => {
    //checks first for number existing.. no operation will done if no number entered

    //if no number founded
    if (!dis2Num) return;
    // console.log("no nmbers found to calculate ");
    ///to enable rewriting a "."
    haveDot = false;

    //else ==> if i already have a number and it's displayed

    let operationName = e.target.innerText;
    if (dis1Num && dis2Num && lastOperation) {
      // if we have a numbers and operation ,,, => so let's calculate
      calculateOperations();
    } else {
      //no numbers or operation
      console.log("test :::: ");

      result = parseFloat(dis2Num);
    }
    // result = parseFloat(dis2Num);

    clearVar(operationName);
    lastOperation = operationName;
    console.log("result is ", result);
  });
});

/**
 *
 * delete the first number that added and switch between them function*
 *
 * */

function clearVar(name = "") {
  dis1Num += dis2Num + " " + name + " ";
  display1El.innerText = dis1Num;
  display2El.innerText = "";
  dis2Num = "";
  tempResultEl.innerText = result;
}

/**
 *
 * main operations function*
 *
 * */

function calculateOperations() {
  if (lastOperation === "*") {
    result = parseFloat(result) * parseFloat(dis2Num);
    console.log("multiplication result is  ", result);
    tempResultEl.innerText = result;
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(dis2Num);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(dis2Num);
  } else if (lastOperation === "÷") {
    result = parseFloat(result) / parseFloat(dis2Num);
  }
}

/**
 *
 * equal function*
 *
 * */

equalElement.addEventListener("click", e => {
  if (!dis1Num || !dis2Num) return;
  haveDot = false;
  calculateOperations();
  clearVar();
  display2El.innerText = result;
  tempResultEl.innerText = "";
  dis2Num = result;
  dis1Num = "";
  // else if () { }
});

/**
 *
 * clear all elements or numbers function*
 *
 * */

clearAllEl.addEventListener("click", e => {
  display1El.innerText = "0";
  display2El.innerText = "0";
  dis1Num = "";
  dis2Num = "";
  result = "";
  tempResultEl.innerText = "0";
});

/**
 *
 * delete element function*
 *
 * */

deleteElement.addEventListener("click", e => {
  display2El.innerText = "";
  dis2Num = "";
});
// operationsElements.forEach(operation => {
//   operation.addEventListener("click", e => {
//     if (e.target.innerText === "+") {
//       lastOperation += e.target.innerText;
//       console.log(lastOperation);
//       console.log("you entered ", e.target.innerText);
//     }
//   });
// });
