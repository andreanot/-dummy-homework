const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result span');
const signs = document.querySelectorAll('.sign');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const negative = document.querySelector('.negative');
const percent = document.querySelector('.percent');
const comma = document.querySelector('.comma');


let firstValue = "";
let isFirstValue = false;
let secandValue = "";
let isSecandValue = false;
let sign = "";
let resultValue = 0;

for(let i = 0 ; i < numbers.length; i++)
{
    numbers[i].addEventListener('click',(e) => {
        let atr = e.target.getAttribute('value');
        if(isFirstValue === false)
        {
            getFirstValue(atr);
        }
        if(isSecandValue === false)
        {
            getSecandValue(atr);
        }
    })
}

let calculator_input_Number_V = document.getElementById('calculator_input_Number');
let calculator_input_Number_Previews_V = document.getElementById('calculator_input_Number_Previews');

let Calculator_input_AC_V = document.getElementById('Calculator_input_AC');

let DisplayValue;

function display(DisplayValue){
    calculator_input_Number_V.value+=DisplayValue;

}

Calculator_input_AC_V.addEventListener('click',()=>{
    calculator_input_Number_V.value="";
    calculator_input_Number_Previews_V.value="";

})

function displaySolve(){

    let eq = calculator_input_Number_V.value;

    calculator_input_Number_Previews_V.value=eq;

    let y= eval(eq);

    calculator_input_Number_V.value=y;


}