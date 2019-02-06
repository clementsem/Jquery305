$(document).ready(function(){
  $(document).keydown(function(e) {
    switch (e.which) {
      case 37:
      $('#square').css('left', $('#square').offset().left - 10);
      break;
      case 38:
      $('#square').css('top', $('#square').offset().top - 10);
      break;
      case 39:
      $('#square').css('left', $('#square').offset().left + 10);
      break;
      case 40:
      $('#square').css('top', $('#square').offset().top + 10);
      break;
    }
    var posX = $('#square').offset().left;
    var posY = $('#square').offset().top;
    console.log(posY);
    if (posX > 1540) {
      $('#square').animate({left: "-=1600"},10);
    }
    if (posX < -10) {
      $('#square').animate({left: "-=-1600"},10);
    }
    if (posY < -10) {
      $('#square').animate({top: "-=-710"},10);
    }
    if (posY > 730) {
      $('#square').animate({top: "-=730"},10);
    }
  });
});
