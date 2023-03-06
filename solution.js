// sections 1
const numberInput = document.querySelector(".question-1 .number-input");
const arrayOutput = document.querySelector(".question-1 .array-output");
let numbers = new Array(12, -10, 25, 3, -4, 32);

// q1: two functions to insert a number to an array and show the array
function insert() {
  if (numberInput.valueAsNumber || numberInput.valueAsNumber === 0) {
    numbers.push(numberInput.valueAsNumber);
    numberInput.value = "";
  }
}

function show() {
  if (numbers.length) {
    arrayOutput.innerHTML = numbers.join(" , ");
  } else {
    arrayOutput.innerHTML = "the array is empty";
  }
}

function clearOutput() {
  arrayOutput.innerHTML = "";
}

// q2: function to display the fisrt negative number
function firstNegative() {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      arrayOutput.innerHTML = "first negative =  " + numbers[i].toString();
      return;
    }
  }
  arrayOutput.innerHTML = "the array has no negative numbers";
}

// q3: function to display the fisrt negative number
function lastNegative() {
  for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] < 0) {
      arrayOutput.innerHTML = "last negative =  " + numbers[i].toString();
      return;
    }
  }
  arrayOutput.innerHTML = "the array has no negative numbers";
}

// q4: function to display the second biggest number
function secondBig() {
  let first = numbers[0],
    second = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (first < numbers[i]) {
      second = first;
      first = numbers[i];
    } else if (second < numbers[i]) {
      second = numbers[i];
    }
  }
  arrayOutput.innerHTML = "the second biggest = " + second.toString();
}

// q5: display all primary numbers in the array
function allPrimary() {
  let prime = [];
  outerLoop: for (let i = 0; i < numbers.length; i++) {
    for (let j = 2; j < Math.sqrt(numbers[i] ** 2); j++) {
      if (numbers[i] % j === 0) continue outerLoop;
    }
    prime.push(numbers[i]);
  }
  prime = prime.filter((p) => Math.sqrt(p ** 2) != 1);
  prime.length
    ? (arrayOutput.innerHTML = "the prime numbers: " + prime.join(" , "))
    : (arrayOutput.innerHTML = "the array has no prime numbers");
}

// q6: display the first n elements from an array
function nElements() {
  if (!n.innerHTML) {
    n.innerHTML = "N";
  } else {
    arrayOutput.innerHTML = numbers.slice(0, n.innerHTML).join(" , ");
  }
}

// q7: format a phone number
const phoneInput = document.querySelector(".phone-number");
const phoneOutput = document.querySelector(".phone-output");

function formatPhoneNumber(prefix) {
  let p = phoneInput.value;
  if (p && phoneInput.value.length == 11) {
    let arr = [p.slice(0, 1), p.slice(1, 4), p.slice(4, 7), p.slice(7)];
    phoneOutput.value = prefix + arr.join("-");
  } else {
    clearPhoneNumber();
  }
}

function clearPhoneNumber() {
  phoneOutput.value = "";
}

// q8: drow a table or a matrix from input type number
const drowArea = document.querySelector(".drow-area");

function drow(option) {
  const dim = document.querySelector(".question-3 input").valueAsNumber;
  drowArea.innerHTML = "";
  if (option === "table") {
    const table = document.createElement("table");
    table.setAttribute("border", "1");
    for (let i = 0; i < dim; i++) {
      const tr = document.createElement("tr");
      for (let j = 0; j < dim; j++) {
        const td = document.createElement("td");
        td.innerHTML = "table";
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
    drowArea.appendChild(table);
  } else {
    const form = document.createElement("form");
    for (let i = 0; i < dim; i++) {
      const div = document.createElement("div");
      for (let j = 0; j < dim; j++) {
        const input = document.createElement("input");
        input.setAttribute("type", "number");
        input.value = (i + 1) * (j + 1);
        div.appendChild(input);
      }
      form.appendChild(div);
    }
    drowArea.appendChild(form);
  }
}
