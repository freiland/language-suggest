$(document).ready(function() {
  $("form#question").submit(function(event) {
    event.preventDefault();
    const ageInt = parseInt($("input#age").val());
    const favNumInt = parseInt($("input#favNum").val());
    const graduationInt = parseInt($("input#graduation").val());
  

    if ( ageInt < 25) {
      $("#python").hide();
      $("#rust").hide();
      $('#ruby').hide();
      $("#python").show();
    }

    else if ((favNumInt >= 33) && (graduationInt > 2010))  {
      $("#rust").removeClass();
      $("#rust").show();
    }
    
    //else if ((oneInt === twoInt) || (twoInt === threeInt) || (oneInt === threeInt)) {
      //$("#go").show();
    //}

    //else if ((oneInt !== twoInt) && (twoInt !== threeInt) && (oneInt !== threeInt)) {
      //$("#ruby").show(); 
    //}
      
    else {
      $('#ruby').removeClass();
      $('#ruby').show();
    }
  });
});