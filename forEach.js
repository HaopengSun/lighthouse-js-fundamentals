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

// Using forEach() will not be useful if you want to permanently modify the original array. 
// forEach() always returns undefined. 
// However, creating a new array from an existing array is simple with the powerful map() method.
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];
var improvedDonuts = donuts.map(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  return donut;
});
console.log(donuts);
console.log(improvedDonuts);

// The map() method creates a new array with the results of calling a function for every array element.
// The map() method calls the provided function once for each element in an array, in order.

var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];
var totals = bills.map(function (element) {
    element *= 1.15;
    element = element.toFixed(2);
    element = Number(element);

    return element;
});
console.log(totals);