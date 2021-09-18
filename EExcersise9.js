/* 
Write a guessing game where the user has to guess a secret number. 
After every guess the program tells the user whether their number was too large or too small. 
At the end the number of tries needed should be printed. 
It counts only as one try if they input the same number multiple times consecutively.
*/
m = 100;

//n = prompt("What is your name?");


//console.log("asd");

let a=3;
for(i=1;i<=3; i++){
    
    
    
    n = prompt("What is your name?", "Tries Left:" + a);
    a--;
    console.log(i);
    

    
    if(i==3){
        prompt("You have failed", "Press any key to exit");
    break;
    }
    
    if(n==1){
        prompt("You have been successful", "Press any key to exit");
    break;
    
}





}


//
 
//if the promt is equal to the set value
//assert the value has to be a string
//




    
