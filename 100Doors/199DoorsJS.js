/*100 doors in a row are all initially closed. You make 100 passes by the doors. 
The first time through, you visit every door and toggle the door (if the door is closed, you open it; if it is open, 
  you close it).
The second time you only visit every 2nd door (door #2, #4, #6, ...).
The third time, every 3rd door (door #3, #6, #9, ...), etc, until you only visit the 100th door.

Question: What state are the doors in after the last pass? Which are open, which are closed?

[Source http://rosettacode.org]

//kas 100 doori peaks olema sada kohahoidjat arrys?
//alustame 1 dor, mida avan ja sulgen
//door on boolean v''rtuss

*/


 


//kui uks on kinni, siis teed ta lahti, kui on lahtin siis teed kinni, 100 korda
/*

if door=0 then door=1, if door=1 then door=0

*/

/* 
for(let i=0; i<101; i++){
  //konsool loogi
  //console.log("a=",a);
  // console.log("i=",i);//
  
}

*/

//  nyyd ma pean lahendama k[SVGAnimatedNumberList, kuidas saada 100 ust?
//   mul on 1 uks, aga on vaja luua 100 Tk.
//   Kuidas luua sada tykki midagi?
//   ka loopiga, et automatiseerida.

  //pseudo: for loop 100 times and create a new element  
  //see element 

  //loon for loopi array jaoks
  //siin loon 100 kohaga array. dynaamiline array elements vb ka voimalus?
  var array = new Array(4);
 
//kui ma annan koigile 0 vaartuse ja hakkan sellega mangima?
//if tingimustes hakkan mangima?

  for(let i=0; i< 4; i++){
    array[i] = 0;
    
  }

  console.log(array);

  //siin pean andma i++ suurema sammu, muutujaga?
  //const a = 1;
  var a = 0;
  var b = 1

  //change every second element in array


for(i=1; i<3; i++){//(2 times per 4 array)
  array[b] = 2;
  b = b + 2;
  console.log(b);
}

console.log(array);









  
  // for(let j=0; j<2; j++){
    
    
  //   for(let i=0; i< 4; i++){
      
  //     if(array[a]==0){
  //       array[a] = 1;
  //      } else if(array[a]==1){
  //       array[a] = 3;
  //       console.log("a", a)
  //     }

  //     a++;
  //   }
    
  // }
  //   console.log(array);

    
  
  