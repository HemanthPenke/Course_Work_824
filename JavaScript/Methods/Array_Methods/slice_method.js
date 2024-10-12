//-------------------------slice method----------------

//slice method used to give a particular portion of the array 


let arr1=[98,87,48,73,398,356,56.664,533,678,23]

console.log("Intial array (arr1) elements are : " , arr1);

let arr2=arr1.slice(0,5)

console.log("Arr2 elements slice method is applied : " , arr2);

console.log("Intial array (arr1) elements are : " , arr1);


// it will not change the original array


/*

----------------Output--------------
Intial array (arr1) elements are :  [ 98,  87,  48, 73, 398, 356, 56.664, 533, 678, 23]
Arr2 elements slice method is applied : [ 98, 87, 48, 73, 398 ]
Intial array (arr1) elements are :  [ 98,  87,  48, 73, 398, 356, 56.664, 533, 678, 23]

*/
