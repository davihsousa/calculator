const memory = {
  number: '',
  operator: '',
  trigger: false,
};

//Events
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

const show = () => (display.textContent = memory.number);

const buttonPress = (button) => {
  if (button === 'C') {
    clear();
  } else if (button.match(/\d/g)) {
    if (memory.trigger) {
      display.textContent = button;
      memory.trigger = false;
    } else {
      display.textContent += button;
    }
  } else if (button.match(/\/|\*|\-|\+/g)) {
    memory.operator = button;
    memory.trigger = true;
    memory.number = evaluate();
    show();
  } else if (button === '=') {
    memory.number = operate(
      memory.number,
      display.textContent,
      memory.operator
    );
    show();
  }
  console.log(memory);
};

function evaluate() {
  operate(memory.number, display.textContent, memory.operator);
}

buttons.forEach((button) =>
  button.addEventListener('click', function () {
    buttonPress(button.textContent);
  })
);

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
  }
}

function clear() {
  display.textContent = '';
  memory.number = '';
  memory.operator = '';
  memory.trigger = false;
}
