const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

const phoneRegExp = /^1?\s?(\(\d{3}\)|\d{3})([-\s]?)\d{3}[-\s]?\d{4}$/;
       
 checkBtn.addEventListener('click', function() {
   const phoneNumber = userInput.value.trim();

if (!phoneNumber) {
  alert('Please provide a phone number');
  return;
  }

if (phoneRegExp.test(phoneNumber)) {
  resultsDiv.textContent = `Valid US number: ${phoneNumber}`;
  resultsDiv.classList.add('valid');
  resultsDiv.classList.remove('invalid');
 } else {
   resultsDiv.textContent = `Invalid US number: ${phoneNumber}`;
   resultsDiv.classList.add('invalid');
   resultsDiv.classList.remove('valid')
   }
   });

clearBtn.addEventListener('click', function() {
  resultsDiv.textContent = '';
  resultsDiv.classList.remove('valid', 'invalid');
});

userInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    checkBtn.click(); 
  }
});
