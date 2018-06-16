$( document ).ready(function() {
    console.log( "ready!" );
    /* card flip */
    $(".flip").hover(function(){
      $(this).find(".card").toggleClass("flipped");
      return false;
    });
    $(".full-event1").click(function(){
      $(document).find(".first").toggleClass("flipped");
      return false;
    });
    $(".full-event2").click(function(){
      $(document).find(".second").toggleClass("flipped");
      return false;
    });
    $(".full-event3").click(function(){
      $(document).find(".third").toggleClass("flipped");
      return false;
    });
    $(".full-event4").click(function(){
      $(document).find(".fourth").toggleClass("flipped");
      return false;
    });
    $(".full-event5").click(function(){
      $(document).find(".fifth").toggleClass("flipped");
      return false;
    });
    $(".full-event6").click(function(){
      $(document).find(".sixth").toggleClass("flipped");
      return false;
    });
    $(".full-event7").click(function(){
      $(document).find(".seventh").toggleClass("flipped");
      return false;
    });
    $(".full-event8").click(function(){
      $(document).find(".eighth").toggleClass("flipped");
      return false;
    });

    $(".full-event9").click(function(){
      $(document).find(".nineth").toggleClass("flipped");
      return false;
    });

if (screen.width < 960) {
  $("#full-screen").click(function(){
        $("#chatroom-modal").css("height", "745px");
        $(".modal-content").css("height", "820px");
       $(".modal-dialog").css("height", "100%");
       $(".modal-dialog").css("max-width", "98%");
        $(".modal-dialog").css("width", "96%");
        $(".modal-dialog").css("bottom", "-14px");
        $(".modal-sm").css("height", "850px");
  });
  $("#portable").click(function(){
    $("#chatroom-modal").css("height", "470px");
    $(".modal-content").css("height", "545px");
   $(".modal-dialog").css("height", "80%");
   $(".modal-dialog").css("max-width", "80%");
    $(".modal-dialog").css("width", "95%");
      $(".modal-dialog").css("bottom", "136px");
        $(".modal-dialog").css("position", "fixed");
      $(".modal-sm").css("height", "430px");
  });
    console.log('Less than 960');
}
else {
  $("#full-screen").click(function(){
        $("#chatroom-modal").css("height", "775px");
        $(".modal-content").css("height", "850px");
       $(".modal-dialog").css("height", "100%");
       $(".modal-dialog").css("max-width", "98%");
        $(".modal-dialog").css("width", "125%");
        $(".modal-sm").css("height", "850px");
  });
  $("#portable").click(function(){
    $("#chatroom-modal").css("height", "470px");
    $(".modal-content").css("height", "550px");
   $(".modal-dialog").css("height", "80%");
   $(".modal-dialog").css("max-width", "40%");
    $(".modal-dialog").css("width", "40%");
    $(".modal-dialog").css("bottom", "87px");
    $(".modal-dialog").css("position", "fixed");
    $(".modal-sm").css("height", "430px");
  });
        console.log('More than 960');
}
});

$("li.dropdown").click(function(e){
  $(this).toggleClass("open");
});
// ===== Scroll to Top ====
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(200);    // Fade in the arrow
      $('.btn-confirm').fadeIn(200);

  } else {
      $('#return-to-top').fadeOut(200);
      $('.btn-confirm').fadeOut(200);
         // Else fade out the arrow
  }
});
$('#return-to-top').click(function() {      // When arrow is clicked
  $('body,html').animate({
      scrollTop : 0                       // Scroll to top of body
  }, 500);
});
var modalConfirm = function(callback){

  $(".btn-confirm").on("click", function(){
    $("#mi-modal").modal('show');
  })

  $("#modal-btn-si").on("click", function(){
    callback(true);
    $("#mi-modal").modal('hide');
  });

  $("#modal-btn-no").on("click", function(){
    callback(false);
    $("#mi-modal").modal('hide');
  });
};

modalConfirm(function(confirm){
  if(confirm){
    //Acciones si el usuario confirma
    $("#result").html("CONFIRMADO");
  }else{
    //Acciones si el usuario no confirma
    $("#result").html("NO CONFIRMADO");
  }
});
