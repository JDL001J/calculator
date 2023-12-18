screen = document.getElementById('text-box');

string = '0'
secondString = ''

// numObject = {
//      firstNum: 
//      secondNum:
//      operation:
// }

display()

function operate(number){
     if(string == '0' && string.length == 1){
          string = `${number}`
     }
     else{
          string =  string.concat(number);
          console.log("works?");
          display()
     }
     console.log("works?");
          display()
    
}

function clean() {
     string = '0';
     console.log("works?");
     display()
}

function display(){
     screen.value = string
}

