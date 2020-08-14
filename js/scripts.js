$(document).ready(function() {
  $("form#question").submit(function(event) {
    event.preventDefault();
    const ageInt = parseInt($("input#age").val());
    const favNumInt = parseInt($("input#favNum").val());
    const graduationInt = parseInt($("input#graduation").val());
    const compSizeInt = parseInt($("#compSize").val());
    const workLocInt = parseInt($("#workLoc").val());
  

    if (( ageInt < 25) && (favNumInt > 10)) {
      $("#go").hide();
      $("#rust").hide();
      $('#ruby').hide();
      $("#python").show();
    }

    else if ((workLocInt === 0) && (graduationInt < 2015))  {
      $("#python").hide();
      $("#ruby").hide();
      $("#rust").hide();
      $("#go").show();
    }

    else if ((ageInt >= 40) && (workLocInt === 0))  {
      $("#python").hide();
      $("#ruby").hide();
      $("#go").hide();
      $("#rust").show();
    }

    else if ((workLocInt === 1) || (favNumInt > 100) && (ageInt > 20))  {
      $("#python").hide();
      $("#ruby").hide();
      $("#rust").hide();
      $("#go").show();
    }

    else {
      $("#python").hide();
      $("#rust").hide();
      $("#go").hide();
      $('#ruby').show();
    }
  });
});