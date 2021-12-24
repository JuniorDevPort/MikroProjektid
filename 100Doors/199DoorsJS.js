/*100 doors in a row are all initially closed. You make 100 passes by the doors. 
The first time through, you visit every door and toggle the door (if the door is closed, you open it; if it is open, 
  you close it).
The second time you only visit every 2nd door (door #2, #4, #6, ...).
The third time, every 3rd door (door #3, #6, #9, ...), etc, until you only visit the 100th door.

Question: What state are the doors in after the last pass? Which are open, which are closed?
*/
  

//esialgne array
var array = new Array(10);
 


  for(let allzeros=0; allzeros< array.length; allzeros++){
    array[allzeros] = 0;
    
  }

  //console.log(array);

  //now set up a for loop that changes every second element.

  //for loop has a iterator and i use the iterator to increase the indexed elemnt by 2

  //for(m = 0; m < 1;){
  for(var m = 1; m < 3;){

    console.log("M", m);

    for(let k = 0; k < array.length;){
      
      if(array[k]==0){

        array[k] = 1;
//kas siin pole ohtu, et ta hakkab valesid arve ümber muutma? noh kui index loogika ei eksi, siis see on okei.
      } else if(array[k]==1){
        array[k] = 0;
      }
      

      

      k = k + m;
      console.log(array);
      

    }
    var name = window. prompt("Enter your name: ");
    m++
  }
  









    
  
  