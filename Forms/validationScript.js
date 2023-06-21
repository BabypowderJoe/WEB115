document.getElementById('myForm').addEventListener('submit', function(event) 
{
  var inputElement = document.getElementById('inputField'); // Retrieve the input field element
  var inputValue = inputElement.value;

  var regex = /^[a-zA-Z0-9]*$/; // Validate the input value using a regular expression
  if (!regex.test(inputValue)) 
  {
    alert('Invalid format!'); // Display error message for non-alphanumeric values
    event.preventDefault(); // Prevent form submission for non-alphanumeric values
  }
  else if (regex.test(inputValue)) 
  {
    alert('Input is valid, form submitted.'); // Display confirmation message upon successful validation and submission
  }
});