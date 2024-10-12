//-------------------------concat method----------------

//concat method used to join the 2 seperate array into single array


let sports=["criket","valley","hockey","football"]

console.log("The first array components are : " , sports);


let score=[24,43,54,13]

console.log("The second array components are : " , score);


let combination=sports.concat(score)

console.log("The combination of the 2 araays are : " , combination);


/*

----------------Output--------------

The first array components are :  [ 'criket', 'valley', 'hockey', 'football' ]
The second array components are :  [ 24, 43, 54, 13 ]
The combination of the 2 araays are :  [ 'criket', 'valley', 'hockey', 'football', 24, 43, 54, 13 

*/
