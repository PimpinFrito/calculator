const calculator = document.getElementById("calculator");
const screen = document.getElementById('screen');
let currentNumber='';
let previousNumber='';
actionButton = '';

calculatorButtons = ['AC','+/-', '%', '/',
                        7,8,9, 'x',
                        4,5,6, '-',
                        1,2,3,'+',
                        0, '.','=']

actionButtons = calculatorButtons.filter(button=>
    isNaN(button)&&
    button != '.' &&
    button != 'AC'    
    );
                        
calculatorButtons.forEach(btn => {
    let button = document.createElement('div');
    button.textContent = btn;
    buttonContent = button.textContent;
    button.classList.add('box');

    //adding Button functions
    if (isNaN(buttonContent) && buttonContent != '.'){
        button.addEventListener('click', ()=>actionClicked(button.textContent))
    } else{
        button.addEventListener('click', ()=>numberClicked(button.textContent))
    }
    //done

    if(buttonContent == 0){
        button.style.gridColumn = '1/3';
    }
    calculator.appendChild(button);
});

const actionClicked = function (button){
    if(button == 'AC'){
        currentNumber = '';
        previousNumber = '';
    }else if(button == '+/-'){
        currentNumber *=-1;
        console.log(currentNumber);
    }else if (previousNumber == ""){
        previousNumber = currentNumber;
        actionButton = button;
        currentNumber = "";
        return;
    }else if(button == '='){
        operate(actionButton);   
        return;
        
    }else{
        operate(actionButton); 
        actionButton = button;
        return; 
    }   
    updateScreen();
}

const operate = function(button){
    currentNumber = Number(currentNumber);
    previousNumber = Number(previousNumber);
        console.log(previousNumber+button+currentNumber);
    switch(button){
        case '%':
            currentNumber = previousNumber%currentNumber;
            break;
        case '/':
            currentNumber = previousNumber/currentNumber;
            break;
        case 'x':
            currentNumber = previousNumber*currentNumber;
            break;
        case '-':
            currentNumber = previousNumber - currentNumber;
            break;
        case '+':
            currentNumber += previousNumber;
            break;
    }
    updateScreen(); 
    console.log('Solution = '+currentNumber);
    previousNumber = currentNumber;
    currentNumber = '';
    return; 
}

const numberClicked = function(button){
    currentNumber+=button;
    currentNumber = Number(currentNumber);
    
    updateScreen(currentNumber);
}

const updateScreen = function(){
    screen.textContent = currentNumber;
}



