//////////////////////////////////////////////////////////////////
//i use two assertionsStyle, so i can visually see that they are okay, the first does not print and the second prints true, with message


console.assert(list1.length === m);
console.assert(false, list1.length === m, "condition is OKAY");

console.assert(typeof IndexOfTableArray === "number");
console.assert(false, typeof IndexOfTableArray === "number", "condition is OKAY" );

function TestListElementsAgainstIndex(){
    let o = 0; 
    let p = 0

    for(i=1; i <= m; i +=1){
        
        //console.log(m,n, IndexOfTableArray, o);    
        console.log(list1[o] * IndexOfTableArray, (1 * o + 1));

        console.assert((list1[o] * IndexOfTableArray) === (1 * o + 1));
        console.assert(false, list1[o] * IndexOfTableArray === 1 * o + 1, "condition is OKAY");
    
        o+=1;
    
 }
 IndexOfTableArray++;
}
//////////////////////////////////////////////////////////////////