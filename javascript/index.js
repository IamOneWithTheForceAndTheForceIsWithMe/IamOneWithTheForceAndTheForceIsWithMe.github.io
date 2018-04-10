'use strict';

(function() {

    const buttonsArray = document.getElementsByClassName("buttonsClass");
    const cleaningButton = document.getElementById("clearingButtonId");
    const backSpaceButton = document.getElementById("backSpaceButtonId");
    const equalingButton = document.getElementById("equalingButtonId");
    const arrowButton = document.getElementById("arrowButtonId");
    const manual = document.getElementById("manualId");
    const arrowImage = document.getElementById("arrowImageId");
    let inputString = document.getElementById("inputId");
    let result = document.getElementById("resultId");
    actionAssigning();

    function actionAssigning() {
        for (let i = 0; i < buttonsArray.length; i++){
            buttonsArray[i].addEventListener('click', element =>{
                element.preventDefault();
                inputString.innerHTML +=buttonsArray[i].value;
            })
        }
        cleaningButton.onclick = element =>{
            element.preventDefault();
            inputString.innerHTML = "";
            result.innerHTML = "0";
        };
        backSpaceButton.onclick = element =>{
            element.preventDefault();
            inputString.innerHTML = inputString.innerHTML.slice(0,-1);
        };
        equalingButton.onclick = element =>{
            element.preventDefault();
            let expression = eval(inputString.innerHTML);
            if (isNaN(expression)){
                result.innerHTML = "Entered expression is not correct!"
            } else {
                result.innerHTML = expression;
            }
        };
        arrowButton.addEventListener("click", () =>{
            let visibilityValue = manual.style.visibility;
            if (visibilityValue === "visible"){
                manual.style.visibility = "hidden";
                arrowImage.src = "css/pictures/right_arrow.png";

            } else {
                manual.style.visibility = "visible";
                arrowImage.src = "css/pictures/left_arrow .png";
            }
        });
    }

    function log(base, value){
        return Math.log(value)/Math.log(base);
        //https://en.wikipedia.org/wiki/Common_logarithm#Numeric_value
    }

    function fact(value){
        if (value === 0 || value === 1){
            return 1;
        }
        let solution = 1;
        for (let i = 1; i <= value; i++){
            solution *=i;
        }
        return solution
    }
}) ();
