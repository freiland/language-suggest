$(document).ready(function() {
  $("form#question").submit(function(event) {
    event.preventDefault();
    const ageInt = parseInt($("input#age").val());
    const favNumInt = parseInt($("input#favNum").val());
    const graduationInt = parseInt($("input#graduation").val());
  
    // ((oneInt === twoInt) && (twoInt === threeInt) && (oneInt === threeInt))

    if ((oneInt + twoInt <= threeInt) || (twoInt + threeInt <= oneInt) || (threeInt + oneInt <= twoInt)) {
      $("#nonTriangle").show();
    }

    else if ((oneInt === twoInt) && (twoInt === threeInt) && (oneInt === threeInt)) {
      $("#equilateral").show();
    }
    
    else if ((oneInt === twoInt) || (twoInt === threeInt) || (oneInt === threeInt)) {
      $("#isosceles").show();
    }

    else if ((oneInt !== twoInt) && (twoInt !== threeInt) && (oneInt !== threeInt)) {
      $("#scalene").show(); 
    }
      
    else {
      $('#nonTriangle').show();
    }
  });
});