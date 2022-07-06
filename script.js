'use strict';
const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');

for( let i =0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(e){
    const button = e.target;
    const displayNum = display.textContent;
    if (displayNum === '0'|| displayNum === 'syntax error' || displayNum === 'undefined'|| displayNum === 'Infinity' ) {
      display.textContent = button.textContent;
    }
    else {
      display.textContent = displayNum + e.target.textContent;
      
    }
    
    if (e.target.innerHTML === 'AC') {
      display.textContent = '0';

    }

    if (e.target.innerHTML == '='/*&& endsWith.test(display.innerHTML) == false)*/) {
      let user = display.innerHTML.split(/[^0-9+.x%^÷-]/);  
      let users = user.slice(0, -1).join(" ");
      let answer;
      if ((/([-][-])/g).test(users)) {
        let new1 = users.replace(/([-][-])/g, '+');
        validate(new1)
      }
      else if((/([+]{2,})/g).test(users)) {
        let new1 = users.replace(/([+]{2,})/g, '+');
        validate(new1);
        console.log(answer);
      }
      else if(users.includes('÷÷') |users.includes('xx')) /*|users.includes('^^') |users.includes('%%'))*/ {
        answer = 'syntax error';
        display.innerHTML = answer;
      }
      else if(users.includes('÷')) {
        let new1 = users.replace(/\÷/g, '/');
        validate(new1)
        
      }
      else if(users.includes('x')) {
        let new1 = users.replace(/\x/g, '*');
        validate(new1)
        
      }
      else if(users.includes('^')) {
        let new1 = users.replace(/\^/g, '**');
        validate(new1)
        
      }
      else {
        validate(users);
      }
    }
    
    function validate(prop) {
      try {
        let answer = Function("return" +  ` ${prop} ` ) ();
        display.innerHTML = answer;
      }
      catch(err) {
        display.innerHTML = 'syntax error';
      }
    }
  });
}




