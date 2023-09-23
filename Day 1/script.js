/*
Challenge 1A
create an arrow function named ehc that accepts a single argument beneficiary and returns a greeting string: Hello, {beneficiary}!
*/

const greeting = (beneficiary) => {
    beneficiary = prompt("Enter name");
    alert(`Hello, ${beneficiary}`)
}

greeting()