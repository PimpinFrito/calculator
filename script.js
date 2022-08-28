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

const pressed = function(button){
    if (!(isNaN(button.textContent))){
        screen.textContent = button.textContent;
    }else{
        screen.textContent = `Not A Number: ${button.textContent}`;
    }
}

