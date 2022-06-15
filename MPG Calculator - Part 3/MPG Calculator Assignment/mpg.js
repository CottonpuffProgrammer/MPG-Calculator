/**
 * Checks if form data is valid
 * @returns {boolean} Returns true is all data is valid on the form, or false is something is invalid
 */
function isValid() {
    //function should validate form entries
    //and return true or false corresponding to validity
    var miles = getElement("miles").value;
    var gallons = getElement("gallons").value;
    if (isNumber(miles) == true) {
        getElement("mileserror").innerHTML = "Must be a number!";
        return false;
    }
    else if (isNumber(gallons) == true) {
        getElement("gallonserror").innerHTML = "Must be a number!";
        return false;
    } // the above two if statements check for invalid input
    else if (isNumber(miles) == false && isNumber(gallons) == false) {
        getElement("mileserror").innerHTML = "";
        getElement("gallonserror").innerHTML = "";
        return true;
    } // the above checks for valid input
    return false; // display error messages if inputs are invalid
}
// Returns whether input is a number or not
function isNumber(isNum) {
    return isNaN(isNum);
}
/**
 * This function should be called when the calculate button is clicked
*/
function main() {
    //check if data is valid
    //if data is valid
    if (isValid() == true) {
        displayResults(mpg);
    }
    //calculate MPG
}
/** document.getElementById().innerHTML */
function getElement(id) {
    // returns an element as a HTMLInputElement
    return document.getElementById(id);
}
/**
 * Displays given MPG on the form
 * @param {string|number} milesPerGallon String or number containing the miles per gallon
 */
function displayResults(milesPerGallon) {
    //display the MPG result in a textbox
    getElement("mpg").value = milesPerGallon;
}