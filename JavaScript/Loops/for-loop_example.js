//Remove the duplicate elements in the array


var arr1=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]

var arr2=[]

for(var i = 0 ; i<arr1.length ; i++){
     
    if(arr2.indexOf(arr1[i]) === -1){
        arr2.push(arr1[i])
    }
    


    

}
console.log(arr2);



/*
--------------------------output-------------------
[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

*/
