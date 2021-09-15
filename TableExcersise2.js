
var m = 3;
var n = 1;
var o = 0;
var list1 = [];
//var list2 = [];

///////////////////////////////////SECTION I////////////////////////////////
for(i=1; i <= m; i +=1){
    
    list1.push(n);
    n++;
    

}
//console.log(list1);

var IndexOfTableArray = list1[0];

///////////////////////////////////SECTION I////////////////////////////////




///////////////////////////////////SECTION II////////////////////////////////


for(i=1; i <= list1.length; i +=1){
    console.log(list1);
    console.log(list1[o] * IndexOfTableArray)

}


///////////////////////////////////SECTION II////////////////////////////////



//////////////////////////////////SECTION III////////////////////////////////





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

TestListElementsAgainstIndex();
///////////////////////////////////SECTION III////////////////////////////////