$(window).on("load", function() {
  $(".loader").fadeOut(1000);
  jQuery(document).ready(function() {
    $(function(){
      $("#title").hide().delay(1000).slideDown(1000);
      $("#sub-title").hide().delay(2000).slideDown(1000);
      $("#title-hr").hide().delay(3000).animate({width: 'toggle'},1500);
    });
  });

});
