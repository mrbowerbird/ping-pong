var output = [];
var counter = function(userNumber) {

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
  return(output);
};
// var pings = [];
// var pingCounter = function(results) {
// var count = 0;
// for(var i = 0; i < results.length; ++i){
//     if(results[i] === "ping")
//         count++;
//         pings.push(count);
// }
// };

$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("input#userNumber").val());
    var results = counter(userNumber)
    results.forEach(function(results) {
      $(".list").append("<li>" + results + "</li>");
      // var pingsCount = pingCounter(results);
      // console.log(pingsCount)
    });

    $("#result").show(results);
    $("#ping-pong").hide();
  });
});
