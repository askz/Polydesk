
  function showonlyone(thechosenone) {
    $("div[name*='infos']").each(function(index) {
       if ($(this).attr("id") == thechosenone) {
          $(this).show(0);
           }
        else {
           $(this).hide(0);
        }
    });
  }
