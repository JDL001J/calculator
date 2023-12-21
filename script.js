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
     createFirstString();
     clean();
operator = '-'
  
}

function divide(){
     createFirstString();
     clean();
operator = '/'
}

function multiply(){
     createFirstString();
     clean();
operator = 'X'
}

function getOperator(){
     switch(operator){
          case '+':
               string = `${Number(firstString) +  Number(secondString)}`;
          break
          
          case '-':
               string = `${Number(firstString) -  Number(secondString)}`;
          break

          case 'X':
               string = `${Number(firstString) *  Number(secondString)}`;
          break

          case '/':
               string = `${Number(firstString) /  Number(secondString)}`;
          break

     }



}

function equal(){
    
          createSecondString();

          getOperator();
   
         
          firstString = '';
          secondString = '';
      
          display();



     


    



}