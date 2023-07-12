document.getElementById('myForm').addEventListener('submit', function(event) 
{
    var nameInput = document.getElementById('name');
    var nameValue = nameInput.value;

    var emailInput = document.getElementById('email');
    var emailValue = emailInput.value;

    let regex = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!regex.test(emailValue)) 
    {
        alert('Invalid Email!'); 
        event.preventDefault(); 
    }
    else if (regex.test(emailValue)) 
    {
        alert('Input is valid, form submitted.'); 
    }
});