screen = document.getElementById('text-box');

string = '0';
firstString = '';
secondString = '';
operator = '';


display()

function operate(number){
     if(string == '0' && string.length == 1){
          string = `${number}`
     }
     else{
          string =  string.concat(number);
         display()
     }
          display()
    
}

function clean() {
     string = '0';
     display()
}

function display(){
     screen.value = string
     return string
}


function createFirstString(){
     firstString = display();
 
}

function createSecondString(){
     secondString = display();
    
     return secondString;
     
}




// operations


function add(){
     createFirstString();
     clean();
operator = '+'


}

function subtract(){
   
  
}

function divide(){
     
}

function multiply(){
     
}

function equal(){
     switch(operator){
          case "+":
          createSecondString();
   
          string = `${Number(firstString) + Number(secondString)}`;
          firstString = '';
          secondString = '';
      
          display();
          


     }


    



}