// For hands-on practice with the following information, visit https://www.codecademy.com/
// https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
/*

comments
	multiline comments and single-line comments are generally used to document your code
	they can also be used to prevent code from being evaluated during development

data types
	strings: "Hello, world!"
	numbers : 1.9
	booleans: true
	null: null

properties
	instantiations of data types can have properties, such that you can retrieve
	some info about them by applying said properties: "hello".length

built-in methods
	instantiations of data types can also have built-in functionality (i.e. methods) that
	can calculate/produce new information by performing actions that generate an output
		"Hello".toUpperCase()
		"Hi".startsWith('H')

QUESTION: difference between a property and a method?	

built-in objects
	provide methods which can be used without instantiating a datatype
		Math.ceil(1.9)
		Number.isInteger(2017)
		Math.floor(Math.random() * 10)

operators
	arithmetic: +, -, *, /
	assignment: =
	boolean: ===, !==, !

variables
	declaration: let myVariable;
	assignment: myVariable = 2;
	evaluation: myVariable;

functions
	// create an alert box that displays the message "Hello, world!"
	function myFunction() {
    	alert("Hello, world!");
	}

conditionals
	if (boolean expression) {
		do something
	} else {
		do something different
	}

events
	// define a function that is executed whenever the user clicks the website
	document.querySelector('html').onclick = function() {
	    alert('Ouch! Stop poking me!');
	}

*/

/*
// query for the selector "header" in the HTML document
// store the result in variable "myHeading"
// assign the string "Hello, world!" to the selector's "textContent" property
let myHeading = document.querySelector("header");
myHeading.textContent = "Hello, world!";
*/