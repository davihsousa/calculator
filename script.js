const memory = {
  number1: '',
  number2: '',
  operator: '',
  trigger: false,
};

//Events
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

function numberPress(digit) {
  if (!memory.trigger) {
    display.textContent += digit;
  } else {
    display.textContent = digit;
    memory.trigger = false;
  }
}

function symbolPress(button) {
  memory.number2 = display.textContent;
  let result = operate(memory.number1, memory.number2, memory.operator);
  display.textContent = result;
  memory.number1 = result;
  memory.operator = button;
  memory.trigger = true;
}

buttons.forEach((button) =>
  button.addEventListener('click', function () {
    if (button.textContent === 'C') {
      clear();
    } else if (button.textContent.match(/\d|\./g)) {
      numberPress(button.textContent);
    } else if (button.textContent.match(/\/|\*|\-|\+|\=/g)) {
      symbolPress(button.textContent);
    }
    console.log(memory);
  })
);

function clear() {
  display.textContent = '';
  memory.number1 = '';
  memory.number2 = '';
  memory.operator = '';
  memory.trigger = false;
}

function operate(a, b, operator) {
  switch (operator) {
    case '+':
      return Number(a) + Number(b);
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      return display.textContent;
  }
}
