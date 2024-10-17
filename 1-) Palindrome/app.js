const input = document.querySelector("#text-input");
const button = document.querySelector('#check-btn');
const result = document.querySelector('#result');

button.addEventListener('click', getValue);

function getValue() {
  if (input.value.trim().length == 0) {
    alert('Please input a value')
  }
  else {
  checkInputValue(input.value)
  }
}

function checkInputValue(str) {
  let text = str.match(/[a-zA-Z0-9]/gi).toString().toLowerCase();
  console.log(text)
  const reversedStr = text.split('').reverse().join('').toLowerCase();
  console.log(reversedStr)
  
  
  // Check if it's a palindrome
  if (text == reversedStr){
     result.innerText = `${str} is a palindrome`;
  }
  else {
    result.innerText = (`${str} is not a Palindrome`);
  }
}
