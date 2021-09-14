
var m = 3;
var n = 1;
var o = 0;
var list1 = [];
var list2 = [];

for(i=1; i <= m; i +=1){
    
    list1.push(n);
    n++;
    

}
console.log(list1);
//i use two assertions so i can visually see that they are okay, the first does not print and the second prints true, with message
console.assert(list1.length === m);
console.assert(false, list1.length === m, "condition is OKAY");

list2 = list1;

var IndexOfTableArray = list1[0];

console.assert(typeof IndexOfTableArray === "number");
console.assert(false, typeof IndexOfTableArray === "number", "condition is OKAY" );

var n = 1;

function TestListElementsAgainstIndex(){
    let o = 0; 
    
    for(i=1; i <= m; i +=1){
        
        console.log(m,n, IndexOfTableArray, o);    
        console.log(list1[o] * IndexOfTableArray, (1 * o + 1));

        console.assert((list1[o] * IndexOfTableArray) === (1 * o + 1));
        console.assert(false, list1[o] * IndexOfTableArray === 1 * o + 1, "condition is OKAY");
    
        IndexOfTableArray++;
        o++;
    
 }
}


// - n : is the number you add in every iteration, so it scales according to the logic of the table
//       if the number

TestListElementsAgainstIndex();



for( i=1; i === list1.length; i +=1) {
    

}

/* 
3 testi:


assert array numbers are the result of multiplying the array element with the index

assert it is a type of array

*/
/* 
assert that the table elemnts are the result of multiplying the list by the indexedDB.

for loop : loop through the list and multiply by index : assert that each elemtn is the result of multiplying the array elemetn with the index

for(i = 1; i <= array.length; i+=1)

first i have the array  :  now take the first value of the array and put it into an index.an

var IndexOfTableArray = list1[0];

*/