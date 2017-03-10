// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(item) {
    if (item === "Waldo") {
      found(arr.indexOf(item));
    }
  });
}
  //for (var i = 0; i < arr.length; i++) {
    //if (arr[i] === "Waldo") {
      //found(i);   // execute callback
    //}
  //}


function actionWhenFound(index) {
  //console.log("Found him!");
  console.log("Found Waldo at index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);