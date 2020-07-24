jQuery(document).ready(function() {
  $(function(){
    $("#title").hide().delay(500).slideDown(1000);
    $("#sub-title").hide().delay(1500).slideDown(1000);
    $("#title-hr").hide().delay(2500).animate({width: 'toggle'},1500);
  });

});
