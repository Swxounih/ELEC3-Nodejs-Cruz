const operations = require('./operation');
const formatter = require('./formatter');
const path = require('path');

const filename = path.basename(__filename);

console.log(`Running ${filename}...`);


const num1 = parseFloat(process.argv[2]);
const operator = process.argv[3];
const num2 = parseFloat(process.argv[4]);

if (isNaN(num1) || isNaN(num2)) {
    console.error('Error: Both arguments must be valid numbers.');
    process.exit(1);
};

if (!operator || process.argv.length < 5 || !Number.isFinite(num1) || !Number.isFinite(num2)) {
    console.error('Error: Invalid arguments.');
    process.exit(1);
} else {
    try{
        let result;
        let operatorName;
        switch (operator) {
            case '+':
                result = operations.addition(num1, num2);
                operatorName = 'addition';
                break;
            case '-':
                result = operations.subtraction(num1, num2);
                operatorName = 'subtraction';
                break;
            case '*':
                result = operations.multiplication(num1, num2);
                operatorName = 'multiplication';
                break;
            case '/':
                result = operations.division(num1, num2);
                operatorName = 'division';
                break;
            case '%':
                result = operations.modulus(num1, num2);
                operatorName = 'modulus';
                break;
            default:
                console.error('Error: Invalid operator. Please use +, -, *, /, or %.');
                process.exit(1);
        }
        console.log(formatter.formatResult(result, operatorName, num1, num2));
    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
}