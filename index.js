// code your solution here

const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  //...
]

// The function should receive 1 argument, an `Array` of JavaScript `Object`s
// * Each object has two properties: `year` and `result`
// * It should use `find()` to test each `Object` to see if the `result` is `"W"` —
//   a win!
// * It should return the `year` when the win occurred (if it occurred at all!)
// * If no win is found, it should return, sadly, `undefined`


function superbowlWin( array){

  for(let item of array){
  if(item.result === "W"){
    return item.year;
  }
}


}