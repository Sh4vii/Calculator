const display = document.querySelector("input");
const buttons = document.querySelectorAll("button");
let output = "";
const specialCharacters = ["%", "/", "-", "+", "=", "*"];

console.log(display, buttons);

const calculate = (btnValue) =>{

    if (btnValue === "=" && output !== "") {
        output = eval(output.replace("%", "/100"));
    }else if (btnValue === "AC"){
        output = "";
    } else if (btnValue === "DEL"){
        output = output.toString().slice(0,-1);
    } else {
        if (output === "" && specialCharacters.includes(btnValue)) return;
          output += btnValue;
    }
    display.value = output;
}

buttons.forEach((button)=>{
    
button.addEventListener("click", (e)=> calculate(e.target.dataset.value));

});
 