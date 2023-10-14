// code your solution here

const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  //...
]




function superbowlWin( item){
 
  if(item.result === "W"){
    //console.log( item.year);

    return item.year
  }
}

record.find(superbowlWin)


