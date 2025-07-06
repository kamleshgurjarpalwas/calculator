document.addEventListener('DOMContentLoaded', function() {
  const input = document.getElementById('input');
  const keys = document.querySelectorAll('.calculator-key');
  
  keys.forEach(key => {
    key.addEventListener('click', function() {
      const value = this.value;
      
      if (this.id === 'clear') {
        clearScreen();
      } else if (this.id === 'execute') {
        calculate();
      } else if (this.id === 'delete') {
        deleteDigit();
      } else {
        display(value);
      }
    });
  });
  
  function display(value) {
    if (value === '0') {
      if (input.value !== '') {
        input.value += value;
      }
    } else {
      input.value += value;
    }
  }
  
  function clearScreen() {
    input.value = '';
  }
  
  function calculate() {
    try {
      // Replace × and ÷ with * and / for eval
      const expression = input.value.replace(/×/g, '*').replace(/÷/g, '/');
      const result = eval(expression);
      input.value = result;
    } catch (error) {
      input.value = 'Error';
      setTimeout(clearScreen, 1000);
    }
  }
  
  function deleteDigit() {
    input.value = input.value.slice(0, -1);
  }
});
