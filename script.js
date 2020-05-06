//Listeners
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

const buttonPress = (button) => {
  if (button === 'C') {
    display.textContent = '';
  } else {
    display.textContent = button;
  }
};

buttons.forEach((button) =>
  button.addEventListener('click', function () {
    buttonPress(button.textContent);
  })
);

// Functions
const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const operate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return sum(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
  }
};
