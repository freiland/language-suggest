$(document).ready(function() {
  $("form#question").submit(function(event) {
    event.preventDefault();
    const ageInt = parseInt($("input#age").val());
    const favNumInt = parseInt($("input#favNum").val());
    const graduationInt = parseInt($("input#graduation").val());
    const compSizeInt = parseInt($("#compSize").val());
    const workLocInt = parseInt($("#workLoc").val());
  

    if (( ageInt % 2 === 0) || (favNumInt % 7 === 0)) {
      $("#go").hide();
      $("#rust").hide();
      $('#ruby').hide();
      $("#python").fadeIn(2000, function() {
        
      });
    }

    else if ((graduationInt < 2000) || (graduationInt % 3 === 0))  {
      $("#python").hide();
      $("#ruby").hide();
      $("#rust").hide();
      $("#go").fadeIn(2000, function() {
        
      });
    }

    else if (workLocInt === 1)  {
      $("#python").hide();
      $("#ruby").hide();
      $("#go").hide();
      $("#rust").fadeIn(2000, function() {
        
      });
    }

    else if (compSizeInt === 1)  {
      $("#python").hide();
      $("#ruby").hide();
      $("#rust").hide();
      $("#go").fadeIn(2000, function() {
        
      });
    }

    else {
      $("#python").hide();
      $("#rust").hide();
      $("#go").hide();
      $('#ruby').fadeIn(2000, function() {
        
      });
    }
  });
});