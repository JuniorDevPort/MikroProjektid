var m = 9;
var n = 1;

var o = 0;
var Index1 = 0;
var Index2 = 2;

var list1 = [];
var list2 = [];


console.log(typeof list1);

for(i=1; i<=m; i+= 1){
  list1.push(n);

  list2.push(n);
  n++;

}


console.log(0, list2);


n = 1;
o = 0;


for(u = 1; u <= m; u++){


for(j=1; j<=m; j++){
  list1[Index1] = list2[Index1] *  n;
  
  Index1++;
  
}
//list2.splice(0, 0, Index1);
console.log(n, list1);
Index1 = 0;
n++;
}

