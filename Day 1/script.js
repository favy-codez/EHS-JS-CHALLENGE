/*
Challenge 1A
create an arrow function named ehc that accepts a single argument beneficiary and returns a greeting string: Hello, {beneficiary}!
*/

const ehc = (beneficiary) => {
    beneficiary = prompt("Enter name");
    alert(`Hello, ${beneficiary}`);
    console.log(`Hello, ${beneficiary}`);
}

ehc()