//-------------------------splice method----------------

//splice method used to (delete or replace) the particular portion of the array (or) add the element in the particular portion of the array


let arr1=[98,87,48,73,398,356,56.664,533,678,23]

console.log("Intial array (arr1) elements are : " , arr1);

let arr2=arr1.splice(0,5)

console.log("Arr2 elements slice method is applied : " , arr2);

console.log("Intial array (arr1) elements are : " , arr1);

arr1.splice(3,0,"Hii")

console.log("Adding the element in the 3rd index : " , arr1)


// it will change the original array


/*

----------------Output--------------

Intial array (arr1) elements are :  [ 98,  87,  48, 73, 398, 356, 56.664, 533, 678, 23 ]
Arr2 elements slice method is applied :  [ 98, 87, 48, 73, 398 ]
Intial array (arr1) elements are :  [ 356, 56.664, 533, 678, 23 ]
Adding the element in the 3rd index :  [ 356, 56.664, 533, 'Hii', 678, 23 ]

*/