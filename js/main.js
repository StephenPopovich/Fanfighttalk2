$( document ).ready(function() {
    console.log( "ready!" );

});
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
  $(".modal-dialog").css("width", "45%");
    $(".modal-dialog").css("bottom", "47px");
      $(".modal-dialog").css("position", "fixed");
  $(".modal-sm").css("height", "430px");
});
$("li.dropdown").click(function(e){
  $(this).toggleClass("open");
});
// ===== Scroll to Top ====
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(200);    // Fade in the arrow
      $('#btn-confirm').fadeIn(200);

  } else {
      $('#return-to-top').fadeOut(200);
      $('#btn-confirm').fadeOut(200);
         // Else fade out the arrow
  }
});
$('#return-to-top').click(function() {      // When arrow is clicked
  $('body,html').animate({
      scrollTop : 0                       // Scroll to top of body
  }, 500);
});
var modalConfirm = function(callback){

  $("#btn-confirm").on("click", function(){
    $("#mi-modal").modal('show');
  });

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
