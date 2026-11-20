function addition(num1, num2) {
  return num1 + num2;
}

function subtraction(num1, num2) {
  return num1 - num2;
}   

function multiplication(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    if (num2 === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return num1 / num2;
}
function modulus(num1, num2) {
    if (num2 === 0) {
        throw new Error("Modulus by zero is not allowed.");
    }
    return num1 % num2;
}

module.exports = {
    addition,
    subtraction,
    multiplication,
    division,
    modulus
};