function add(number1,number2){
    return number1 + number2;
}
document.getElementById('add').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});
function subtract(numb1,numb2){
    return numb1 - numb2;
}
document.getElementById('subtract').addEventListener('click', function() {
    const numb1 = parseFloat(document.getElementById('number1').value) || 0;
    const numb2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = subtract(numb1, numb2);
    document.getElementById('calculation-result').textContent = result;
});
function multiply(numb1,numb2){
    return numb1 * numb2;
}
document.getElementById('multiply').addEventListener('click',function(){
    const numb1 = parseFloat(document.getElementById('number1').value) || 0;
    const numb2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = multiply(numb1,numb2);
    document.getElementById('calculation-result').textContent = result;
});
function divide(num1,num2){
    return num1 / num2;
}
document.getElementById('divide').addEventListener('click', function(){
    const num1 = parseFloat(document.getElementById('number1').value)  || 0;
    const num2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = divide(num1,num2);
    document.getElementById('calculation-result').textContent = result;
});