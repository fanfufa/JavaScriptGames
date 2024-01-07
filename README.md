<h1>Rock, Paper , Scissors : Game in JavaScript</h1>
<div>
<img aling="center" with=40px height=40px src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"/>
<img aling="center" with=40px height=40px src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"/>
</div>

This is a basic and fun project that I did by following the tutotrial from the channel "freeCodCamp"

I used the following JavaScript methods:
<ul>
<li>getElementbyId()</li>
<li>querySelectorAll()</li>
<li>querySelector()</li>
<li>forEach()</li>
<li>addEventListener()</li>
<li>Math.random()</li>
<li>Math.floor()</li>
<li>Math.ceil()</li>
<li>inner.HTML()</li>
<li>e.target.id()</li>
<li>functions and variables</li>
</ul>

I have already known most of the methods used, but there are some that I don't know and I wanna share here:

<h3>Math.random()</h3> The computer generate a random number (the name is kinda obvious)
<h3>Math.floor()</h3> This round down a decimal number --> It's pretty important here because the method Math.random can generate decimal numbers
<h3>Math.ceil()</h3> It does the same thing that the Math.floor, but instead of round down it round up 
<h3>addEventListener()</h3> Here you have a method that you program an action that will happen when an event (that you define) is called. This is method structure: element.addEventListener(event, function). <br><br>
<b> Example: </b> <br>
   | possibleChoices.addEventListener('click', (e) =>{ <br>
   |     userChoice = e.target.id; <br>
   |     userChoiceDisplay.innerHTML  = userChoice <br>
   |     generateComputerChoice(); <br>
   |     getresult(); <br>
   | })) <br> <br>
   | 
   | <b> Explanation:</b> <br>
   |   - Element (possibleChoices): The 'possibleChoices' const variable references an Id at the HTML <br>
   |   - Event ('click'): When you click on the button that 'possibleChoices' is referencing (check on the code) <br>
   |   - Function ((e) => {...}): An arrow function called when the event click occurs  <br><br>
   | <b> Inside the function:</b> <br>
   |   -  userChoice = e.target.id --> Set the variable 'userChoice' to the ID of the clicked element  <br><br>
   |   -  userChoiceDisplay.innerHTML  = userChoice --> Update the HTML to display the result of the selected ID stored in the `userChoice` variable <br><br>
   |   -  generateComputerChoice(); --> Call 'generateComputerChoice' function <br><br>
   |   -  getresult(); --> Call 'getresult' function


<h2> References </h2>
<span style="color:red"> Youtube video: </span> Learn JavaScript by Building 7 Games - Full Course = https://www.youtube.com/watch?v=ec8vSKJuZTk <br>
<span style="color:blue"> Youtube channel: </span> freeCodeCamp = https://www.youtube.com/@freecodecamp
