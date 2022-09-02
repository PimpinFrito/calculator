let calculator = document.getElementById("calculator");
const screen = document.getElementById('screen');

calculatorButtons = ['AC','+/-', '%', '/',
                        7,8,9, 'x',
                        4,5,6, '-',
                        1,2,3,'+',
                        0, '.','=']
calculatorButtons.forEach(button => {
    let box = document.createElement('div');
    box.classList.add('box');
    box.textContent = button;
    box.addEventListener('click', ()=>pressed(box));
    if(button == 0){
        box.style.gridColumn = '1/3';
    }
    calculator.appendChild(box);
    
});

actionButtons = calculatorButtons.filter(button=>
    isNaN(button)&&
    button != '.' &&
    button != 'AC'    
    );

console.log(actionButtons);


const pressed = function(button){
    let buttonPressed = button.textContent;
    if (buttonPressed == 'AC'){ //Create button IDS for action buttons
        screen.textContent = '';
    }

    else if (!(isNaN(buttonPressed) || buttonPressed == '.')){
        total +=buttonPressed;
        screen.textContent = total;
    }else if(actionButtons.includes(buttonPressed)){
        screen.textContent = buttonPressed;

    }


/*     else if (!(isNaN(button.textContent) || button.textContent == '.')){
        let firstNumber = button.textContent; 
        screen.textContent += firstNumber;
    }else if(actionButtons.includes(button.textContent)){
            let action = button.textContent;
            console.log(action)
            
        } */  
    }

