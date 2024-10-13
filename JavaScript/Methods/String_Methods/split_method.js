//---------------------split method----------------------

//Convert the string into array

var sample ="Hii I am Penke Hemanth Aditya"

console.log("The String is : ",sample)

console.log("Using Split Method Without Space : " ,sample.split(""));

console.log("Using Split Method With Space : " ,sample.split(" "));



/*

----------------------output-----------------------------

The String is :  Hii I am Penke Hemanth Aditya
Using Split Method Without Space :  [
  'H', 'i', 'i', ' ', 'I', ' ',
  'a', 'm', ' ', 'P', 'e', 'n',
  'k', 'e', ' ', 'H', 'e', 'm',
  'a', 'n', 't', 'h', ' ', 'A',
  'd', 'i', 't', 'y', 'a'
]
Using Split Method With Space :  [ 'Hii', 'I', 'am', 'Penke', 'Hemanth', 'Aditya' ]

*/