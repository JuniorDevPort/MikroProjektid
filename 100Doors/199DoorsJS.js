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

var a = 0;

a=1;

//kui uks on kinni, siis teed ta lahti, kui on lahtin siis teed kinni, 100 korda
/*

if door=0 then door=1, if door=1 then door=0

*/
if(a=0){
  a=1
}
console.log(a);
