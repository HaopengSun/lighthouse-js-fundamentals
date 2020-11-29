var donuts = ["jelly donut", "chocolate donut", "glazed donut"];
// put function as a argument because we just use this function one time.
donuts.forEach(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
});
// there is no arguments needed for the parameters.
words = ["cat", "in", "hat"];
words.forEach(function(word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
});
// the function does not change the array itself because
// the argument in the function is just the copy the original array

var test = [12, 29, 11, 3];

test.forEach(function(item, index){
    if(item%3===0){
        // The commented statements below would not be able to change the value of item
        // because the `item` is a COPY of actual element, while actual is test[index]
        // item = item + 100;
        test[index]=test[index]+100;
        console.log("The updated element is "+item+" and actual is "+test[index]);
    } else {
        console.log("Element "+item+" is not divisible by 3");
    }    
});
console.log(test);