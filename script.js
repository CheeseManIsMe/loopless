let inputVar = ``;
let inputCalc = [];


function numInput() {
    inputVar = prompt(`Input a number and get back all the numbers (by ones) counting up to it!`)
    inputCalc.push(inputVar);
    numCalc();
}

function numCalc() {
    if(inputVar === 1){
        alert(inputCalc);
        inputCalc = [];
    } else if(inputVar > 1) {
        inputVar = inputVar - 1;
        inputCalc.push(inputVar);
        numCalc();
    } else if(inputVar !== 1) {
        alert(`Please input a whole, positive number!`)
    }
}

