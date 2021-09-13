


list1 = [1], [2], [3];
list2 = [];
var b;
var n = 1;
var m = 1;//kui ei onnestu alusta nullist ja tee exception

for(i=1; i<=2; i++){
    list1.push(n);
    n++;
    
}

console.log(list1);

list2.push(m);

for(i=1; i<=2; i++){
    
    console.log(list2);
    m++;
    list2[0] = m
   
}

//for loop, mis kaib labi yhe array ja korrutab selle teise arrayga




