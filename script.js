'use strict';
const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');

for( let i =0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(e){
    const button = e.target;
    const displayNum = display.textContent;
    // checking if the display ends with an invalid input
    var endsWith = /(([\W]|\x)[=])$/
    if (displayNum === '0'|| displayNum === 'syntax error' || displayNum === 'undefined'|| displayNum === 'Infinity' ) {
      display.textContent = button.textContent;
    }
    else {
      display.textContent = displayNum + e.target.textContent;
      
    }
    
    if (e.target.innerHTML === 'AC') {
      display.textContent = '0';

    }
    if (e.target.innerHTML == '=' && endsWith.test(display.innerHTML) == false) {
      let user = display.innerHTML.split(/[^0-9+.x%^÷-]/);  
      let users = user.slice(0, -1).join(" ");
      let answer;
      if ((/([-]{2,})/g).test(users)) {
        let new1 = users.replace(/([-]{2,})/g, '+');
        
        answer = Function("return" +  ` ${new1} `) ();
        display.innerHTML = answer;
      }
      
      else if((/([+]{2,})/g).test(users)) {
        let new1 = users.replace(/([+]{2,})/g, '+').slice(-1);
        
        answer = Function("return" +  ` ${new1} `) ();
        display.innerHTML = answer;
          
      }
      else if(users.includes('÷÷') |users.includes('xx') |users.includes('^^') |users.includes('%%')) {
      
        answer = 'syntax error';
        display.innerHTML = answer;
        
      } 

      else if(users.includes('÷')) {
        let new1 = users.replace(/\÷/g, '/');
        
         answer = Function("return" +  ` ${new1} `) ();
        
        display.innerHTML = answer;
        
      }
      else if(users.includes('x')) {
        let new1 = users.replace(/\x/g, '*');
        answer = Function("return" +  ` ${new1} `) ();
        display.innerHTML = answer;
        
      }
      else if(users.includes('^')) {
        let new1 = users.replace(/\^/g, '**');
        answer = Function("return" +  ` ${new1} `) ();
        display.innerHTML = answer;
        
      }

     else {
        answer = Function("return" +  ` ${users} `) ();
        display.innerHTML = answer;
      }
    }
    else if(e.target.innerHTML == '='&& endsWith.test(display.innerHTML) == true){
      
      display.innerHTML = 'syntax error'
    }
  });
}




