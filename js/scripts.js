$(document).ready(function() {
  $("form#question").submit(function(event) {
    event.preventDefault();
    const ageInt = parseInt($("input#age").val());
    const favNumInt = parseInt($("input#favNum").val());
    const graduationInt = parseInt($("input#graduation").val());
    const compSizeInt = parseInt($("#compSize").val());
    const workLocInt = parseInt($("#workLoc").val());
  

    if (( ageInt % 2 === 0) || (favNumInt % 5 === 0)) {
      $("#go").hide();
      $("#rust").hide();
      $('#ruby').hide();
      $("#python").show();
    }

    else if ((graduationInt < 2005) || (graduationInt % 2 ===0))  {
      $("#python").hide();
      $("#ruby").hide();
      $("#rust").hide();
      $("#go").show();
    }

    else if (workLocInt === 0)  {
      $("#python").hide();
      $("#ruby").hide();
      $("#go").hide();
      $("#rust").show();
    }

    else if (compSizeInt === 1)  {
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