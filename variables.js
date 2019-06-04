/*
The key difference between the var, let and const is that, the var is not 
restricted to a block within the function and is to hold variables and the let
command for variables is restricted with the block it is defined for use. lastly the const 
is restricted within the block but can not be used for reassigning variables

**/

// defining a function to showcase the use of let, const and variable


function showName(){
  
    var nickName  = "Balanta";
    const lastName = "Lawal";
    let  firstName = "Bola";
    
      if (firstName){
        
        console.log("Your First Name is " + " " + firstName);
        
      }
      if (lastName) {
        
        console.log("your Last Name is " + " " + lastName);
      }
     
     
      console.log("Also Known as " + " " + nickName);
      
    }
    
     showName();    
