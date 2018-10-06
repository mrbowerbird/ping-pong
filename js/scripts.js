var counter = function(userNumber) {
  var output = [];
  for (var countNumber = 1; countNumber <= userNumber; countNumber += 1) {
    if (countNumber % 5 === 0 && countNumber % 3 === 0) {
      output.push("pingpong");
    } else if (countNumber % 5 === 0) {
      output.push("pong");
    } else if (countNumber % 3 === 0) {
      output.push("ping");
    } else {
      output.push(countNumber);
    }
  }
  console.log(output);
  return(output);
};



$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("input#userNumber").val());
    var results = counter(userNumber)
    results.forEach(function(results) {
      $("#result").append("<li>" + results + "</li>");
    });

    // $("#result").text(results);
  });
});
