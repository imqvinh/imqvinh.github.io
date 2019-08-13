$(document).ready(function() {
   $(window).scroll(function(event) {
      var pos_body = $('html,body').scrollTop();
      if(pos_body <= 2600){
         $('.container_1').addClass('co-dinh-container_1');
      }
      else {
         $('.container_1').removeClass('co-dinh-container_1');
      }
      if(pos_body > 2600){
         $('.container_2').addClass('hien-container_2');
      }
      else{
         $('.container_2').removeClass('hien-container_2');
      }
   });
   $('.container_2').click(function(event) {
      $('html,body').animate({scrollTop: 0},1400);
   });
});