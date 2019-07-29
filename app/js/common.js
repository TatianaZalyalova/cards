
$(function(){
 $('#condition').on('change', function(){
  if($('#condition').prop('checked')){
 $('.sending').attr('disabled', false).fadeTo(0,1);
  }else{
 $('.sending').attr('disabled', true).fadeTo(0,0.5);
  }
 });
});

jQuery(function($){
	$('[name="phone"]').mask("+7(999) 999-9999");
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	nav: true,
  	responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:1

            },
            500:{
            	items:2
            },
            768:{
                items:3
            },
            1000:{
            	items:4
            },
            1200:{
                items:5
            }
        },
        navText : ["",""]

  });
});
jQuery(document).ready(function() {

  $("#form").submit(function() {
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "/mail.php",
      data: $(this).serialize()
    }).done(function() {
      $(th).find(".thank").addClass("active_form").css("display", "flex").fadeIn();
      setTimeout(function(){
        $(th).find(".thank").removeClass('active_form').fadeOut();
        th.trigger("reset");
      },3000);
    });
    return false;
  });
  
});