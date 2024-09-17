// Function to append clicked button values to the display
function appendToDisplay(value) {
    let inputBox = document.getElementById('inputBox');
    inputBox.value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('inputBox').value = '';
}

// Function to calculate and display the result
function calculateResult() {
    let inputBox = document.getElementById('inputBox');
    try {
        inputBox.value = eval(inputBox.value); // Evaluate the expression in the display
    } catch (error) {
        inputBox.value = 'Error'; // Display error if input is invalid
    }
}
