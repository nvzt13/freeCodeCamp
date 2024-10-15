const input = document.querySelector("#text-input");
const button = document.querySelector('#check-btn');
const result = document.querySelector('#result');

button.addEventListener('click', getValue);

function getValue() {
  if (input.value.trim().length == 0) {
    result.innerText = 'Please input a value '
  }
  else {
    
  let text = input.value;
 // This will output "string"
  checkInputValue(text)
  }
}

function checkInputValue(str) {
  // Reverse the string
  const reversedStr = str.split('').reverse().join('');

  // Check if it's a palindrome
  if (str === reversedStr) {
     result.innerText = `${str} is a palindrome`;
  } else {
    result.innerText = (`${str} is not a Palindrome`);
  }
}
