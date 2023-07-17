document.getElementById("myButton").addEventListener('click', myWindow)
function myWindow()
{
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var goal = document.getElementById('goal').value;
    var emailValid = false;

    var monB = document.getElementById('mondayBreakfast').value;
    var monS1 = document.getElementById('mondaySnack1').value;
    var monL = document.getElementById('mondayLunch').value;
    var monS2 = document.getElementById('mondaySnack2').value;
    var monD = document.getElementById('mondayDinner').value;

    var tuesB = document.getElementById('tuesBreakfast').value;
    var tuesS1 = document.getElementById('tuesSnack1').value;
    var tuesL = document.getElementById('tuesLunch').value;
    var tuesS2 = document.getElementById('tuesSnack2').value;
    var tuesD = document.getElementById('tuesDinner').value;

    var wedB = document.getElementById('wedBreakfast').value;
    var wedS1 = document.getElementById('wedSnack1').value;
    var wedL = document.getElementById('wedLunch').value;
    var wedS2 = document.getElementById('wedSnack2').value;
    var wedD = document.getElementById('wedDinner').value;

    var thursB = document.getElementById('thursBreakfast').value;
    var thursS1 = document.getElementById('thursSnack1').value;
    var thursL = document.getElementById('thursLunch').value;
    var thursS2 = document.getElementById('thursSnack2').value;
    var thursD = document.getElementById('thursDinner').value;

    var friB = document.getElementById('friBreakfast').value;
    var friS1 = document.getElementById('friSnack1').value;
    var friL = document.getElementById('friLunch').value;
    var friS2 = document.getElementById('friSnack2').value;
    var friD = document.getElementById('friDinner').value;

    var satB = document.getElementById('satBreakfast').value;
    var satS1 = document.getElementById('satSnack1').value;
    var satL = document.getElementById('satLunch').value;
    var satS2 = document.getElementById('satSnack2').value;
    var satD = document.getElementById('satDinner').value;

    var sunB = document.getElementById('sunBreakfast').value;
    var sunS1 = document.getElementById('sunSnack1').value;
    var sunL = document.getElementById('sunLunch').value;
    var sunS2 = document.getElementById('sunSnack2').value;
    var sunD = document.getElementById('sunDinner').value;

    let regex = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!regex.test(email)) 
    {
        alert('Please enter a valid Email address.');
    }
    else if (regex.test(email)) 
    {
        emailValid = true;
    }

    if (emailValid) 
    {
        var output = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Meal Plan</title>
            </head>
            <body>
                <p>Hello ${name} see below for your mean plan!</p>
                <p>Email: ${email}</p>
                <p>Goal for the week: ${goal}</p>
                <br>
                <p>Monday:</p>
                <p>Breakfast - ${monB}</p>
                <p>Snack 1 - ${monS1}</p>
                <p>Lunch - ${monL}</p>
                <p>Snack 2 - ${monS2}</p>
                <p>Dinner - ${monD}</p>
                <br>
                <p>Tuesday:</p>
                <p>Breakfast - ${tuesB}</p>
                <p>Snack 1 - ${tuesS1}</p>
                <p>Lunch - ${tuesL}</p>
                <p>Snack 2 - ${tuesS2}</p>
                <p>Dinner - ${tuesD}</p>
                <br>
                <p>Wednesday:</p>
                <p>Breakfast - ${wedB}</p>
                <p>Snack 1 - ${wedS1}</p>
                <p>Lunch - ${wedL}</p>
                <p>Snack 2 - ${wedS2}</p>
                <p>Dinner - ${wedD}</p>
                <br>
                <p>Thursday:</p>
                <p>Breakfast - ${thursB}</p>
                <p>Snack 1 - ${thursS1}</p>
                <p>Lunch - ${thursL}</p>
                <p>Snack 2 - ${thursS2}</p>
                <p>Dinner - ${thursD}</p>
                <br>
                <p>Friday:</p>
                <p>Breakfast - ${friB}</p>
                <p>Snack 1 - ${friS1}</p>
                <p>Lunch - ${friL}</p>
                <p>Snack 2 - ${friS2}</p>
                <p>Dinner - ${friD}</p>
                <br>
                <p>Saturday:</p>
                <p>Breakfast - ${satB}</p>
                <p>Snack 1 - ${satS1}</p>
                <p>Lunch - ${satL}</p>
                <p>Snack 2 - ${satS2}</p>
                <p>Dinner - ${satD}</p>
                <br>
                <p>Sunday:</p>
                <p>Breakfast - ${sunB}</p>
                <p>Snack 1 - ${sunS1}</p>
                <p>Lunch - ${sunL}</p>
                <p>Snack 2 - ${sunS2}</p>
                <p>Dinner - ${sunD}</p>
                <br>
                <button onclick="window.print()">Print Meal Plan</button>
                <button onclick="download()">Download Meal Plan</button>
                <script>
                    function download()
                    {
                        var content = document.documentElement.outerHTML;
                        var blob = new Blob([content], { type: "text/html" });
                        var url = URL.createObjectURL(blob);
                        var a = document.createElement("a");
                        a.href = url;
                        a.download = "meal_plan.html";
                        a.click();
                        URL.revokeObjectURL(url);
                    }
                </script>
            </body>
            </html>
        `;
    
        flyWindow = window.open();
        flyWindow.document.write(output);
    }
}

document.getElementById("resetButton").addEventListener('click', resetForm)
function resetForm()
{
    document.getElementById("myForm").reset();
}