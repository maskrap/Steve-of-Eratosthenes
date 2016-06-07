var prime = function(userInput) {
  var primeNumbers = []
  for (index = 2; index <= userInput; index ++) {
    primeNumbers.push(index)
  };
  for (index = 0; index <= primeNumbers.length; index ++) {
    var arrayLength = primeNumbers.length;
    for (i = arrayLength; i > index; i -- )
      if (primeNumbers[i] % primeNumbers[index] === 0) {
        primeNumbers.splice(i,1)
      }
  };
  return (primeNumbers)
};

$(document).ready(function() {
  $("#user-form").submit(function(event) {
    event.preventDefault();
    $("ul.results").empty();
    var userNum = parseInt($("#user-num").val());
    primeNumbers = prime(userNum);
    for (index = 0; index < primeNumbers.length; index ++)
      $(".results").append("<li>" + primeNumbers[index] + "</li>");
  });
});
