console.log("This isn't working");

$("li").hover(
    function() {
      $( this ).addClass("hover");
    }, function() {
      $( this ).removeClass( "hover");
    }
  );

  $("button").hover(
    function() {
      $( this ).addClass("btnhover");
    }, function() {
      $( this ).removeClass( "btnhover");
    }
  );

