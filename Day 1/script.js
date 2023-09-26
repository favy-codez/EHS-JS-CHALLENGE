/*
Challenge 1A
create an arrow function named ehc that accepts a single argument beneficiary and returns a greeting string: Hello, {beneficiary}! export the greet function as default
*/

const ehc = (beneficiary) => {
    beneficiary = prompt("Enter name");
    alert(`Hello, ${beneficiary}`);
    console.log(`Hello, ${beneficiary}`);
}

// ehc()

// export default ehc;

// CHALLENGE TWO
/*
- Initially, create an input field with the id 'nameInput' and a submit button with the id 'submitBtn'. You will add event listeners to both elements in JavaScript to achieve the following requirements:

When the user clicks on the submit button without entering any text, display an error message with id 'errorMsg'.

When the user starts typing in the input field after receiving the error message, the error message should be removed.

Create a 'success' div with id 'successMsg', which will appear after successful validation. Success div should be initially hidden.

Display the success message when the input field is not empty, and the submit button is clicked.

Tasks
Create an input field with id 'nameInput' and a button with id 'submitBtn'

Implement a check to verify that the input name field is not empty when the submit button is clicked. Show an error message with id 'errorMsg' if the input field is empty.

Remove the error message when the user types in the name input field after receiving the error message.

Create a 'success' div with id 'successMsg', which will appear after successful validation. Success div should be initially hidden.

Display the success message when the input field is not empty, and the submit button is clicked.
*/
let name = document.getElementById("nameInput");
let btn = document.getElementById("submitBtn");
const errorMsg = document.getElementById('errorMsg');
const successMsg = document.getElementById('successMsg');

// Add an input event listener to the name input field
name.addEventListener('input', function() {
    errorMsg.style.display = 'none';
});

// Add a click event listener to the submit button
btn.addEventListener('click', function() {
     // Remove leading/trailing spaces
     const enteredName = name.value.trim();
    if (enteredName === '') {
        errorMsg.style.display = 'block';
        successMsg.style.display = 'none';
    } else {
        errorMsg.style.display = 'none';
        successMsg.style.display = 'block';
    }
});

