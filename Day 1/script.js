/*
Challenge 1A
create an arrow function named ehc that accepts a single argument beneficiary and returns a greeting string: Hello, {beneficiary}! export the greet function as default
*/

const ehc = (beneficiary) => {
    beneficiary = prompt("Enter name");
    alert(`Hello, ${beneficiary}`);
    console.log(`Hello, ${beneficiary}`);
}

ehc()

export default ehc;