# ASSESSMENT 2: FOUNDATIONS OF JAVASCRIPT
## Interview Practice Questions

### Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

Consider the function:

var text = 'outside'
function logIt(){
  console.log(text)
  var text = 'inside'
}
logIt()


1a. Look at this Javascript function and try to predict what the console show.

The console.log(text) statement will output undefined to the console.

1b. Test the function. Explain why the function returned what it did.

  Your answer: var test is set outside of the function logIt but is not passed into the function as an argument. The console.log statement is before the variable assignment within the function so will not be set to 'inside' until after that line runs.

  Researched answer: Because of scope, not passing the variable text into the function logIt, and order of operations going from top to bottom within the function.


2. What is JSON?

  Your answer: Method to define objects in javascript

  Researched answer: Stands for JavaScript Object Notation. Is an open-standard file format that uses human-readable text to transmit data objects consisting of attribute–value pairs and array data types. Often used to replace .xml that had been used in the past.


3. What does CRUD stand for?

  Your answer: Create , Read , Update , Delete

  Researched answer: Create , Read , Update , Delete



4. What does are the 5 HTTP verbs?

  Your answer: Post , Get , Delete, 

  Researched answer: Post , Get , Put , Patch , Delete


5. What is a higher-order function?

  Your answer: A function that utilizes another function within itself.

  Researched answer: A higher-order function is a function that can take another function as an argument, or that returns a function as a result. 


6. STRETCH: What is a closure, what is it good for and how do you recognize one?

  Your answer: Complete guess: Something that closes loose ends in code; variables that are defined but not used, etc.

  Researched answer: A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.


7. STRETCH: What is an API?

  Your answer: Programming interface that allows interactions between separate components. Often used to pull information from external sources, like from a database.

  Researched answer: Stands for Application Programming Interface. Is an interface or communication protocol between a client and a server intended to simplify the building of client-side software. It has been described as a “contract” between the client and the server, such that if the client makes a request in a specific format, it will always get a response in a specific format or initiate a defined action.


### Additional Feedback Questions.

1. Do you have a suggestion for a Check In question?
Do you follow any sports? If so any teams that you root for?


2. What was your favorite topic this week?
React in general. I have always wondered how websites display a fully featured page with an extremely barebones index.html file. I see that React can be one method to do that.


3. What was your "A-ha!" moment this week?
During the lightbulb app challenge. Figuring out how to use this.state and this.setState