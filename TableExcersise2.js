
/* 
var list1 = [1, 2, 3, 4];

//console.log(list1);


list1[0] = list1[0] * list1[0];
list1[1] = list1[0] * list1[1];
list1[2] = list1[0] * list1[2];

//console.log(list1);

m = 6;
n = 1;
b = 0;//array index multiplier

for(i=1; i<=m; i++){
    var list1 = [1, 2, 3, 4];
    
console.log(list1);
n++;
}

*/


/* 
//create a for loop that puthe the number of elements inside the Array
m= 10; //number of elements in the table
n= 1;
b= 0; 
var list1 = [];

// this allows for the dynamic creation of a table
for(i=1; i <= m; i++){
    
    list1.push(n);
    n++;
    //  console.log(list1);

}

  //  b peab olema samasuur voi vordne elementide arvuga. sest b on see mida ma suurendan 1 vorra selleks, et 

//for the number of elements
*/
var list1 = [1, 2, 3, 4];

var a = list1;

//m= 3; 
n= 1;
b= 0; 

for(j=1; j <= list1.length ; j++){

    console.log("--------------------Esimene loop--------------------");

for(i=1; i <= list1.length ; i++){
    list1[b] = list1[b] * n;


    console.log(list1);
    console.log("index =",b ,"index value =", list1[b], "multiplied =", n  );


    //n++;
    b++;

}
n++;
b= 0;
//console.log(a);
list1 = [1, 2, 3, 4];
}









