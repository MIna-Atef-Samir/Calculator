let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let op = document.querySelector("#op");
let result = document.querySelector("#result");
let calc = document.querySelector("#calc");


calc.addEventListener("click",()=>{

    if(op.value == "+"){
        result.textContent = +num1.value + +num2.value
    }else if(op.value == "-"){
        result.textContent = +num1.value - +num2.value
    }else if(op.value == "*"){
        result.textContent = +num1.value * +num2.value
    }else if(op.value == "/"){
        result.textContent = +num1.value / +num2.value
    }else if(op.value == "%"){
        result.textContent = +num1.value % +num2.value
    }else{
        result.textContent = "Please use one of these Operations: ( + , - , * , / , % )"
    }

    console.log(`${num1.value} ${op.value} ${num2.value} ${typeof(result.textContent)}`);
})