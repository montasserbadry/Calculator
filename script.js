// calculate
let outPutScreen = document.getElementById("outPut-screen");

function display(num) {
    outPutScreen.value += num;
}
function Calculate() {
    try {
        outPutScreen.value = eval(outPutScreen.value)
    }
    catch (err) { alert("Invalid") }
}
function Clear() {
    outPutScreen.value = "";
}
function del() {
    outPutScreen.value = outPutScreen.value.slice(0, -1)
}
// calculate
