
var m = 3;
var n = 1;

var o = 0;
var IndexOfTableArray = 1;
var IndexOfTableArray2 = 1;

var list1 = [];
var list2 = [];
var list3 = [];

///////////////////////////////////SECTION I////////////////////////////////

for(i=1; i <= m; i +=1){
    
        list1.push(n);
        n++;
    

    }
    
   



console.log(list1);



///////////////////////////////////SECTION I////////////////////////////////




///////////////////////////////////SECTION II////////////////////////////////
for(j=1; j <= list1.length; j +=1){
    
        
        for(i=1; i <= list1.length; i +=1){
            list1[o] = list1[o] + IndexOfTableArray*2

            console.log("this is list1", list1, "this is IndexOfTab..",IndexOfTableArray, "This is o", o);

            console.log("Multiplying...",list1[o]);//* IndexOfTableArray)

            TestListElementsAgainstIndex();
            
            o +=1;
 
        }
        IndexOfTableArray +=1;
    o = 0;

    console.log("this is list1", list1, "this is IndexOfTab..", IndexOfTableArray);
    console.log("UUS TSYKKEL");
}


console.assert(o <= m);
console.assert(false, o <= m);

///////////////////////////////////SECTION II////////////////////////////////



//////////////////////////////////SECTION III////////////////////////////////





//i use two assertionsStyle, so i can visually see that they are okay, the first does not print and the second prints true, with message


console.assert(list1.length === m);
console.assert(false, list1.length === m, "condition is OKAY");

console.assert(typeof IndexOfTableArray === "number");
console.assert(false, typeof IndexOfTableArray === "number", "condition is OKAY" );
console.log("loop valine", o);

function TestListElementsAgainstIndex(){
    //let o = 0; 
    //let p = 0
       

   // for(i=1; i <= m; i +=1){
        console.log("sisene O", o, list1,list2,list3,  IndexOfTableArray);
        //console.log(m,n, IndexOfTableArray, o);    
        console.log("Kontroll Multiplying...kohal O %d",list1[o], list1[o] , "see on kontroll tehe", (1 * o + 1)*IndexOfTableArray);
        console.log(list1[o] * IndexOfTableArray, (1 * o + 1)*IndexOfTableArray);


        console.assert((list1[o] ) === (1 * o + 1) * IndexOfTableArray);
        console.assert(false, list1[o] === (1 * o + 1)*IndexOfTableArray);
    
        //o+=1;
    
 //}
 //IndexOfTableArray++;
}

///////////////////////////////////SECTION III////////////////////////////////