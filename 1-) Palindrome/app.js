const input = document.querySelector("#text-input");
const button = document.querySelector('#check-btn');
const result = document.querySelector('#result');

button.addEventListener('click', getValue);

function getValue() {
  if (input.value.trim().length == 0) {
    alert('Please input a value')
  }
  else {
  let text = input.value.toLowerCase();
  checkInputValue(text)
  }
}

function checkInputValue(str) {
  // Reverse the string
  
  const reversedStr = str.split('').reverse().join('').toLowerCase();
  const cleanText = reversedStr.replace(/\s/g, '');
console.log(str.split(' ').join(''))
  // Check if it's a palindrome
  if (str == reversedStr){
     result.innerText = `${str} is a palindrome`;
  }else if(reversedStr.match(/_/gi)) {
     result.innerText = `${str} is a palindrome`;
  } else if (str.split(' ').join('') == cleanText) {
result.innerText = `${str} is a palindrome`;
  }else if(reversedStr.match(/.,/gi)){
       result.innerText = `${str} is a palindrome`;
  }
  else {
    result.innerText = (`${str} is not a Palindrome`);
  }
}
