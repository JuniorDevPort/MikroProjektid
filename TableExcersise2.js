
var m = 3;
var n = 1;
var list1 = [];

for(i=1; i <= m; i += 1){
    
    list1.push(n);
    n++;
    

}

console.log(list1);
console.assert(list1.length === m);
console.assert(false,list1.length === m, "condition : OKAY");

/* 
3 testi:


assert array numbers are climbing +1 fashion

assert it is a type of array

*/

assert that the table elemnts are the result of multiplying the list by the indexedDB.

for loop : loop through the list and multiply by index : assert that each elemtn is the result of multiplying the array elemetn with the index

for(i = 1; i <= array.length; i+=1)