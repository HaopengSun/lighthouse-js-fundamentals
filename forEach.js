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
