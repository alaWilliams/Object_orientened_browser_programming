/* Task 1 - Add a new div element to the div with the id "task1"
   The new div should contain the text "Task 1 Completed"
   You have access to the DOM via the variable "document".
*/
const task1 = document.querySelector('#task1');
const div1 = document.createElement('div');
div1.textContent = 'Task 1 Completed';
task1.appendChild(div1);

/* Task 2 - Greeter
  Add a new input element with id "greeterName" and label text "Name:" to the div with the id "task2".
  Add a new button element with id "doGreet" to the div with the id "task2", next to the input element.
  Add a new div element with id "greetResult" to the div with the id "task2".
  When the button "doGreet" is clicked, the "greetResult" div should contain the text "Hello, "
  followed by the value of the input element "greeterName".
*/
const task2 = document.querySelector('#task2');
const input = document.createElement("input");
input.setAttribute("for", "greeterName");
input.setAttribute("type", "text")

input.id = 'greeterName';


const label = document.createElement("label");
label.setAttribute("for", "greeterName");
label.textContent = 'Name:'
task2.appendChild(label);
label.appendChild(input);

const button = document.createElement("button");
button.id = "doGreet";
button.textContent = 'Click here to be greeted'
task2.appendChild(button);

const greetResult = document.createElement('div');
greetResult.id = "greetResult";
task2.appendChild(greetResult);

button.addEventListener('click', () => {showGreeting();});


function showGreeting() {
  const name = input.value;
  greetResult.textContent = `Hello, ${name}`;
}


/* Task 3 - Highlighter
  Add three new div elements with class "highlight" to the div with the id "task3".
  The background color of the divs should be white.
  Each div should contain the text "Click to highlight me".
  When a div with the class "highlight" is clicked, it should change its background color to yellow using inline css style.
  When a div with the class "highlight" is clicked again, it should change its background color to white.
*/

const task3 = document.querySelector('#task3');


for (let i = 0; i < 3; i++) {
  const div = document.createElement('div');
  task3.appendChild(div)
  div.style.backgroundColor = 'white';
  div.textContent = 'Click to highlight me'
  div.style.height = '30px';
  div.className = 'highlight';
  div.style.cursor = 'pointer';
  div.addEventListener('click', () => {
   if (div.style.backgroundColor === 'white') {
    div.style.backgroundColor = 'yellow';
   } else {
    div.style.backgroundColor = 'white'
   }
  })};
/* Task 4 - Sum Calculator
  Add a new input element with id "calcInput1" to the div with the id "task4".
  Add a new input element with id "calcInput2" to the div with the id "task4".
  Add a new button element with id "calcButton" to the div with the id "task4", next to the input elements.
  Add a new div element with id "calcResult" to the div with the id "task4".
  When the button "calcButton" is clicked, the "calcResult" div should contain the result of the calculation
  of the two input elements "calcInput1" and "calcInput2" summed together.
*/

const task4 = document.querySelector('#task4');
for (let i = 0; i < 2; i++) {
  const input = document.createElement('input');
  input.type = 'number';
  input.id = `calcInput${i + 1}`;
  task4.appendChild(input);
  input.placeholder = 'Enter a number to calculate';
}

const calcButton = document.createElement('button');
calcButton.id = 'calcButton';
calcButton.textContent = 'Click here to add your numbers'
task4.appendChild(calcButton);

const calcResult = document.createElement('div');
calcResult.id = 'calcResult';
task4.appendChild(calcResult);

calcButton.addEventListener('click', () => {
 const num1 = Number(document.querySelector('#calcInput1').value);
 const num2 = Number(document.querySelector('#calcInput2').value);
 const result = num1+ num2;
 calcResult.textContent = result;
})

/* Task 5 - Hide and Show
  Add a new button element with id "hideButton" to the div with the id "task5".
  Add a new button element with id "showButton" to the div with the id "task5".
  Add a new div element with id "hideShowResult" to the div with the id "task5".
  The "hideShowResult" div should be 100px by 100px and have a background color of red and be hidden by default (display: none).
  When the button "hideButton" is clicked, the "hideShowResult" div should be hidden.
  When the button "showButton" is clicked, the "hideShowResult" div should be shown.
*/

const task5 = document.querySelector('#task5');
task5.style.marginTop = '50px'

const hideButton = document.createElement('button');
hideButton.id = 'hideButton';
hideButton.textContent = 'Click to hide'
task5.appendChild(hideButton);

const showButton = document.createElement('button');
showButton.id = 'showButton';
showButton.textContent = 'Click to show'
task5.appendChild(showButton)

const results = document.createElement('div');
results.id = 'hideShowResult'
task5.appendChild(results);
results.style = `width: 100px; height: 100px; background-color: red; display: none`;

hideButton.addEventListener('click', () => {
  results.style.display = 'none';
}) 

showButton.addEventListener('click', () => {
  results.style.display = 'block'
})