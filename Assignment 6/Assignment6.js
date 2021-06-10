//Input number
function number(num) {
    var result = document.getElementById("screen");
    result.value += num;
}
// Calculation
function result() {
    var result = document.getElementById("screen");
    result.value = eval(result.value);
}
//Clear screen
function clr() {
    var result = document.getElementById("screen");
    result.value = "";
}
// Delete a character
function del() {
    var number = document.getElementById("screen");
    var remove = number.value;
    remove = remove.slice(0,remove.length-1);
    number.value = remove;
}
