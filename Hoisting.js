//  Variable Hoisting


/* Example 01: */
{
    var c = 'c'
}
console.log(c);


/*
In the Example 01, var is used to declare and variable and we have assigned a string value to it.
The var keyword is hoisted at the top level of file, console is printed.
*/


/* Example 02:  */

{
    const a = 'a';
}
console.log(a);

/*
In the Example 02, we have used const for variable declaration and assigned a value to it, 
as we know that const, let comes in lexical declaration (non-Hoisting) , we willl get the Reference error of a is undefined*/


// Function Hoisting

/* Example 11: */

console.log(square(5)); // 25

function square(n) {
  return n * n;
} 

/* 
 This code runs without any error, despite the square() function being called before it's declared. This is because the JavaScript interpreter hoists 
 the entire function declaration to the top of the current scope, so the code above is equivalent to: Example 12
*/

/* Example 12: */

console.log(square(5)); // 25

function square(n) {
  return n * n;
} 



/* Example 13: */

console.log(square(5)); // ReferenceError: Cannot access 'square' before initialization
const square = function (n) {
  return n * n;
};

/*
 Function hoisting only works with function declarations — not with function expressions. The following code will not work:
 */
